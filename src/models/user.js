const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types : { ObjectId }} = Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now,
    },
    isOverdue: {
        type: Boolean,
        default :false
    }
})

const Bookuser = mongoose.model('Bookuser', userSchema) 
module.exports = Bookuser


// user 데이터 생성 테스트

const bookuser = new Bookuser({
    name: '승현',
    phone: '010-1234-1234',
    userId: 'midbar',
    password: '123456789',
    isAdmin: true,
})

bookuser.save()
.then(() => console.log('이용자가 추가되었습니다.'))
.catch(e => console.log(`이용자 등록에 실패하였습니다:${e}`))