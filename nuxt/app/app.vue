<script setup lang="ts">
const { data: renderedAt } = await useAsyncData("rendered-at", () => Promise.resolve(new Date().toISOString()));
useHead({ title: "Nuxt on Easel" });
</script>

<template>
  <main>
    <h1>You're live on Easel</h1>
    <p>This Nuxt app was deployed from a template. Connect GitHub and every push gets its own deployment.</p>
    <p class="muted">Rendered on the server at <code>{{ renderedAt }}</code></p>
    <nav>
      <a href="https://easel.sh/docs/framework-guides/nuxt">Nuxt on Easel</a>
      <a href="https://github.com/easel-sh/templates/tree/main/nuxt">Template source</a>
    </nav>
  </main>
</template>

<style>
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;background:#fafafa;color:#171717}
@media (prefers-color-scheme:dark){body{background:#0a0a0a;color:#ededed}.muted{color:#a1a1a1}a{color:#ededed}}
main{max-width:560px;margin:0 auto;padding:18vh 24px 48px;display:flex;flex-direction:column;gap:16px}
h1{font-size:32px;line-height:1.15;letter-spacing:-0.03em;margin:0}
p{margin:0;font-size:16px;line-height:1.6}
.muted{color:#666}
nav{display:flex;gap:20px;font-size:14px;margin-top:8px}
a{color:#171717;text-underline-offset:3px}
code{font-size:13px}
</style>
