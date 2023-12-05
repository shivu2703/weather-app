const request = require('request')

// weather stack api implementation
// const url = 'http://api.weatherstack.com/current?access_key=c58c324b7d694f3367fd99985322f556&query=26.449923,80.331871&units=f'

// request({url:url, json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect to the web service!!")
//     } else if(response.body.error){
//         console.log("unable to get the location!!")
//     }else {
//         console.log(response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" degrees out. It feels like "+response.body.current.feelslike+" Degrees out." )
//     }
    
// }) 
  
//geocoding api implementation
// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kanpur.json?access_token=pk.eyJ1Ijoic2hpdnUyNzAzIiwiYSI6ImNsbjR0Y3MycDA1MjEyanA5Nzh0cmRlZWIifQ.mTz8XDYGPOQNRHw2rzdvnQ&limit=1'

// request({url:geocodeurl,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect to the web service!!")
//     }else if(response.body.features.length === 0){
//         console.log("unable to get the location!!")
//     } else{
//         const Longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log("Longitude: "+Longitude +", Latitude :"+latitude )
//     }
// })


const geocode=(address, callback)=>{
   const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2hpdnUyNzAzIiwiYSI6ImNsbjR0Y3MycDA1MjEyanA5Nzh0cmRlZWIifQ.mTz8XDYGPOQNRHw2rzdvnQ&limit=1'

   request({url:url , json:true },(error,response)=>{
        if(error){
            callback('Unable to connect to the web service!!',undefined)
        } else if(response.body.features.length === 0){
            callback('unable to get the location, try another search!!', undefined)
        }else{
            const Longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            callback(undefined,data={
                Longitude: Longitude,
                latitude: latitude
            })
        }
   })
}

geocode('kanpur',(error,data)=>{
    console.log("ERROR :", error)
    console.log("DATA:", data)
})


