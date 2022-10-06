---
layout: "@layouts/BlogPost.astro"
title: Improving bundle size of Next.js app
description: Lorem ipsum dolor sit amet
pubDate: 2022-09-28T17:00:10.447Z
heroImage: /images/uploads/1st.png
tags:
  - Frontend;Next.js
---

## Shipping only modern JavaScript

Next.js currently targets [ES5](https://www.w3schools.com/js/js_es5.asp) for JS output and autoprefixes CSS in order to support legacy browsers. This results in much larger JS and CSS output because newer features need to be down-leveled. You can opt-out of this behavior with experimental flags below:

```js
const nextConfig = {
  experimental: {
    legacyBrowsers:  false,
    browsersListForSwc:  true
  }
}

module.exports = nextConfig
```

- [Related Github discussion](https://github.com/vercel/next.js/discussions/33227)
- [Next.js blog article](https://nextjs.org/blog/next-12-2#other-improvements)

## Use `next/future/image`

The `next/future/image` component improves both the performance and developer experience of `next/image` by using the native `<img>` element with better default behavior.
This component uses browser native [lazy loading](https://caniuse.com/loading-lazy-attr).

```jsx
// Before
import Image from 'next/image'

// After
import Image from 'next/future/image'
```

You might need to tweak some properties, because `layout` is not available.

- [Next.js docs](https://nextjs.org/docs/api-reference/next/future/image)

## Use `next/dynamic` imports

Next.js supports lazy loading external libraries with `import()` and React components with `next/dynamic`. Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. Components or libraries are only imported and included in the JavaScript bundle when they're used.

`next/dynamic` is an extension of [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy). When used in combination with [`Suspense`](https://reactjs.org/docs/react-api.html#reactsuspense), components can delay hydration until the Suspense boundary is resolved.

By using `next/dynamic`, the header component will not be included in the page's initial JavaScript bundle. The page will render the Suspense `fallback` first, followed by the `Header` component when the `Suspense` boundary is resolved.

```jsx
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("../components/header"), {
  suspense: true,
});

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>
  );
}
```

We can also defer loading external libraries until module is needed, a.k.a user types in the search input.  
This example uses `fuse.js`.

```jsx
import { useState } from "react";

const names = ["Tim", "Joe", "Bel", "Lee"];

export default function Page() {
  const [results, setResults] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(names);

          setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
```

- [Next.js docs](https://nextjs.org/docs/advanced-features/dynamic-import)

## Replace `react` with `preact`

[`Preact`](https://preactjs.com) is a fast 3kB alternative to React with the same modern API. It doesn't ship Virtual DOM and uses native browser APIs. You can give it a shot, but some packages might not work and you might run into some issues. Make sure to test changes before deploying to production!

Here is basic `package.json` needed for replacing React with Preact

```json
{
  "scripts": {
    ...
  },
  "dependencies": {
    "next": "latest",
	"next-plugin-preact": "latest",
    "preact": "latest",
    "preact-render-to-string": "latest",
    "react": "npm:@preact/compat",
    "react-dom": "npm:@preact/compat",
    "react-ssr-prepass": "npm:preact-ssr-prepass"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "typescript": "latest"
  }
}
```

Then you need to tweak your `next.config.js` to use `next-plugin-preact`:

```js
const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
const nextConfig = {
/* regular next.js config options here */
}

module.exports = withPreact(nextConfig)
```

And that's it. There is no need to replace your imports, because `preact` has a combability layer with `react`.
Here is a bundle size comparison:

- React:

```bash
Route (pages)                              Size     First Load JS
┌ ○ /                                      2.39 kB        79.6 kB
├ ○ /404                                   194 B          77.4 kB
├ ○ /about                                 274 B          77.5 kB
├ ● /ssg                                   305 B          77.5 kB
└ λ /ssr                                   305 B          77.5 kB
+ First Load JS shared by all              77.2 kB
  ├ chunks/framework-7dc8a65f4a0cda33.js   45.2 kB
  ├ chunks/main-18053c3f67c4d467.js        31 kB
  ├ chunks/pages/_app-dc14f8483464b560.js  201 B
  └ chunks/webpack-69bfa6990bb9e155.js     769 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

- Preact:

```bash
Route (pages)                              Size     First Load JS
┌ ○ /                                      2.4 kB           43 kB
├ ○ /404                                   194 B          40.8 kB
├ ○ /about                                 271 B          40.9 kB
├ ● /ssg                                   305 B          40.9 kB
└ λ /ssr                                   303 B          40.9 kB
+ First Load JS shared by all              40.6 kB
  ├ chunks/framework-f2746757f5385dad.js   8.73 kB
  ├ chunks/main-632edec26452657f.js        30.9 kB
  ├ chunks/pages/_app-dc14f8483464b560.js  201 B
  └ chunks/webpack-69bfa6990bb9e155.js     769 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

As you can see, we stripped out about 37kB of JS.  
Because of that, browser doesn't have to interpret a lot of JS (37kB is getting unzipped) which will lead to massive performance gains.

- [Next.js using-preact example](https://github.com/vercel/next.js/tree/canary/examples/using-preact)
