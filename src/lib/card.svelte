<script lang="ts">
	import collapse from 'svelte-collapse'

	let open = false

	const toggle = () => {
		open = !open
	}
</script>

<div class="card">
	<div class="logo">
		<slot name="logo" />
	</div>
	<button class="title" on:click={toggle}>
		<slot name="title" />
		<div class="details"><div class="details-content" class:bounce={!open}></div></div>
	</button>
	<slot name="header" />
	<div class="body" use:collapse={{ open }}>
		<slot />
	</div>
</div>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
	button:hover .details {
		display: block;
	}
	.card {
		position: relative;
		border: 1px solid #777;
		border-radius: 1rem;
		background-color: #eee;
		margin: 2rem 0 2rem 4rem;
		padding: 0 4rem;
	}
	.logo :global(img) {
		width: 100%;
	}
	.logo {
		position: absolute;
		display: inline-block;
		height: 6rem;
		width: 6rem;
		vertical-align: bottom;
		top: -1rem;
		left: -5rem;
		background-color: white;
		border: 1px solid #777;
		border-radius: 50%;
		text-align: center;
		vertical-align: middle;
		margin: 0;
		padding: 1rem;
	}
	.details {
		display: none;
		position: absolute;
		bottom: -1rem;
		left: 50%;
	}
	.details-content {
		position: relative;
		left: -50%;
		width: 40px;
		height: 40px;
	}
	.bounce {
		-webkit-animation: bounce 2s infinite;
		animation: bounce 2s infinite;
		background-image: url(arrows.svg);
		background-size: contain;
	}
	.title {
		text-align: left;
	}
	.body {
		height: 0;
		overflow: hidden;
	}
	.body :global(img) {
		max-width: 90%;
		max-height: 400px;
	}

	/* Scroll down indicator (bouncing) */
	@-webkit-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-webkit-transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-30px);
		}
		60% {
			-webkit-transform: translateY(-15px);
		}
	}
	@-moz-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-30px);
		}
		60% {
			-moz-transform: translateY(-15px);
		}
	}
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-30px);
			-moz-transform: translateY(-30px);
			-ms-transform: translateY(-30px);
			-o-transform: translateY(-30px);
			transform: translateY(-30px);
		}
		60% {
			-webkit-transform: translateY(-15px);
			-moz-transform: translateY(-15px);
			-ms-transform: translateY(-15px);
			-o-transform: translateY(-15px);
			transform: translateY(-15px);
		}
	}
</style>
