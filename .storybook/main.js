const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx"
  ],
  /**
   * addons
   */
  addons: [
    "@storybook/addon-docs",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
};