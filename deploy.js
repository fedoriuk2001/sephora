var ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/bestLessons/verbolia-impermo",
  },
  (...args) => {
    console.log("deployed", ...args);
  }
);
