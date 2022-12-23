# Journal

# 2022-12-23 22:30

I did it! After 2 days of research and tutorials, I migrated the React version to SvelteKit. No cares about useReducer, but with full component state and even a little TypeScript on the way. Highly satisfying that is.

If there is only one route ('/'), SvelteKit is OK with that. In this case everything happens within the `routes` directory. Inside this directory, SvelteKit only cares about `+layout.svelte` and `+page.svelte`. The rest is ignored by the router.