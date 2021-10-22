const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({ // 스키마 정의
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    summary: { type: String, trim: true },
    genre: { type: String, trim: true },
    release: { type: String, required: true, trim: true },
    ISBN: { type: Number, required: true, trim: true },
})

const Books = mongoose.model('Books', booksSchema) // 스키마로부터 생성된 모델 객체
module.exports = Books;
