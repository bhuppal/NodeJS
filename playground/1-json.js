const fs = require('fs');

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

fs.writeFileSync('1-json.json', bookJSON);

const content = fs.readFileSync('1-json.json');
const resultJSON = content.toString();
const data = JSON.parse(resultJSON);
console.log(data.title);
//console.log(content.toString());
*/

const data = fs.readFileSync('1-json.json');
const jsonResult = data.toString();

const jsonData = JSON.parse(jsonResult);

jsonData.name = "Bhuppal";
jsonData.age = 50;

fs.writeFileSync('1-json.json', JSON.stringify(jsonData));

console.log(bookJSON);
debugger;
const parseData = JSON.parse(bookJSON);

console.log(parseData.author);
