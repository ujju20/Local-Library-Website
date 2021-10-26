const BookInstance=require('../models/bookInstance');

exports.bookInstanceList = (req, res, next) => {

    BookInstance.find()
    .populate('Book')
    .exec((err,bookInstanceList) => {
        if(err) return next(err);
        res.render('ListPages/bookInstanceList',{title:'List of Book Instances',bookInstanceList:bookInstanceList});
    })

}

exports.bookInstanceDetail = (req, res, next) => {
    const id=req.params.id;

    const bookInstance = BookInstance.findById(id)
    .populate('book')
    .exec((err,bookInstance) => {
        if(err) return next(err);
        if(bookInstance===null)
        {
            const error=new Error('Book Instance not found');
        error.status=404;
        return next(err);
        }
        return bookInstance;
    });

    res.render('DetailPages/bookInstanceDetail',{title:'Copy: '+bookInstance.book.title, bookInstance:  bookInstance});

}

exports.getCreateBookInstance = (req, res, next) => {

}

exports.postCreateBookInstance = (req, res, next) => {

}

exports.getUpdateBookInstance = (req, res, next) => {

}

exports.postUpdateBookInstance = (req, res, next) => {

}

exports.getDeleteBookInstance = (req, res, next) => {

}

exports.postDeleteBookInstance= (req, res, next) => {
    
}