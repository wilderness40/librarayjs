const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: ObjectId,
        trim: true,
        ref: 'Bookuser', // user.js 의 mongoose.model('Bookuser', userSchema) 에서 첫번째 인자값
    },
    category: {
        type: String,
        trim: true,
    },
    standardNum: {
        type: Number,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    isRented: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    rentedAt: {
        type: Date,
        default: Date.now,
    },
    lastModifiedAt:{
        type: Date,
        default: Date.now,
    },
    finishedAt: {
        type: Date,
        default: Date.now,
    }
})

const Booklist= mongoose.model('Booklist', booksSchema)
module.exports = Booklist

// booklist 생성테스트

const booklist = new Booklist({
    title: 'nodejs 한권으로 끝내기',
    user: '111111111111111111111111',
    category: 'computer',
    standardNum: '55456285',
})

booklist.save()
.then(() => console.log('도서가 추가되었습니다'))
.catch(e => console.log(`도서 추가에 실패하였습니다: ${e}`))