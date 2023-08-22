<script>
	export let data;
</script>

<h1>Joke</h1>
{#if data}
	<p>{data.joke.joke}</p>
	<code><a href={`/joke/${data.joke.id}`}>{data.joke.id}</a></code>
{/if}
