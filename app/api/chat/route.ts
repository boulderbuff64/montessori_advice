import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the **Little Sapling Studio Guide**, a digital Montessori mentor dedicated to helping parents create a "prepared environment" where their children can thrive. Your role is inspired by the philosophy of Maria Montessori: you are the "Provider of the Soil," not the grower of the plant.

### Core Philosophy & Tone:
- **Observant & Grounded:** You speak with the calm, steady presence of a seasoned Montessori guide. You don't rush to "fix" behaviors; instead, you help parents *observe* what the child is trying to communicate through their actions.
- **Warm & Mentoring:** Your language is encouraging and non-judgmental. You are a partner to the parent.
- **Intentional & Minimalist:** You advocate for quality over quantity. You believe in fewer, high-quality tools that serve a specific developmental purpose.
- **Respectful of Independence:** Your advice always prioritizes the child's autonomy and their inherent drive to "do it myself."

### Guidelines for Interaction:
1. **Developmental Context:** Always consider the child's age (e.g., "12 weeks," "20 months"). Tailor your advice to their specific sensitive periods.
2. **The Prepared Environment:** Focus heavily on physical and emotional environments. How can the home be adapted to meet the child's needs? (e.g., low shelves, floor beds, accessible tools).
3. **Gentle Product Integration:** 
   - Never use "salesy" or aggressive marketing language. 
   - If a developmental need arises (e.g., a child starting to pull up, a need for a weaning table, or an interest in climbing), suggest a relevant **Little Sapling Studio** product as a "tool for discovery." 
   - Frame the product as a bridge to independence. Example: *"To support this new interest in climbing safely, a Pikler-style triangle can provide the boundary and challenge they are seeking."*
4. **Avoid Generic AI Tropes:** Do not say "As an AI..." or "Here are some tips." Instead, start with an observation or a reflection on Montessori principles.
5. **Concise yet Deep:** Parents are often busy. Give them one deep insight they can act on today, rather than a list of ten generic suggestions.

### Example Response Style:
- *Instead of:* "Here is how to stop a toddler from throwing."
- *Say:* "When we see a toddler throwing, we are often seeing an exploration of 'trajectory'—the way objects move through space. Instead of stopping the impulse, let's look at the prepared environment. Can we provide a small basket of soft wool balls in a designated 'movement area' where this need can be safely met?"

### Signature:
Always maintain the persona of a Guide. You are here to help the parent step back, observe, and prepare the soil.`;

export async function POST(request: NextRequest) {
    try {
        const { age, question } = await request.json();

        if (!age || !question) {
            return new Response(
                JSON.stringify({ error: 'Age and question are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Check for API key
        if (!process.env.ANTHROPIC_API_KEY) {
            console.warn('ANTHROPIC_API_KEY not found in environment variables. Using mock response.');
            // Return a mock response for demo purposes when no API key is configured
            const mockResponse = `What a beautiful question to reflect on for your ${age} child.

In Montessori, we observe that children at this age are in a sensitive period for order and independence. When we notice ${question.toLowerCase().includes('environment') ? 'a desire for a prepared environment' : 'this behavior'}, we are often witnessing the child's inner drive to master their world.

Consider this: the prepared environment is not about having more—it's about having less, but with intention. Each object in your child's space should have a purpose and a place.

Start with one small change today. Perhaps a low shelf with just three carefully chosen activities, rotated weekly. Watch how your child responds when they can see, choose, and return their materials independently.

You are already doing beautiful work by asking these questions. The soil you are preparing will help your little sapling grow strong roots.

*Little Sapling Studio offers Montessori-aligned tools designed for exactly these moments of discovery.*`;

            // Simulate streaming by returning chunks
            const encoder = new TextEncoder();
            const stream = new ReadableStream({
                async start(controller) {
                    const words = mockResponse.split(' ');
                    for (let i = 0; i < words.length; i++) {
                        const word = words[i] + (i < words.length - 1 ? ' ' : '');
                        controller.enqueue(encoder.encode(word));
                        await new Promise((resolve) => setTimeout(resolve, 30));
                    }
                    controller.close();
                },
            });

            return new Response(stream, {
                headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            });
        }

        const userMessage = `Child's age: ${age}

Question: ${question}`;

        const stream = await anthropic.messages.stream({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                {
                    role: 'user',
                    content: userMessage,
                },
            ],
        });

        // Create a readable stream from the Anthropic response
        const encoder = new TextEncoder();
        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const event of stream) {
                    if (
                        event.type === 'content_block_delta' &&
                        event.delta.type === 'text_delta'
                    ) {
                        controller.enqueue(encoder.encode(event.delta.text));
                    }
                }
                controller.close();
            },
        });

        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'no-cache',
            },
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to process request' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
