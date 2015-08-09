var Man = Backbone.Model.extend({
    initialize: function () {
        console.log('Hey, you create me!');
        // 初始化时监听事件绑定
        this.bind('change:name', function(){
            var name = this.get('name');
            console.log('name changed to ' + this.get('name'));
        });
        this.bind('invalid', function(model, error){
            console.log(error);
        });
    },
    defaults: {
        name: 'Byron',
        age: 27
    },
    validate: function(attrs){
        if(!attrs.name){
            return 'Attribute "name" is required!';
        }
    },
    aboutMe: function(){
        return 'I\'m ' + this.get('name') + ', I\'m ' +  this.get('age') + ' years old.';
    }
});

var man = new Man();
// console.log(man.get('name'));
// man.set({age: 28});
// console.log(man.get('age'));
// console.log(man.get('name'));
// console.log(man.aboutMe());

//man.set({name: 'Vincent'});

man.set({name: ''});
man.save();
