// NOTE FS.READFILE LOADS THE WHILE FILE INTO MEMORY, WHICH IS PROBABLY BAD
// const fs = require('fs');
// const file = fs.readFile('./no-args-uniq.txt', (err, data) => {
//     if (err) console.log(err);
//     console.log(data)
// });

// ************************************************************************
// ************************************************************************

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('no-args-uniq.txt'),
  output: process.stdout,
});

let currentChar;
let counter = 0;
let output = '';

rl.on('line', (line) => {
  for (char of line) {
    if(char !== currentChar) {
      if (counter > 0) {
        output = `${output}${currentChar} ${counter}
`;
      }
      currentChar = char;
      counter = 1;
    } else {
      counter++;
    }
  }
});

rl.on('close', () => {
  output = `${output}${currentChar} ${counter}
`;
  rl.write(output);
})
