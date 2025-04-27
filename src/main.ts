import './style.css'
import { setupCode } from './code.ts'

const code = `<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/light-switch" />
<Subheading>Ghost</Subheading>
<Playground code={examples.variants.code}>
	<examples.variants.Component />
</Playground>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
<pre id="code">${code}</pre>
  </div>
`

setupCode(document.querySelector<HTMLPreElement>('#code')!, code)
