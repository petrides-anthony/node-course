const request = require('request')

const url = 'https://api.darksky.net/forecast/c8b48957970d54efad7bae2a88dc0ae3/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})