const express = require('express')
const BooksRouter = express.Router()
const Books = require('../models/Books')

BooksRouter.route('/').get( async (req, res) => {
    const books = await Books.find()
    console.log(books)
    res.json({ status: 200, books})
})

BooksRouter.route('/:id').get( (req, res) => {
    Books.findById(req.params.id, (err, books) => {
        if(err) throw err;
        res.json({ status: 200, books})
    })
})

BooksRouter.route('/').post( (req, res) => {
    console.log(`ISBN: ${req.body.ISBN}`)
    Books.findOne({ ISBN: req.body.ISBN}, async (err, books) => { // 중복체크
        if(err) throw err;
        if(!books){ // 데이터베이스에서 해당 할일을 조회하지 못한 경우
            const newBooks = new Books(req.body);
            await newBooks.save().then( () => {
                res.json({ status: 201, msg: 'new books created in db !', books})
            })
        
        }else{ // 생성하려는 할일과 같은 이름이고 아직 끝내지 않은 할일이 이미 데이터베이스에 존재하는 경우
            const msg = 'this books already exists in db !'
            console.log(msg)
            res.json({ status: 204, msg})
        }
    })
})


BooksRouter.route('/:id').put( (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, books) => {
        if(err) throw err;
        res.json({ status: 204, msg: `books ${req.params.id} updated in db !`, books})
    })
})


BooksRouter.route('/:id').delete( (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, books) => {
        if(err) throw err;
        res.json({ status: 204, msg: `books ${req.params.id} removed in db !`})
    })
})


module.exports = BooksRouter;