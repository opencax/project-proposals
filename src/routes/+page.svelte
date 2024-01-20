<script lang="ts">
	import { flip } from 'svelte/animate'
	import SvelteMarkdown from 'svelte-markdown'
	import { CollapsibleCard } from 'svelte-collapsible'

	import '$lib/global.css'
	import type { MouseEventHandler } from 'svelte/elements'
	import Card from '$lib/card.svelte'

	export let data
	let filter: Filter = {}

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
	const onFilterChanged = (f: Filter) => {
		return data.issues.filter((i) => {
			let include = true
			if (include && f.difficulty) {
				include = i.labels.findIndex((l) => l.name === f.difficulty) >= 0
			}
			if (include && f.lang) {
				include = i.labels.findIndex((l) => l.name === f.lang) >= 0
			}
			if (include && f.length) {
				include = i.labels.findIndex((l) => l.name === f.length) >= 0
			}
			if (include && f.project) {
				include = i.labels.findIndex((l) => l.name === f.project) >= 0
			}
			return include
		})
	}
	const onLabelFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
		const label = e.target.innerText
		const f = { ...filter }
		if (label.startsWith('Difficulty:')) {
			f.difficulty = label
		} else if (label.startsWith('Lang:')) {
			f.lang = label
		} else if (label.startsWith('Size:')) {
			f.length = label
		} else if (label.startsWith('Project:')) {
			f.project = label
		}
		filter = f
	}
	const clearFilter = () => {
		filter = {}
	}

	$: filteredIssues = onFilterChanged(filter)
	$: nrOfIssues = data.issues.length
	$: nrOfFilteredIssues = filteredIssues.length
</script>

<h1>Project Proposals</h1>
<p>
	Showing {nrOfFilteredIssues} projects{#if nrOfIssues != nrOfFilteredIssues}
		&nbsp;(of {nrOfIssues} total).
		<button on:click={clearFilter}>Clear filter</button>
	{:else}.
	{/if}
</p>

{#each filteredIssues as issue (issue.id)}
	<div animate:flip={{ duration: 800 }}>
		<Card>
			<h1 slot="title">
				{issue.title} (<a target="_blank" href={issue.html_url}>#{issue.number}</a>)
			</h1>
			<img slot="logo" class="logo" src="assets/logos/{org(issue)}_64.png" alt="logo" />
			<p slot="header">
				{#each sortedLables(issue) as label}
					{#if /:/.test(label.name)}
						<button
							class="label"
							on:click={onLabelFilter}
							style="background-color: #{label.color};"
						>
							{label.name}
						</button>
					{/if}
				{/each}
			</p>
			<SvelteMarkdown source={issue.body} />
		</Card>
	</div>
{/each}

<style>
	.label {
		z-index: 2;
		display: inline-block;
		border: 1px solid #777;
		border-radius: 0.5rem;
		padding: 0.2rem 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
