const BookInstance=require('../models/bookInstance');

exports.bookInstanceList = (req, res, next) => {

    BookInstance.find()
    .populate('Book')
    .exec((err,bookInstanceList) => {
        if(err) return next(err);
        res.render('bookInstanceList',{title:'List of Book Instances',bookInstanceList:bookInstanceList});
    })

}

exports.bookInstanceDetail = (req, res, next) => {

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