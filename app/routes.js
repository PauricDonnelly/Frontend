const express = require('express')
const router = express.Router()
const citydata = require('./citydata.js')
// Add your routes here - above the module.exports line

router.get('/list-Employees', async (req, res) => { 
    res.render('list-cities', { cities: await citydata.getCities() } ) 
    console.log("hello");
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

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var querySelect = req.session.data['querySelect']

    // Check whether the variable matches a condition
    if (querySelect == "Query 1") {
        // Send user to next page
        res.redirect('juggling-balls') // link to query 1 result
    } if (querySelect == "Query 2") {
        // Send user to next page
        res.redirect('juggling-balls') // link to query 1 result
    }
    if (querySelect == "Query 3") {
        // Send user to next page
        res.redirect('juggling-balls') // link to query 1 result
    }
    if (querySelect == "Query 4") {
        // Send user to next page
        res.redirect('juggling-balls') // link to query 1 result
    }
    if (querySelect == "Query 5") {
        // Send user to next page
        res.redirect('juggling-balls') // link to query 1 result
    }   

});



module.exports = router
