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