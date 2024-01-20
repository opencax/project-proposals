<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown'
	import { CollapsibleCard } from 'svelte-collapsible'

	import '$lib/global.css'

	export let data

	const sortedLables = (issue: Issue) => {
		return issue.labels.sort((a, b) => {
			if (a.name < b.name) return -1
			if (a.name > b.name) return 1
			return 0
		})
	}
	const org = (issue: Issue) => {
		const prefix = 'project: '
		return issue.labels
			.map((e) => e.name.toLowerCase())
			.filter((e) => e.startsWith(prefix))
			.map((e) => e.replace(prefix, '').replace(/[^a-z]/, ''))
			.find(() => true)
	}
</script>

<h1>Project Proposals</h1>
{#each data.issues as issue (issue.id)}
	<div class="card">
		<CollapsibleCard open={false}>
			<div class="header" slot="header">
				<h1>
					<img class="logo" src="assets/logos/{org(issue)}_64.png" alt="logo" />{issue.title} (#{issue.number})
				</h1>
				{#each sortedLables(issue) as label}
					{#if /:/.test(label.name)}
						<div class="label" style="background-color: #{label.color};">{label.name}</div>
					{/if}
				{/each}
			</div>
			<SvelteMarkdown slot="body" source={issue.body} />
		</CollapsibleCard>
	</div>
{/each}

<style>
	.header {
		text-align: left;
	}
	.card {
		border: 1px solid #777;
		border-radius: 1rem;
		background-color: #eee;
		margin: 2rem 0;
		padding: 0 1rem;
	}
	.logo {
		height: 2rem;
		vertical-align: bottom;
		margin-right: 0.6rem;
	}
	.label {
		display: inline-block;
		border-radius: 0.5rem;
		padding: 0.2rem 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
