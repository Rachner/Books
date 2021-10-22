const mongoose = require('mongoose')
const book = require('./Books')


const UsersSchema = mongoose.Schema({ // 스키마 정의
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    books: { type: [book], required: true}
})

const Users = mongoose.model('Users', booksSchema) // 스키마로부터 생성된 모델 객체
module.exports = Users;
