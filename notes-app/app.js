const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customise yargs version 
yargs.version('1.1.0');

//Create add command 
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, //makes the arguments mandatory
            type: "string" // ensures that title is always a string
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title)
    }
})


// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler : function () {
        console.log("Removing the note!")
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "Show me a list",
    handler : function () {
        console.log("Listing out all notes")
    }
})

// Create read command

yargs.command ({
    command: "read", 
    describe: "Read the notes",
    handler : function () {
        console.log("Reading notes!!")
    }
})


// add, remove, read, list

yargs.parse()
// console.log(yargs.argv);