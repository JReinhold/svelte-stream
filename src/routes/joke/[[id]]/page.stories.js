import JokePage from "./+page.svelte";
import { load } from "./+page.js";
import { load as layoutLoad } from "../../+layout.js";
import RootLayout from "../../+layout.svelte";

export default {
	title: "Pages/Joke",
	component: JokePage,
	parameters: { layout: "fullscreen" },
	decorators: [
		(story, storyContext) => {
			console.log(storyContext);
			return { Component: RootLayout, props: { data: storyContext.loaded } };
		},
	],
	loaders: [layoutLoad],
};

export const Default = {};

export const WithLayout = {
	// decorators: [
	// 	(storyContext) => {
	// 		console.log(storyContext.loaded);
	// 		return { Component: RootLayout, props: storyContext.loaded };
	// 	},
	// ],
};

export const WithDataArg = {
	...WithLayout,
	args: {
		data: {
			joke: {
				id: "someId",
				joke: "some joke",
			},
		},
	},
};

export const WithDataLoad = {
	...WithLayout,
	loaders: [() => load({ params: { id: "ZgahF6MZDd" } })],
	render: (args, storyContext) => ({
		Component: JokePage,
		props: { data: storyContext.loaded },
	}),
};

export const WithDynamicDataLoad = {
	...WithLayout,
	args: {
		jokeId: "ZgahF6MZDd",
	},
	loaders: [
		(storyContext) => load({ params: { id: storyContext.args.jokeId } }),
	],
	render: (args, storyContext) => ({
		Component: JokePage,
		props: { data: storyContext.loaded },
	}),
};
