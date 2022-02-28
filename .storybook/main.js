const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  /**
   * addons
   */
  addons: [
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