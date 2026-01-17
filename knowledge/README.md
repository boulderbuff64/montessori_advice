# Little Sapling Studio Knowledge Base

This folder is reserved for the RAG (Retrieval-Augmented Generation) implementation.

## Purpose

In future iterations, this folder will contain:
- **PDFs** of Montessori books and resources
- **Markdown files** with blog content and philosophy guides
- **Product catalogs** with descriptions and use cases

## How RAG Will Work

1. **Document Ingestion**: PDFs and markdown files will be processed and chunked
2. **Embedding Generation**: Each chunk will be converted to vector embeddings
3. **Vector Storage**: Embeddings stored in Supabase Vector or similar
4. **Query Enhancement**: User questions will retrieve relevant context
5. **Augmented Responses**: Claude will receive retrieved context alongside user queries

## Getting Started

To add knowledge to the system:

1. Add PDF files to this folder
2. Add markdown content files
3. Run the ingestion script (coming soon)

## Recommended Content

- Maria Montessori's writings on the prepared environment
- Age-appropriate activity guides (0-3, 3-6, 6-12)
- Little Sapling Studio product guides and use cases
- Blog posts on common parenting scenarios
