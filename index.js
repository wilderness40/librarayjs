const express = require('express') // 모듈 임포트
const app = express()
const router = express.Router()
const port = 3000 // 서버 포트

app.get('/google', (req, res) => {
    res.redirect('https://google.com')
})
  
// 서버를 구동하고 브라우저 요청을 기다림
// index.js 파일 맨 하단에 있는게 좋음
app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
})


/* 

// 모든 요청에 대하여 항상 실행되는 미들웨어 
// req, res 객체도 중간에서 변경함
// req : { requestTime : ' Mon Aug 07 2023 11:01:52 GMT+0900' } 
const myLogger = function(req, res, next){
    req.requestTime = new Date()
    console.log(`LOGGED - ${req.requestTime}`) // 콘솔은 브라우저에 나오지 않고 서버에 표시됨
    next() // 요청을 그 다음 미들웨어로 넘겨주는 함수 
}

// 미들웨어 등록
app.use(myLogger)

app.get('/', function(req, res){ // 미들웨어 -라우트핸들러 함수
    res.send(`Hello World! - ${req.requestTime}`)
})

// 미들웨어 
// 미들웨어 중에서 라우트 경로가 포함된 미들웨어 : 라우트 핸들러 함수 라 한다
// 라우트 ('/', route) : / 경로로 요청할 경우 처리를 한다
// HTTP 메서드 (GET) 가 왔을때 처리를 한다, HTTP 메서드 종류 (GET POST PUT DELETE)
// req : request(요청 객체)
// res : response(응답 객체)
*/
