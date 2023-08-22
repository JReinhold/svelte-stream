// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	await new Promise((r) => setTimeout(r, 500));
	return { fromLayout: "this is data" };
};
