import { Suspense } from "react";
import { connection } from "next/server";

async function RenderedAt() {
  await connection();
  return <code>{new Date().toISOString()}</code>;
}

export default function Home() {
  return (
    <main>
      <h1>You&apos;re live on Easel</h1>
      <p>
        This Next.js app was deployed from a template. Connect GitHub and every push gets its own deployment.
      </p>
      <p className="muted">
        Rendered on the server at{" "}
        <Suspense fallback={<code>…</code>}>
          <RenderedAt />
        </Suspense>
      </p>
      <nav>
        <a href="https://easel.sh/docs/framework-guides/nextjs">Next.js on Easel</a>
        <a href="https://github.com/easel-sh/templates/tree/main/nextjs">Template source</a>
      </nav>
    </main>
  );
}
