var World = Backbone.Model.extend({
    // 创建World对象，拥有属性name
    name: ''
});

var Worlds = Backbone.Collection.extend({
    // World对象集合
    initialize: function (medels, options) {
        this.bind('add', options.view.addWorld);
    }
});

var AppView = Backbone.View.extend({
    el: $('body'),

    initialize: function(){
        // 构造函数，实例化一个World集合类传入AppView的对象
        this.worlds = new Worlds(null, {view: this});
    },

    events: {
        'click #check': 'checkIn'
    },

    checkIn: function(){
        var world_name = prompt('Wher do you come from?');
        if(!world_name){
            world_name = 'Unknown';
        }
        var world = new World({name: world_name});
        this.worlds.add(world);
    },

    addWorld: function(model){
        var template = _.template('<li>This is a message comes from <i><%= name %></i>.</li>');
        $('#world-list').append(template({
            name: model.get('name')
        }));
    }
});

// 实例化AppView
var appView = new AppView();
