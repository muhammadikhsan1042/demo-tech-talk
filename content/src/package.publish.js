const fs = require("fs");
const json = require("../package.json");

const packages = {
  name: json.name,
  version: json.version,
  dependencies: json.dependencies,
  repository: json.repository,
  publishConfig: json.publishConfig,
};

fs.rm("./dist/types", { recursive: true }, () => {
  // eslint-disable-next-line no-console
  console.log("Remove ./dist/types");
  fs.mkdir("./dist/types", { recursive: true }, () => {
    // eslint-disable-next-line no-console
    console.log("Created ./dist/types");
    fs.writeFileSync("./dist/types/package.json", JSON.stringify(packages, null, 2), (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      } else {
        // eslint-disable-next-line no-console
        console.log("Created package.json");
      }
    });
  });
});
