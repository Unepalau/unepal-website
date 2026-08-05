This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email Setup

The static website submits contact requests to the deployed `contact` Firebase Function in the `unepalwebsite` project. It never relies on a Next.js `/api/contact` route.

The verified endpoint is used by default. To override it for an approved environment, create a `.env.local` file with only the public Function URL:

```bash
NEXT_PUBLIC_CONTACT_API_URL=https://us-central1-unepalwebsite.cloudfunctions.net/contact
```

The client validates that an override still targets the approved `unepalwebsite` contact Function. An unavailable or invalid endpoint leaves the form non-destructive and displays the established `hello@unepal.com` fallback.

Do not place mail-provider keys or Function-only email configuration in the website root environment. Manage those values in Firebase Functions configuration. Browser and component tests mock requests and must not send real messages.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
