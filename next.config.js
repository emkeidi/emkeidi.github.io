// next.config.js

module.exports = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { topLevelAwait: true }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config
  },
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})
