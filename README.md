# Gomo Test

A Next.js application with Sanity CMS for managing bakery and hospitality equipment content.

## CMS

This project uses [Sanity](https://www.sanity.io/) as its headless CMS.

**Studio:** Accessible at `/studio` when the dev server is running.

**Schema types:**
- `homepage` — Homepage hero, intro, brands served
- `solutionCategory` — Solution/industry categories
- `featureItem` — Feature highlight items
- `insight` — News, articles, and press releases
- `product` — Product catalog with name, slug, description, images, gallery, category, article number, models, SEO
- `teamMember` — Team member profiles with name, role, description, image, phone, email, LinkedIn
- `headerSettings` — Navigation bar configuration (logo, nav items, CTA)
- `footerSettings` — Footer configuration (columns, links, contact info, newsletter)
- `seo` — Reusable SEO object (meta title, description, OG image)

## Setup

### Prerequisites

- Node.js 18+
- A Sanity project (or use the existing one)

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-07
```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Studio

The Sanity Studio is embedded at `/studio`. If Sanity is not configured, the app falls back to mock data so the UI renders without a running CMS.

## API Endpoints

### `POST /api/contact`

Contact form submission endpoint.

**Request body:**

```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (required)",
  "message": "string (optional)"
}
```

**Success response (200):**

```json
{
  "success": true,
  "message": "Message received successfully"
}
```

**Validation error (400):**

```json
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Invalid email format" }
  ]
}
```

**Server error (500):**

```json
{
  "success": false,
  "error": "Failed to process request"
}
```
