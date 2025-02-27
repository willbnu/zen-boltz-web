module.exports = {
      stories: [
        "../components/**/*.stories.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)",
      ],
      addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
          name: '@storybook/addon-postcss',
          options: {
            postcssLoaderOptions: {
              implementation: require('postcss'),
            },
          },
        },
      ],
      framework: {
        name: "@storybook/react-webpack5",
        options: {},
      },
      docs: {
        autodocs: "tag",
      },
    };
