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
        res.render('ListPages/bookList',{title:'List of Books',bookList:bookList});
    })

}

exports.bookDetail =async (req, res, next) => {
    const id=req.params.id;
    const book=Book.findById(id).populate('auhtor').populate('genre')
    .exec((err,book) => {
        if (err) return next(err);
        return book;
    });

    const bookInstance=BookInstance.find({'book':id})
    .exec((err,bookInstances) => {
        if (err) return next(err);
        return bookInstances;
    });

    const result = await Promise.all([book,bookInstance]);
    if(result.book==null)
    {
        const error=new Error('Genre not found');
        error.status=404;
        return next(err);
    }
    res.render('DetailPages/bookDetail',{title:'Book Detail',book:result.book,bookInstances:result.bookInstances});

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