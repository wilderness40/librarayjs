const express = require('express') // 모듈 임포트
const app = express()
const port = 3000 // 포트 구성
let books = {}

/* 공통 미들웨어  - 시작*/
// 로그기록

app.use((req, res, next) => {
    req.requestTime = new Date()
    console.log(`로그기록 : ${req.requestTime}`)
    next()
})

// URL 파라미터로 전달된 현재 사용자를 req.user 객체에 저장
app.use('/users/:uname/books', (req, res, next) => {
    req.user = req.params.uname
    // console.log(req.params.uname)
    // res.send(`고객명 : ${req.params.uname}`) // 이 구문은 두번은 못쓰는건가?
    next()
})
/* 공통 미들웨어  - 끝*/

/* API 설계 */
// 현재 사용자의 도서목록에 특정 도서 추가 (쿼리스트링 값 조회)

app.post('/users/:uname/books?', (req, res, next) => {
    let newUser = req.user
    let newBook = req.query.book
    // console.log(`${newUser} : [${newBook}]`)
    // console.log(books[newUser] = newBook)
    // books = Object.assign(`'${newUser}' : ${newBook}`)
    if(books[newUser] === undefined){
        books[newUser] = []
    } 
    books[newUser].push(newBook)
    // books[newUser]= books[newUser].concat(newBook)
    console.log(books)
    next()
})


// 현재 사용자의 전체 도서목록 조회
app.get('/users/:uname/books', (req, res, next) => {
    console.log(books[req.user])
    next()
})

// 현재 사용자의 특정 도서 조회
app.get('/users/:uname/books/:name', (req, res, next) => {
    let newUser = req.user
    let searchBook = req.params.name
    console.log(books[newUser],searchBook)
    if(books[newUser].includes(searchBook)) {
    res.send(`${newUser}님의 서재에 ${searchBook}가 있습니다`) 
    console.log(`${newUser}님의 서재에 ${searchBook}가 있습니다`)
    }
    else {
    res.send(`${newUser}님의 서재에 ${searchBook}이 존재하지 않습니다.`) 
    console.log(`${newUser}님의 서재에 ${searchBook}가 존재하지 않습니다`)
    }
    next()
})

//  현재 사용자의 특정 도서내용 변경 (변경사항을 쿼리스트링으로 입력)



/* 서버실행 */
app.listen(port, () => {
    console.log(books)
    console.log(`Now listening on port ${port}`)
})