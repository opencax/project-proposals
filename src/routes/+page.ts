import type { PageLoad } from './$types'
import seedrandom from 'seedrandom'

export const prerender = true;

const shuffle = (arr: Issue[]): Issue[] => {
    // re-seed every minute
    const rng = seedrandom(new Date().toISOString().substring(0, 16));
    return arr
        .map((e) => ({ e, sort: rng() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ e }) => e)
}

export const load: PageLoad = (async ({ fetch }) => {
    const res = await fetch('./issues.json')
    const issues: Issue[] = shuffle(await res.json())
    return { issues }
})
