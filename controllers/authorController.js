const Author=require('../models/author');

exports.authorList = (req, res, next) => {
    Author.find()
    .sort([['familyName','ascending']])
    .exec((err,list) => {
        if(err) return next(err);
        res.render('authorList',{title:'List of Authors',authorList:list});
    })

}

exports.authorDetail = (req, res, next) => {

}

exports.getCreateAuthor = (req, res, next) => {

}

exports.postCreateAuthor = (req, res, next) => {

}

exports.getUpdateAuthor = (req, res, next) => {

}

exports.postUpdateAuthor = (req, res, next) => {

}

exports.getDeleteAuthor = (req, res, next) => {

}

exports.postDeleteAuthor = (req, res, next) => {
    
}