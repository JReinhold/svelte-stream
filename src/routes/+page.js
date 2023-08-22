// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ params }) => {
	const result = await fetch("https://icanhazdadjoke.com/", {
		headers: { Accept: "application/json" },
	}).then((r) => r.json());

	console.log(result);
	return { joke: result };
};
