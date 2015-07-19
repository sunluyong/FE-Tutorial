var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/test');

var catSchema = new Schema({
	name: String,
	age: Number
});

catSchema.statics.add = function (cat, cb) {
	var _cat = new Cat(cat);
	_cat.save(cb);
};

catSchema.statics.delete = function (name, cb) {
	this.remove({name: name}, cb);
};

catSchema.statics.get = function (opt, cb) {
	this.find(opt, 'name age', cb);
};

catSchema.statics.getOne = function (opt, cb) {
	this.findOne(opt, 'name age', cb);
};

catSchema.statics.update = function (opt, obj, cb) {
	this.findOneAndUpdate(opt, obj, cb);
};

catSchema.statics.updateAll = function (opt, obj, cb) {
	this.update(opt, obj, cb);
};

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
