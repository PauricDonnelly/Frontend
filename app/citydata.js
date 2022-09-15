const mysql = require('mysql');
const dbconfig = require('./dbconfig.json');
const util = require('util')
const db = wrapDB(dbconfig)
const axios = require('axios');


function wrapDB(dbconfig) {
   const pool = mysql.createPool(dbconfig)
   return {
      query(sql, args) {
         console.log("in query in wrapper")
         return util.promisify(pool.query)
            .call(pool, sql, args)
      },
      release() {
         return util.promisify(pool.releaseConnection)
            .call(pool)
      }
   }
}
exports.getCitiesInCountry = async (countrycode) => {
   try {
      const cityResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', { "country": countrycode })
      return cityResponse.data.data
   } catch (e) {
      return new Error('Could not get cities')
   }
}


exports.addCity = async (newCity) => {
   let results = await axios.post('http://localhost:8080/api/cities', newCity)
   return results.insertId;
}

exports.getCities = async () => { 
   let cities = []  
     try {  
       const cityResponse = await axios.get('http://localhost:8080/api/cities')
       for (let name of cityResponse.data) {
         cities.push(name)
       }
     } catch (e) {
        return new Error('Could not get cities')
     }
     console.log(cities);
     return cities;

 }

