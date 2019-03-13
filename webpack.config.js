const path = require("path");

module.exports = {
  watch: true,
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: ["./src/index.scss"],
  output: {
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/index.css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
