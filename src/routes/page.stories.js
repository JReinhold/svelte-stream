import Root from "./+page.svelte";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
	title: "Pages/Root",
	component: Root,
	parameters: { layout: "fullscreen" },
};

export const Default = {};

export const Clicks = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = (await canvas.queryAllByRole("button"))[1];
		await userEvent.click(button);
		await userEvent.click(button);
		await userEvent.click(button);
		await userEvent.click(button);
		expect(await canvas.findByText("clicks: 4")).toBeInTheDocument();
	},
};
