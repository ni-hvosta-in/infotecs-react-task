const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    mode: isDev ? "development" : "production",

    entry: "./src/index.tsx",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/", 
      clean: true
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, "public")
      },
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
      watchFiles: ["src/**/*"]
    },

    devtool: isDev ? "inline-source-map" : false
  };
};
