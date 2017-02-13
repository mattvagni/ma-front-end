# MutualArt Front End

> A React + React Router v4 + Redux front end with Server Side Rendering, code splitting and HMR.

## Features

- `react` as the view.
- `react-router` v4 as the router.
- `redux` as the state manager.
- `koa` as the server.
- `css-modules` support.
- `jest` for testing (coming soon).
- Server side rendering.
- Hot reloading of all changes to the client side (still working on server side).
- SEO friendly with `react-helmet` to control head/meta/title etc. tags from components.

## Installation

You will first need to [install yarn](https://yarnpkg.com/en/docs/install), a package manager similar to NPM. This allows you to build the dependencies of the app.

Once yarn is installed, you can clone this repo and run:

```sh
yarn install
```

## Running

You can run the app in two ways right now: Development & Production.

### Development

Running the app in development gives you some nice features:

- [Hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html) so you shouldn't have to hit refresh when building — just hit save and go to the browser to see your changes instantly updated, keeping all app state in the process.
- Server side rendering but only for the first load (modules aren't reloaded on the server yet).
- Babel transpiling on the fly (server) so the bundles don't have to be pre-compiled.

To run the app in development, simply run:

```sh
yarn run start:dev
```

### Production

Running in production does a few things differently.

- First of all, it builds a production version of the client bundle, and also makes a server bundle which is then run (so there's no live babel transpiling which can be slow).
- There's no hot reloading so you'll have to kill the server and rebuild if you're making changes.
- Async route loading on the client. Routes are still rendered server side for the first request, but once the app has loaded in the browser, `react-router` takes over all routing and asynchronously loads chunked bundles which means users only load the `.js` for the pages they visit. Try running in production and look at the network tab in the developer tools to see the async loading. Also view the source to see the server rendered markup.

To run the app in production, simply run:

```sh
yarn run start
```

This will kick off a fresh build before it starts the server by running the following automatically:

```sh
yarn run build:all
```
