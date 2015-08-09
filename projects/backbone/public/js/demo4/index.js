var AppRouter = Backbone.Router.extend({
    routes: {
        'posts/:id' : 'getPost',
        'download/*path': 'downloadFile',
        ':route/:action': 'loadView',
        '*actions': 'defaultRoute'
    },

    getPost: function(id){
        console.log(id);
    },

    downloadFile: function(path){
        console.log(path);
    },

    loadView: function(route, action){
        console.log(route + '_' + action);
    },

    defaultRoute: function(actions){
        console.log('default: ' + actions);
    }
});

var app_router = new AppRouter();
Backbone.history.start();

app_router.navigate('/posts/404', {trigger: true, replace: false});
