const express=require('express');
const router=express.Router();

const BookController=require('../controllers/bookController');
const AuthorController=require('../controllers/authorController');
const GenreController=require('../controllers/genreController');
const BookInstanceController=require('../controllers/bookInstanceController');

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



