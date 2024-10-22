const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'public');

//create file
// fs.writeFileSync(`${filepath}/text.txt`, 'hello everyone');


// read file
// fs.readFile(`${filepath}/text.txt`, 'utf-8', (error, content)=>{
//     if(error) return console.log(error);

//     console.log(content);
// })

// append/update file
// fs.appendFile(`${filepath}/text.txt`, 'hello world', (error, success)=>{
//     if(error) return console.log(error);

//     console.log('file updated');
// })

// delete file
fs.unlinkSync(`${filepath}/text.txt`);