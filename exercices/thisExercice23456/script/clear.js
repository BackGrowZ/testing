import fs from "fs";

const deleteFolderRecursive = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file) {
      const curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

// supprime le dossier .git
deleteFolderRecursive("./.git");

// ouvre le fichier package.json et remplace la ligne '"start": "node clear.js && npm i && vite"' par '"start": "vite"'
fs.readFile("./package.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(
    /"start": "node clear.js && npm i && vite"/g,
    '"start": "vite"'
  );

  fs.writeFile("./package.json", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

// supprime le fichier clear.js
fs.unlinkSync("./script/clear.js");
