<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>SvelteKit on Easel</title>
</svelte:head>

<main>
	<h1>You're live on Easel</h1>
	<p>This SvelteKit app was deployed from a template. Connect GitHub and every push gets its own deployment.</p>
	<p class="muted">Rendered on the server at <code>{data.renderedAt}</code></p>
	<nav>
		<a href="https://easel.sh/docs/framework-guides/sveltekit">SvelteKit on Easel</a>
		<a href="https://github.com/easel-sh/templates/tree/main/sveltekit">Template source</a>
	</nav>
</main>

