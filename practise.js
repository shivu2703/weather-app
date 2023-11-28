const request = require('request')

// weather stack api implementation
// const url = 'http://api.weatherstack.com/current?access_key=c58c324b7d694f3367fd99985322f556&query=26.449923,80.331871&units=f'

// request({url:url, json:true},(error,response)=>{
//     console.log(response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" degrees out. It feels like "+response.body.current.feelslike+" Degrees out." )
// }) 

//geocoding api implementation

const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kanpur.json?access_token=pk.eyJ1Ijoic2hpdnUyNzAzIiwiYSI6ImNsbjR0Y3MycDA1MjEyanA5Nzh0cmRlZWIifQ.mTz8XDYGPOQNRHw2rzdvnQ&limit=1'

request({url:geocodeurl,json:true},(error,response)=>{
    console.log("Longitude: "+ response.body.features[0].center[0]+" latitude :"+response.body.features[0].center[1] )
})