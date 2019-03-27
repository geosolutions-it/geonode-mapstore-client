var fs = require('fs');
var msP = JSON.parse(fs.readFileSync("./MapStore2/package.json", "utf8"));
var projP = JSON.parse(fs.readFileSync("./package.json", "utf8"));
var devDependencies = {...(projP.devDependencies || {}), ...msP.devDependencies};
var dependencies = {...(projP.dependencies || {}), ...msP.dependencies};
fs.writeFileSync("./package.json", JSON.stringify({...projP, devDependencies, dependencies}, null, 2), "utf8");
