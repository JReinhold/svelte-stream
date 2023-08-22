import RootLayout from "./+layout.svelte";
import LayoutStoryMiddlelayer from "./LayoutStoryMiddlelayer.svelte";
import RootPage from "./+page.svelte";
import JokePage from "./joke/[[id]]/+page.svelte";

export default {
	title: "Layouts/Root",
	component: RootLayout,
	parameters: { layout: "fullscreen" },
};

export const Default = {};

export const WithContent = {
	render: (args) => ({ Component: LayoutStoryMiddlelayer, props: args }),
	args: {
		content: RootPage,
		data: {
			fromLayout: "in storybook",
		},
	},
	argTypes: {
		content: {
			control: "select",
			options: ["Root", "Joke"],
			mapping: {
				Root: RootPage,
				Joke: JokePage,
			},
		},
	},
};
