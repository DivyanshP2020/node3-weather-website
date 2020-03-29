const request = require('request')

const forecast = (longitude,latitude,callback) => {
    const url = 'https://api.darksky.net/forecast/15b4f56c1b1214e5b8566cc9480a1214/'+latitude+','+longitude

    request({url, json: true}, (error,{body}) => {
        if(error){
            callback('Error connecting to the network', undefined)
        } else if(body.error) {
            callback('there is some error in the location', undefined)
        } else {
            const stat = body.currently
            callback(undefined, body.daily.data[0].summary+ 'It is currently '+ stat.temperature + ' degrees outside. There is a '+ stat.precipProbability*100 + '% chance of rain.')
        }
    })
}
module.exports = forecast