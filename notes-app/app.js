const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');

//console.log(chalk.blue.inverse('Hello'));
//console.log(notes.getNotes());
//notes.addNote('Bhuppal', 'Male');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log(argv.title, argv.body);
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function() {
        notes.removeNote(argv.title)
    }
})

yargs.parse()