var SearchView = Backbone.View.extend({
    el: '#search_container',

    initialize: function(){
        console.log('Initialize a SearchView');
        this.render({search_label: "搜索: "});
    },

    events: {
        'click input[type=button]': 'doSearch'
    },

    doSearch: function(){
        alert('search for ' + $('#search_input').val());
    },

    render: function(context){
        var template = _.template($('#search_template').html());
        $(this.el).html(template(context));
    }
});

var searchView = new SearchView();
