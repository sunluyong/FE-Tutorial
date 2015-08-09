var Book = Backbone.Model.extend({
    defaults: {
        title: 'default'
    },
    initialize: function(){

    }
});

var BookShelf = Backbone.Collection.extend({
    model: Book
});

var book1 = new Book({title: 'book1'});
var book2 = new Book({title: 'book2'});
var book3 = new Book({title: 'book3'});

var bookShelf = new BookShelf();
bookShelf.add(book1);
bookShelf.add(book2);
bookShelf.add(book3);

bookShelf.remove(book2);

bookShelf.each(function(book){
    console.log(book.get('title'));
});
