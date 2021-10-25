const Genre=require('../models/genre');

exports.genreList = (req, res, next) => {
    Genre.find()
    .sort([['name','ascending']])
    .exec((err,genreList) => {
        if (err) return next(err);
        res.render('genreList',{title:'List of Genres',genreList:genreList});
    });

}

exports.genreDetail = (req, res, next) => {

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