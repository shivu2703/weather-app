const request= require('request')

const url='http://api.weatherstack.com/current?access_key=c58c324b7d694f3367fd99985322f556&query=26.449923,80.331871'

request({ url : url }, (error, response)=>{
    const data=JSON.parse(response.body)
    console.log(data.location)
})