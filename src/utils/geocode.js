const request = require('request')

const geocode = (address,callback) => {
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZHBkcGRwOTgyIiwiYSI6ImNrN3p6aW9zejBhMHkzbm13NHFwMm9zbGQifQ.InuHHhKt3l2bXibx0glM6g&limit=1'
    
    
    request({ url, json: true},(error,{ body }) => {
        if (error){
            callback('Error in network connectivity',undefined)
        } else if(body.features.length ===0) {
            callback('Error in the location providing', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
