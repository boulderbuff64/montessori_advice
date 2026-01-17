# PRD: Little Sapling Studio - AI Montessori Guide

## 1. Project Overview & Objectives
* **Project Name:** Little Sapling Studio AI Guide
* **Role:** An interactive brand-focused web tool that acts as a digital Montessori Guide for parents.
* **Objective:** To provide high-value, personalized developmental advice grounded in the brand's specific philosophy, ultimately driving product discovery and email list growth.
* **Core Value Prop:** "The Provider of the Soil" — giving parents the knowledge and tools to create a prepared environment at home.

---

## 2. Brand & Visual Identity
* **Brand Name:** Little Sapling Studio
* **Visual Vibe:** Grounded, Organic, Intentional, and Calm.
* **Color Palette:**
    * **Primary:** Earthy Sage (`#728C69`) & Soft Sand (`#F5F1E9`)
    * **Accents:** Terracotta (`#C06C4C`) & Deep Forest Green (`#2D3B2D`)
* **Typography:**
    * **Headers:** Soft, rounded Serif (e.g., Recollect or Cooper Light).
    * **Body:** Clean, airy Sans-Serif (e.g., Montserrat or Open Sans).
* **Imagery Style:** High-key natural light, focusing on tactile details (wood grain, small hands).

---

## 3. The "Magic" Utility
* **The Feature:** A RAG-powered (Retrieval-Augmented Generation) AI Guide that uses the brand's specific books and blog posts to answer parenting and environment-setup questions.
* **Aha! Moment:** When a parent receives a response that feels deeply observant and warm—like a professional teacher—rather than a generic AI.

---

## 4. User Experience & Inputs
* **Mobile-First Design:** Optimized for one-handed use and quick interactions.
* **Input Fields:**
    1.  **Child's Age (Text Input):** Must be parsed by AI to understand "12 weeks," "20 months," or "4 years."
    2.  **Question/Issue (Medium Text Area):** Clear placeholder examples: *"Help me set up a prepared environment,"* or *"What to do with sibling rivalry?"*
* **Loading State:** An SVG animation of a "Growing Sapling" instead of a standard spinner.
* **Post-Response CTA:** * "Ask another question" button.
    * "Email this advice to me" (Email lead capture).

---

## 5. Technical Architecture
* **Frontend:** Next.js (standard framework) with Tailwind CSS.
* **LLM:** Anthropic API (Claude 4.5 Sonnet).
* **Knowledge Base:** * **Source:** `/knowledge` folder in the GitHub repository containing PDFs and Markdown files.
    * **Method:** Simple RAG implementation using a vector store (e.g., Supabase Vector or local embeddings) to feed context to Claude.
* **Persistence:** No native voice mode (rely on OS-level dictation); email leads stored via API (e.g., Resend or Mailchimp).

---

## 6. AI Persona & Logic
* **System Prompt Persona:** "You are the Little Sapling Studio Guide. You are observant, warm, and speak like a mentor. You avoid 'salesy' language. Focus on 'the prepared environment' and 'respecting the child's independence.'"
* **Product Integration Logic:** If the user's query relates to a physical need (e.g., "climbing," "organization," "toddler-sized furniture"), the AI should naturally recommend a relevant Little Sapling Studio product as a "tool for discovery."

---

## 7. Success Metrics
* **Conversion:** Number of clicks on "Product Integration" links.
* **Lead Gen:** Percentage of users who provide an email to save their advice.
* **Engagement:** Average number of questions asked per session.
