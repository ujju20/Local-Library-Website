const Book=require('../models/book');
const Author=require('../models/author');
const Genre=require('../models/genre');
const BookInstance=require('../models/bookInstance');

exports.index = async (req, res,next)  => {
    const bookCount=Book.countDocuments();
    const genreCount=Genre.countDocuments();
    const bookInstanceCount=BookInstance.countDocuments();
    const bookInstancesAvailableCount=BookInstance.countDocuments({status:'Available'});
    const authorCount=Author.countDocuments();


    const data= await Promise.all([bookCount, genreCount, authorCount, bookInstancesAvailableCount,bookInstanceCount]);
    console.log(data);
    res.render('index',{title:'Local Library Home',data:{
        booksCount:data[0],
        genresCount:data[1],
        authorsCount:data[2],
        bookInstancesAvailableCount:data[3],
        bookInstancesCount:data[4]
    }});

};

exports.bookList = (req, res, next) => {

    Book.find({},'title author')
    .sort({title:1})
    .populate('author')
    .exec((err , bookList) => {
        if(err) {
            return next(err);

        }
        res.render('bookList',{title:'List of Books',bookList:bookList});
    })

}

exports.bookDetail = (req, res, next) => {

}

exports.getCreateBook = (req, res, next) => {

}

exports.postCreateBook = (req, res, next) => {

}

exports.getUpdateBook = (req, res, next) => {

}

exports.postUpdateBook = (req, res, next) => {

}

exports.getDeleteBook = (req, res, next) => {

}

exports.postDeleteBook = (req, res, next) => {
    
}