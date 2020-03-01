const { fileUtf8 } = require("@harrypunk/rxjs-fs");
const path = require("path");

const some = path.resolve(__dirname, "sometext");
fileUtf8(some).subscribe(x => console.log(x));
