# NEXT:

* [x] ~~importing the svgs into `/src/routes/images`~~
* [x] ~~importing the conversion function into `/src/routes/helpers.js`~~
* [x] ~~build and format the center component~~
* [ ] build and format the footer component with a single hard-coded footer cart
* [ ] build and format the footer cart component 
* [ ] connect the components with the props
* [ ] add animation with 'stagger' and `direction: 'reverse'` from _anime.js._


# Journal

# 2023-01-04 21:00

I'm back from Christmas holidays, and I have found that I no longer need VS Code for
implementing my stuff. A special version of Neovim, LunarVim, will do the same
job, works faster than VS code and won't let me miss anything I had with VS Code.

But I'm out of the project and I have to get in again. Last thing I did was adding
the SVGs for the clipart inside the components.


# 2022-12-23 22:30

I did it! After 2 days of research and tutorials, I migrated the React version
to SvelteKit. No cares about useReducer, but with full component state and even
a little TypeScript on the way. Highly satisfying that is.

If there is only one route ('/'), SvelteKit is OK with that. In this case
everything happens within the `routes` directory. Inside this directory,
SvelteKit only cares about `+layout.svelte` and `+page.svelte`. The rest is
ignored by the router.
