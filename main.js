const fs = require('fs');

console.log(fs);

console.log("starting");

// Correctly writing to a file using `writeFileSync`
//fs.writeFileSync("harry.txt", "harry is a good boy");
fs.writeFile("harry2.txt", "harry is not a bad boy", ()=>{
    console.log("done");
    
});

console.log("ending");
