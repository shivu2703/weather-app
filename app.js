const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

geocode('Delhi',(error,data)=>{
   console.log('error',error)
   console.log('data',data)
})


forecast(26.449923,80.331871, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})