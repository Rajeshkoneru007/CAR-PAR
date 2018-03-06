var express = require('express');
var router = express.Router();
var app = express();

var states = require('../models/states');
var vendorsList = require('../models/vendorsList');

router.get('/states',function (req,res) {
    states.getStates(function (err,region) {
        if(err){
            throw err;
        }
        res.json(region);
    })
});

router.get('/vendorsList',function (req,res) {
    vendorsList.getVendorList(function (err,vendor) {
        if(err){
            throw err;
        }
        res.json(vendor);
    })
});

router.get('/vendorsList/:state',function (req,res) {
    console.log("RKG",req.params.state);
    vendorsList.VendorBySearch(req.params.state,function (err,vendor) {
        if(err){
            throw err;
        }
        res.json(vendor);
    })
});

module.exports = router;