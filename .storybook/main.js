/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-02 16:04:26
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-08 16:04:13
 */
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}