const request = require('request')

// Weather Information
// Lat/Long -> Weather

// const weatherApiToken = 'c8b48957970d54efad7bae2a88dc0ae3'
// const weatherApi = `https://api.darksky.net/forecast/${weatherApiToken}/37.8267,-122.4233?units=si&lang=en`

// request({ url: weatherApi, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         const currently = response.body.currently
//         console.log(`Summary: ${response.body.daily.data[0].summary} \n It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`)    
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodingApiToken = 'pk.eyJ1IjoiYXBldHJpZGVzIiwiYSI6ImNrNmFncmNjaDA0cWYzbW9naWN1Y243ZHEifQ.ZTYdhBxLqIKhSfvC8GbVaw'
// const geocodingApi = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${geocodingApiToken}&limit=1`

// request({ url: geocodingApi, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the Geocoding service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to calculate geocoding on provided')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
//     }
// })

const geocode = (address, callback) => {

}