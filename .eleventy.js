require('dotenv').config();
const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");
const blogTools = require("eleventy-plugin-blog-tools");
const { cache } = require('eleventy-plugin-workbox');
const pluginBetterSlug = require("@borisschapira/eleventy-plugin-better-slug");
const yaml = require("js-yaml");
const img2picture = require("eleventy-plugin-img2picture");
const path = require("path");

const img2pictureOptions = {
  /*
   * 🚨 Required parameters
   */
  eleventyInputDir: ".", // Should be same as Eleventy input folder set using `dir.input`.
  imagesOutputDir: ".www/static", // Output folder for optimized images.
  // URL prefix for images src URLS.
  // It should match with path suffix in `imagesOutputDir`.
  // Eg: imagesOutputDir with `_site/images` likely need urlPath as `/images/`
  urlPath: "/static/",

  /*
   * 🔧 Optional parameters
   */
  extensions: ["jpg", "png", "jpeg"], // File extensions to optmize
  // Formats to be generated.
  // ⚠️ The <source> tags are ordered based on the order of formats
  // in this array. Keep most compatible format at the end.
  // The path of the last format will be populated in
  // the 'src' attribute of fallback <img> tag.
  formats: ["avif", "webp", "jpeg"],
  sizes: "100vw", // Default image `sizes` attribute

  minWidth: 150, // Minimum width to resize an image to
  maxWidth: 1500, // Maximum width to resize an image to
  widthStep: 150, // Width difference between each resized image

  fetchRemote: true, // When true, remote images are fetched, cached and optimized.
  dryRun: false, // When true, the optimized images are not generated. Only HTMLs are processed.

  // Function used by eleventy-img to generate image filenames
  filenameFormat: function (id, src, width, format) {
    const extension = path.extname(src);
    const name = path.basename(src, extension);

    return `${name}-${id}-${width}w.${format}`;
  },

  // Cache options to pass to `eleventy-cache-assets`
  cacheOptions: {},

  // Extra options to pass to the Sharp constructor
  sharpOptions: {},
  sharpWebpOptions: {},
  sharpPngOptions: {},
  sharpJpegOptions: {},
  sharpAvifOptions: {},
};

module.exports = function (eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    injectChanges: false
  });

  eleventyConfig.addWatchTarget("styles/");

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", ".layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);


  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Blog tools
  eleventyConfig.addPlugin(blogTools);

  // Cache site
  eleventyConfig.addPlugin(cache, {
    generateSWOptions: {
      cleanupOutdatedCaches: true,
    },
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      if (process.env.ENVIRONMENT === "production") {
        const minified = await minify(code);
        callback(null, minified.code);
      } else {
        callback(null, code);
      }
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Image processing
  eleventyConfig.addPlugin(img2picture, img2pictureOptions);

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("static/");
  eleventyConfig.addPassthroughCopy("admin/");
  eleventyConfig.addPassthroughCopy("scripts/");

  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addPassthroughCopy({ './styles/_output.css': '/styles/tw.css' });
  }
  if (process.env.NODE === 'production') {
    eleventyConfig.addPlugin(img2picture,);
  } else {
    // During development, you need to copy the files to `_site`
    eleventyConfig.addPassthroughCopy("./images");
  }

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: false,
    html: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  const md = markdownIt(options)
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString)
  );

  // Fix slugs
  eleventyConfig.addPlugin(pluginBetterSlug);
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Images


  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: ".components",
      layouts: ".layouts",
      data: "_data",
      output: ".www"
    }
  };
};