const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', 
    describe: "Add a new note",
    handler: function () {
        console.log('Adding a new note!')
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

console.log(yargs.argv)