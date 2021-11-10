const dirTree = require("directory-tree");

function getDataForFile(file) {
  return {
    pages: dirTree('./src/pages'),
    products: products,
  };
}

const products = []


module.exports = getDataForFile;