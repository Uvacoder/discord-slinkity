<a href="https://moonface.digital/ethical-design?ref=github"><img src="https://user-images.githubusercontent.com/45979758/125195603-42254f80-e24e-11eb-80fe-96580c010477.png" target="_blank" alt="ethical design" width="" height="25px"></a>
<img src="https://user-images.githubusercontent.com/45979758/126357602-251fc5b8-ef3f-42a3-9170-53fc5535bd41.png" target="_blank" alt="ethical design" width="" height="25px">


# atmos

## Contents
1. [Quickstart 🔥](#quickstart-)
2. [Features](#features)
6. [Overview](#overview)
    - [Structure](#structure)
    - [Styling](#styling)
    - [Sitemap](#sitemap)
    - [Service Worker](#service-worker)
1. [About](#about)
6. [Removing Tailwind](#removing-tailwind)
6. [Bug reports](#bug-reportshelp-)

## Quickstart 🔥

### 1.  Clone this repository

```
git clone https://github.com/moonfacedesign/atmos project-name
```


### 2.  Navigate to your project

```
cd project-name
```

Check over `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3.  Install required dependencies

```
npm install
```

### 4.  Update site metadata

Edit values in `_data/site.json`

### 5.  Start local development server

```
npm run start
```

This will run on `localhost:8080`

You can also run `npm run build` to build your project

### 6.  Deploy

Set these as your build settings:

```
build command          npm run build
publish directory      .www
```

Add these environments:

```
ENVIRONMENT   production
NODE_ENV      production
```

## Features

- Built with [`Eleventy`](https://11ty.dev)
- 100's across the board with lighthouse
- SPA functionality with [`tabs`](https://github.com/moonfacedesign/tabs)
- Progressive Web App
- Service Worker for offline use
- Styling with [`TailwindCSS`](https://tailwindcss.com)
- Tailwind JIT for fast styles generation
- CSS minification, inlined for fastest page render
- Maintenance-free post author archives
- Default pages including blog with tag support
- Netlify contact form
- Optional pipeline for minified inline JS
- Pre-builds and minifies your HTML
- Uses Markdown files for content
- Uses Nunjucks templates for layouts
- Complies with our [`Ethical Design Guidelines`](https://github.com/moonfacedesign/ethical-design-guidelines)
- 100% Javascript framework free

## Overview

### Structure

- `.components` - Partials & macros [Eleventy's components](https://www.11ty.dev/docs/config/#directory-for-includes) (default name is `_includes`)
- `.layouts` - Pages & Sub-pages [layouts](https://www.11ty.dev/docs/layouts/#layouts)
- `.www` - Built site. This is your `publish directory` when deploying (default name is `_site`)
- `_data` - For all [Global data files](https://www.11ty.dev/docs/data-global/)
- `pages` - All of your site's pages in markdown
- `posts` - An example collection used in the blog
- `scripts` - All scripts used by your site
- `styles` - All styles used by your site. This is also where the Tailwind config is
- `static` - All static content: images, fonts, video, audio etc
    - `images` - All images used by your site
    - `type` - All fonts used by your site
- `404.md` - Custom 404 page for production
- `author.njk` - Author page pagination
- `authors.njk` - Author directory page
- `sitemap.njk` - Automatic sitemap for production
- `tags.njk` - Tags page pagination

### Styling

TailwindCSS powers atmos' styling by default. You can learn how to remove it [here](#removing-tailwind).

- `styles` - All styles used by your site. This is also where the Tailwind config is
  - `tailwind.config.js` - Tailwind config file
  - `tw.css` - Tailwind styles
  - `_output.css` - Processed Tailwind output styles

### Sitemap

atmos automatically generates a sitemap from your content. This is found in `sitemap.njk` and is processed into a `xml` file during build.

### Service worker

atmos is a Progressive Web App which means that is is optimized for mobile use. The service worker in atmos allows for your project to be cached by the humans browser so they can view your site offline; this allows for a better mobile experience.

## About

We use atmos for our Eleventy projects because it houses everything we need to create a performant site. atmos does not claim to be the smallest nor to being the easiest boilerplate to get started with, we created atmos to work alongside the Moonface workflow and if it fits your project then that's just amazing!

## Removing Tailwind

By default atmos uses [TailwindCSS](https://tailwindcss.com) to generate styles. We understand that Tailwind is not for everyone and that in some projects it may be easier to return to css or sass. Here's how you would go about that:
1. Remove Tailwind from your npm scripts
2. Uninstall `tailwindcss`, `postcss` and `autoprefixer`
3. Remove this from `.eleventy.js`
  ```
    if (!process.env.ELEVENTY_ENV) {
    eleventyConfig.addPassthroughCopy({ './styles/_output.css': '/styles/tw.css' });
  }
  ```
4. Remove this from `.components/head.njk`
  ```
    {% if env.environment == "production" %}
  {% set css %}
    {% include "styles/_output.css" %}
  {% endset %}
  <style>{{ css | cssmin | safe }}</style>
  {% else %}
    <link rel="stylesheet" href="/styles/tw.css">
  {% endif %}
  ```
  And replace with:
  
  ```
    {% set css %}
    {% include "styles/your-styles.css" %}
    {% endset %}
  ```
  
5. Delete the `tailwind.config.js` and you should be all set!


## Bug reports/help 👋

If you need any help or want to file a bug report, contact the [Lead developer](mailto:kyle@moonface.digital).

<a href="https://moonface.digital?ref=github">
<img src="https://user-images.githubusercontent.com/45979758/123560051-ef509000-d797-11eb-88dd-842b365a1f5f.png" target="_blank" alt="moonface" width="" height="25px">
</a>
