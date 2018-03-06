var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema({
    name:"string"
});

var states = mongoose.model('states',stateSchema,'states');

stateSchema.getStates = function (callBack,limit) {
    states.find(callBack).limit(limit);
};


module.exports = stateSchema;