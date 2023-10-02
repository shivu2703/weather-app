const request = require('request')
const geocode=require('./utils/geocode')


url='http://api.weatherstack.com/current?access_key=c58c324b7d694f3367fd99985322f556&query=26.449923,80.331871&units=f'

request({url:url, json:true},(error,response)=>{
    if(error){
        console.log("Unable to connect to the weather service")
    }else if(response.body.error){
        console.log("Unable to find location")
    }else{
    console.log(response.body.current.weather_descriptions[0]+". It is currently "+ response.body.current.temperature +
     " degree out. It feels like "+response.body.current.feelslike +" degree out there")
    }
})


geocode('Delhi',(error,data)=>{
   console.log('error',error)
   console.log('data',data)
})