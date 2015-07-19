var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/test');

var personSchema = new Schema({
	id: Number,
	firstName: String,
	lastName: String,
	age: Number,
	sex: String
});

personSchema.statics.getById = function (id, cb) {
	return this.find({id: id}, cb);
};

personSchema.statics.get = function(cb){
	return this.find(cb);
};

var Person = mongoose.model('Person', personSchema);

var person = new Person({
	id: 1,
	firstName: 'Byron',
	lastName: 'Sun',
	age: '26',
	sex: 'M'
});

person.save();

Person.getById(1, function(err, person){
	//console.log(person);
});

Person.get(function(err, p){
	console.log(p);
});
