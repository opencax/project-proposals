import type { PageLoad } from './$types';

export const prerender = true;

const shuffle = (arr: Issue[]): Issue[] => {
    return arr
        .map((e) => ({ e, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ e }) => e)
}

export const load: PageLoad = (async ({ fetch }) => {
    const res = await fetch('./issues.json');
    const issues: Issue[] = await res.json();
    return { issues: shuffle(issues) }
})
