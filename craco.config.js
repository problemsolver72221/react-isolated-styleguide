const path = require("path");

module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, "src/components/"),
      'lib': path.resolve(__dirname, "src/lib/"),
      'resources': path.resolve(__dirname, "src/resources/"),
      'styles': path.resolve(__dirname, "src/styles/"),
    }
  }
}