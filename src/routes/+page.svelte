<script lang="ts">
	export let data

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
		<h2>
			<img class="logo" src="assets/logos/{org(issue)}_64.png" alt="logo" />{issue.title} (#{issue.number})
		</h2>
		{#each issue.labels as label}
			{#if /:/.test(label.name)}
				<div class="label" style="background-color: #{label.color};">{label.name}</div>
			{/if}
		{/each}
		<p></p>
	</div>
{/each}

<style>
	h2 {
		font-size: 1.6rem;
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
	}
</style>
