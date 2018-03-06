var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendorsListSchema = new Schema({
    name:"string"
});

var vendorList = mongoose.model('vendorsList',vendorsListSchema,'vendorsList');

vendorsListSchema.getVendorList = function (callBack,limit) {
    vendorList.find(callBack).limit(limit);
};

vendorsListSchema.VendorBySearch = function (vendor) {
    //console.log(vendor);
    //vendorList.find().where(vendor).exec();
    /*TODO:Search Query for form and get list*/
};


module.exports = vendorsListSchema;