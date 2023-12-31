const request=require('request')

const geocode=(address,callback)=>{
    url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2hpdnUyNzAzIiwiYSI6ImNsbjR0Y3MycDA1MjEyanA5Nzh0cmRlZWIifQ.mTz8XDYGPOQNRHw2rzdvnQ&limit=1'
    
    request({url, json: true},(error,{body})=>{
       if(error){
        callback('Unable to connect to geocoding api service',undefined)
       }else if(body.features.length === 0){
        callback('Unable to get the location. Try another search ',undefined)
       }else{
         callback(undefined,{
            Longitude: body.features[0].center[0],
            Latitude:  body.features[0].center[1],
            Location:  body.features[0].place_name
         })
       }

    })


}


module.exports=geocode