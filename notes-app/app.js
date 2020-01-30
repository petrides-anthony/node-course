const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', 
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: "Removes a note",
    handler: function () {
        console.log('Removing the note!')
    }
})

// List command
yargs.command({
    command: 'list',
    describe: "Lists your notes",
    handler: function () {
        console.log('Listing out all notes!')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: "Read a note",
    handler: function () {
        console.log('Reading a note')
    }
})

// needs to be run for yargs to process all of the commands.
// comment it out and shit won't work.
yargs.parse()