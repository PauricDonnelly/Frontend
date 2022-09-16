const express = require('express')
const router = express.Router()
const citydata = require('./citydata.js')
// Add your routes here - above the module.exports line

router.get('/list-Employees', async (req, res) => { 
    res.render('list-cities', { cities: await citydata.getCities() } ) 
});

router.get('/list-Employees-containing/:substr', function (req, res) {
    res.render('list-cities', {
        namefilter: req.params.substr.toLowerCase(),
        cities: citydata.getCities()
    });

});

router.get('/addEmployee', async (req, res) => {
    res.render('newcityform', {
        cities: await citydata.getCities()
    });

});
router.post('/addEmployee', async (req, res) => {
        citydata.addCity(req.body) 
        res.render('list-cities', { cities: await citydata.getCities()} )   
});
module.exports = router
