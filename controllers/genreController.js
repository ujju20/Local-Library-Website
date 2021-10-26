const Genre=require('../models/genre');
const Book=require('../models/book');

exports.genreList = (req, res, next) => {
    Genre.find()
    .sort([['name','ascending']])
    .exec((err,genreList) => {
        if (err) return next(err);
        res.render('ListPages/genreList',{title:'List of Genres',genreList:genreList});
    });

}

exports.genreDetail = async (req, res, next) => {

    const id=req.params.id;
    const genre=Genre.findById(id)
    .exec((err,detail) => {
        if (err) return next(err);
        return detail;
    });

    const genreBooks=Book.find({'genre':id})
    .exec((err,genreBooks) => {
        if (err) return next(err);
        return genreBooks;
    });

    const genreDetail=await Promise.all([genre,genreDetail]);
    if(genreDetail.detail === null)
    {
        const error=new Error('Genre not found');
        error.status=404;
        return next(err);
    }
    res.render('DetailPages/genreDetail',{title:'Genre Detail',genre:genreDetail.detail,genreBooks:genreDetail.genreBooks});

}

exports.getCreateGenre = (req, res, next) => {

}

exports.postCreateGenre = (req, res, next) => {

}

exports.getUpdateGenre = (req, res, next) => {

}

exports.postUpdateGenre = (req, res, next) => {

}

exports.getDeleteGenre = (req, res, next) => {

}

exports.postDeleteGenre = (req, res, next) => {
    
}