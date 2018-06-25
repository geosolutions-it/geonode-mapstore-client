var fs = require('fs');
var msP = JSON.parse(fs.readFileSync("./MapStore2/package.json", "utf8"));
var projP = JSON.parse(fs.readFileSync("./package.json", "utf8"));
var devDependencies = {...msP.devDependencies,  ...(projP.devDependencies || {})};
var dependencies = {...msP.dependencies,  ...(projP.dependencies || {})};
fs.writeFileSync("./package.json", JSON.stringify({...projP, devDependencies, dependencies}), "utf8");
