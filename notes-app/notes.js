const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'My notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })
    if(duplicateNotes.length === 0) {
//console.log(notes)
notes.push({
    title: title,
    body: body
})
//console.log(notes)
saveNotes(notes);
console.log(chalk.bold.blue.inverse('New note added - ' +  title));
//console.log('New note added!');
    } else {
        //console.log('Note title taken!');
        console.log(chalk.bold.yellow.inverse('Notes title take - ' + title));
    }
}

const removeNote = function (title) {
   //console.log(title)
   const notes = loadNotes()
   const notesToKeep = notes.filter( function (note) {
       return note.title !== title
   })
   if(notes.length > notesToKeep.length) {
       console.log(chalk.bold.green.inverse('Notes removed!'));
       saveNotes(notesToKeep)
   } else {
        console.log(chalk.bold.red.inverse('No notes found!'));
   }   
}

const saveNotes  = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    } catch(e) {
        //console.log("File not found - " + e)
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}