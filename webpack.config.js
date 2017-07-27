const path = require("path");

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: {
    app: ["./app/app.js", "./app/components/main.js"]
    // "./app/components/children/search.js"]
  },

  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  // This ection for deveropment environment
  devServer: {
    publicPath: "/",
    contentBase: "./public",
  },
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};