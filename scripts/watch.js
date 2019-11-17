const chokidar = require("chokidar");
const path = require("path");
const childProcess = require("child_process");

console.log("Watching Rust (.rs) files for change to trigger rebuilds.");

const PATH = path.join(__dirname, "..", "packages", "webassembly", "src", "*.rs");
const EXEC_DIRECTORY = path.join(__dirname, "..", "packages", "webassembly");

console.log(PATH);

chokidar
  .watch(PATH)
  .on("change", (event, path) => {
    console.log(`Triggering a WASM pack build at: ${new Date().getUTCDate()}`);
    childProcess.execSync(`cd ${EXEC_DIRECTORY} && wasm-pack build`);
  });
