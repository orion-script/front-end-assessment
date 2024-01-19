This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
I chose to use reduxtoolkit instead of redux because it's easy compare to redux (Redux has a lots of boiler plate that i have to write which i won't have to write in reduxtoolkit). After installing the reduxtookit, i created a folder(Redux) then created my store.ts inside the Redux folder, Then i created a slices folder inside my Redux folder and the Slices folder consist of my cartSlice.ts. I ran into a problem here and i was getting an error in my browser "invariant expected app router to be mounted", I was able to solve the error by creating a Providers.tsx file inside my Redux folder and inport my Provider and store file there adn then import my Provider.tsx inside my layout.tsx as a parent container.
Seriously, it was very hard completing this project because i had to write 4 exams this same week while coding this project out, i had some problems with the dependency compatibility at some point but i was able to solve those problems with the help of nextjs documentation, It would be a blessing if i get this job plus i am now a Graduate and need job.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
