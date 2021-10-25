const express=require('express');
const router=express.Router();

const bookController=require('../controllers/bookController');
const authorController=require('../controllers/authorController');
const genreController=require('../controllers/genreController');
const bookInstanceController=require('../controllers/bookInstanceController');

/// Book Routes /// ----------------

//GET Catalog Home Page
router.get('/',bookController.index);

router.get('/books',bookController.bookList);

router.get('book/:id',bookController.bookDetail);

router.get('/book/create',bookController.getCreateBook);

router.post('/book/create',bookController.postCreateBook);

router.get('/book/:id/update',bookController.getUpdateBook);

router.post('/book/:id/update',bookController.postUpdateBook);

router.get('/book/:id/delete',bookController.getDeleteBook);

router.post('/book/:id/delete',bookController.postDeleteBook);

/// Author Routes /// 

router.get('/authors',authorController.authorList);

router.get('/author/:id',authorController.authorDetail);

router.get('/author/create',authorController.getCreateAuthor);

router.post('/author/create',authorController.postCreateAuthor);

router.get('/author/:id/update',authorController.getUpdateAuthor);

router.post('/author/:id/update',authorController.postUpdateAuthor);

router.get('/author/:id/delete',authorController.getDeleteAuthor);

router.post('/author/:id/delete',authorController.postDeleteAuthor);

/// Genre Routes  /// 

router.get('/genres',genreController.genreList);

router.get('/genre/:id',genreController.genreDetail);

router.get('/genre/create',genreController.getCreateGenre);

router.post('/genre/create',genreController.postCreateGenre);

router.get('/genre/:id/update',genreController.getUpdateGenre);

router.post('/genre/:id/update',genreController.postUpdateGenre);

router.get('/genre/:id/delete',genreController.getDeleteGenre);

router.post('/genre/:id/delete',genreController.postDeleteGenre);

/// Book Instace Routes /// 

router.get('/bookInstances',bookInstanceController.bookInstanceList);

router.get('/bookInstance/:id',bookInstanceController.bookInstanceDetail);

router.get('/bookInstance/create',bookInstanceController.getCreateBookInstance);

router.post('/bookInstance/create',bookInstanceController.postCreateBookInstance);

router.get('/bookInstance/:id/update',bookInstanceController.getUpdateBookInstance);

router.post('/bookInstance/:id/update',bookInstanceController.postUpdateBookInstance);

router.get('/bookInstance/:id/delete',bookInstanceController.getDeleteBookInstance);

router.post('/bookInstance/:id/delete',bookInstanceController.postDeleteBookInstance);

module.exports=router;



