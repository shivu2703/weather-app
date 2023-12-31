const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log("Please provide a address!!")
} else {
    geocode(address, (error, {Latitude,Longitude,Location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(Latitude, Longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(Location)
            console.log(forecastData)
        })
    })
}