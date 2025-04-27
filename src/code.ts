import { highlighter } from "./shiki";

export async function setupCode(element: HTMLPreElement, code: string) {
	const hl = await highlighter;

	element.innerHTML = hl.codeToHtml(code, {
		lang: 'svelte',
		themes: {
			light: "github-light-default",
			dark: "github-dark-default",
		},
	});
}
