const Author=require('../models/author');

exports.authorList = (req, res, next) => {
    Author.find()
    .sort([['familyName','ascending']])
    .exec((err,list) => {
        if(err) return next(err);
        res.render('ListPages/authorList',{title:'List of Authors',authorList:list});
    })

}

exports.authorDetail = async (req, res, next) => {
    const id=req.params.id;
    const author=Author.findById(id)
    .exec((err,author) => {
        if(err) return next(err);
        return author;
    });
    const books=Book.find({'author':id})
    .exec((err,books) => {
        if(err) return next(err);
        return books;
    });

    const result=await Promise.all([author,books]);
    if(result.author=== null)
    {
        const error=new Error('Author not found');
        error.status=404;
        return next(err);
    }
    res,render('DetailPages/authorDetail',{title:'Author Detail',author:result.author,books:result.books});

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