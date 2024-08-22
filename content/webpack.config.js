const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  container: {
    ModuleFederationPlugin,
  },
  HotModuleReplacementPlugin,
  SourceMapDevToolPlugin,
  ProvidePlugin,
} = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const json = require("./package.json");

exports.default = (_env, argv) => ({
  entry: path.join(__dirname, "clients", "index"),
  output: {
    filename: argv.mode === "development"
      ? "[name].bundle.js"
      : "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist", "www"),
    sourceMapFilename: "[name].js.map",
  },
  optimization: {
    runtimeChunk: _env.standalone ? "single" : "multiple",
    minimize: argv.mode !== "development",
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".ts", ".tsx", ".jsx"],
    enforceExtension: false,
    fallback: {
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
    },
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: argv.mode === "development"
                  ? "[local]"
                  : "[sha256:hash:base64:32]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      publicPath: "/",
      minify: true,
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, "public", "assets"),
        to: path.join(__dirname, "dist", "www", "assets"),
      }],
    }),
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new ModuleFederationPlugin({
      name: "demo_content",
      filename: "remoteModule.js",
      runtime: false,
      exposes: _env.standalone ? {} : {
        "./v1": "./src/v1",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: json.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: json.dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: json.dependencies["react-router-dom"],
        },
      },
    }),
  ],
  devServer: {
    port: _env.standalone ? 9101 : 9001,
    compress: true,
    historyApiFallback: true,
    static: path.resolve(__dirname, "public"),
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
  devtool: "source-map",
});
