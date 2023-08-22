<script>
	import Layout from "./+layout.svelte";

	export let content;
</script>

<Layout {...$$restProps}><svelte:component this={content} /></Layout>
