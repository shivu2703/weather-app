const request=require('request')

const forecast=(Latitude,Longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c58c324b7d694f3367fd99985322f556&query='+ Latitude + ',' + Longitude +'&units=f'
    request({url: url, json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to the weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+". It is currently "+ response.body.current.temperature + " degree out. It feels like "+response.body.current.feelslike +" degree out there")
        }

    })
}

module.exports=forecast