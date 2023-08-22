export const load = async ({ params }) => {
	let url = 'https://icanhazdadjoke.com/';
	if (params.id) {
		url += `j/${params.id}`;
	}
	const result = await fetch(url, {
		headers: { Accept: 'application/json' }
	}).then((r) => r.json());

	return { joke: result };
};
