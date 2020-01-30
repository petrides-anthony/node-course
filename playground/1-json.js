const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)

user.name = 'Tony'
user.age = 28

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)