import fs from "fs/promises"

let a = await fs.readFile("harry.txt")
let b = await fs.appendFile("harry.txt", "\nthis is amazing promises..")

console.log(a.toString());
