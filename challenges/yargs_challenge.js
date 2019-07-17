const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customise yargs version 
yargs.version('1.1.0');

// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function 
// 4. Test your work 


//Create add command 
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, //makes the arguments mandatory
            type: "string" // ensures that title is always a string
        },
        body: {
            describe: "Note body", 
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})


yargs.parse();
