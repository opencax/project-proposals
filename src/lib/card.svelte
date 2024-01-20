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
		background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHdpZHRoPSI1MTJweCIKICAgaGVpZ2h0PSI1MTJweCIKICAgdmlld0JveD0iMCAwIDUxMiA1MTIiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Inguc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoYjBhODQ4NjU0MSwgMjAyMi0xMi0wMSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzciCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC40NjA5Mzc1IgogICBpbmtzY2FwZTpjeD0iLTEzNi42Nzc5NyIKICAgaW5rc2NhcGU6Y3k9IjI1Ny4wODQ3NSIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIyMjU2IgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxNDI3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIC8+CjxwYXRoCiAgIGZpbGw9IiNGRkZGRkYiCiAgIGQ9Im0gMjkzLjc1MSw0OTcuODY4IGMgLTIwLjE4MSwyMC4xNzkgLTUzLjE2NSwxOS45MTMgLTczLjY3MywtMC41OTUgdiAwIEMgMTk5LjU3LDQ3Ni43NjUgMTk5LjMwNSw0NDMuNzggMjE5LjQ4NCw0MjMuNjAxIGwgMTg5Ljk5OSwtMTkwIGMgMjAuMTc4LC0yMC4xNzggNTMuMTY0LC0xOS45MTMgNzMuNjcyLDAuNTk1IHYgMCBjIDIwLjUwOCwyMC41MDkgMjAuNzcyLDUzLjQ5MiAwLjU5NSw3My42NzEgeiIKICAgaWQ9InBhdGgyIgogICBzdHlsZT0iZmlsbDojMDEwMTAxO2ZpbGwtb3BhY2l0eToxIiAvPgo8cGF0aAogICBmaWxsPSIjRkZGRkZGIgogICBkPSJtIDIyMC4yNDksNDk3Ljg2OCBjIDIwLjE4LDIwLjE3OSA1My4xNjQsMTkuOTEzIDczLjY3MiwtMC41OTUgdiAwIGMgMjAuNTA5LC0yMC41MDggMjAuNzc0LC01My40OTMgMC41OTYsLTczLjY3MiBsIC0xOTAsLTE5MCBDIDg0LjMzOSwyMTMuNDIzIDUxLjM1MywyMTMuNjg4IDMwLjg0NiwyMzQuMTk2IHYgMCBjIC0yMC41MDgsMjAuNTA5IC0yMC43NzIsNTMuNDkyIC0wLjU5NSw3My42NzEgeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojMDEwMTAxO2ZpbGwtb3BhY2l0eToxIiAvPjxwYXRoCiAgIGZpbGw9IiNGRkZGRkYiCiAgIGQ9Im0gMjkyLjYxNDkxLDI4My41MjMxNCBjIC0yMC4xODEsMjAuMTc5IC01My4xNjUsMTkuOTEzIC03My42NzMsLTAuNTk1IHYgMCBjIC0yMC41MDgsLTIwLjUwOCAtMjAuNzczLC01My40OTMgLTAuNTk0LC03My42NzIgbCAxODkuOTk5LC0xOTAgYyAyMC4xNzgsLTIwLjE3OCA1My4xNjQsLTE5LjkxMyA3My42NzIsMC41OTUgdiAwIGMgMjAuNTA4LDIwLjUwOSAyMC43NzIsNTMuNDkyIDAuNTk1LDczLjY3MSB6IgogICBpZD0icGF0aDItMyIKICAgc3R5bGU9ImZpbGw6IzAxMDEwMTtmaWxsLW9wYWNpdHk6MSIgLz48cGF0aAogICBmaWxsPSIjRkZGRkZGIgogICBkPSJtIDIxOS4xMTI5MSwyODMuNTIzMTQgYyAyMC4xOCwyMC4xNzkgNTMuMTY0LDE5LjkxMyA3My42NzIsLTAuNTk1IHYgMCBjIDIwLjUwOSwtMjAuNTA4IDIwLjc3NCwtNTMuNDkzIDAuNTk2LC03My42NzIgbCAtMTkwLC0xOTAgYyAtMjAuMTc4LC0yMC4xNzggLTUzLjE2NCwtMTkuOTEzIC03My42NzEsMC41OTUgdiAwIGMgLTIwLjUwOCwyMC41MDkgLTIwLjc3Miw1My40OTIgLTAuNTk1LDczLjY3MSB6IgogICBpZD0icGF0aDQtNiIKICAgc3R5bGU9ImZpbGw6IzAxMDEwMTtmaWxsLW9wYWNpdHk6MSIgLz4KPC9zdmc+Cg==);
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
