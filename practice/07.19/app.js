// // 콜백기반 비동기 프로그래밍

// // 주어진 src 경로를 이용하여 script 태그를 동적으로 생성
// // html 문서에 script 태그 마운트
// function loadScript(src, callback){
//   let scirpt = document.createElement('script')
//   scirpt.src = src // 자바스크립트 파일을 읽기 시작함, 이게 시간이 오래걸려서 비동기 처리하려함
  
//   // onload 이벤트 : 파일 로딩이 끝났을때 발생
//   scirpt.onload = () => callback(scirpt) // 스크립트 로딩이 완료됐을때 실행할 이벤트핸들러 함수
//   document.head.append(scirpt);
// }

// // 중첩 콜백

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(script){
//   alert(`${script.src}가 로드되었습니다.`);
//   alert(_); // 스크립트에 정의된 함수 
//   console.log('lodash 함수 실행')

//   loadScript('./js/script.js', function(script){
//     alert(`${script.src}가 두번째로 로드되었습니다.`);
//     newFunction();
//   })
// })
// console.log('스크립트 함수 아래코드 !')

// // loadScript('./js/script.js') 로딩이 덜되서 함수가 정의되지 않은것으로 나옴, 로딩이 완료된 이후 실행 될수 있도록 작업이 필요함
// // 콜백함수를 활용하여 로딩이 완료됐을떄 실행될 수 있도록 설정함


// 에러핸들링


// function loadScript(src, callback){
//   let script = document.createElement('script')
//   script.src = src // 자바스크립트 파일을 읽기 시작함, 이게 시간이 오래걸려서 비동기 처리하려함
  
//   // onerror 이벤트 : 파일 로딩에 실패했을때 발생함
//   script.onload = () => callback(null, script) // 첫번째 인자는 실패시, 두번째 인자는 성공시 주로 에러객체가 들어감
//   script.onerror = () => callback(new Error(`${src}를 불러들이는 중에 에러가 발생했습니다!`))
//   document.head.append(script);
// }
// console.log('스크립트 함수 아래코드 !')

// // 오류 우선 콜백 => node.js, 프로미스 
// loadScript('./js/script.js', function(error, script){
//   if(error){
//     // 에러처리
//     alert(`${error} 발생 !`)
//   } else{
//     // 스크립트 로딩에 성공한 경우 처리
//     alert(`${script.src} 로딩 성공`)
//   }
// })


// 에러핸들링


// function loadScript(src, callback){
//   let script = document.createElement('script')
//   script.src = src // 자바스크립트 파일을 읽기 시작함, 이게 시간이 오래걸려서 비동기 처리하려함
  
//   // onerror 이벤트 : 파일 로딩에 실패했을때 발생함
//   script.onload = () => callback(null, script) // 첫번째 인자는 실패시, 두번째 인자는 성공시 주로 에러객체가 들어감
//   script.onerror = () => callback(new Error(`${src}를 불러들이는 중에 에러가 발생했습니다!`))
//   document.head.append(script);
// }
// console.log('스크립트 함수 아래코드 !')

// // 오류 우선 콜백 => node.js, 프로미스 
// loadScript('1.js', step1)

// function step1(error, script){
//   if(error){
//     // 에러처리
//     handleError(error)
//   } else{
//     // 스크립트 로딩에 성공한 경우 처리
//     loadScript('2.js', step2)
//   }
// }

// function step2(error, script){
//   if(error){
//    handleError(error)
//   } else {
//     loadScript('3.js', step3)
//   }
// }

// function step3(error, script){
//   if(error){
//     handleError(error)
//   } else{

//   }
// }


// 프로미스 안에 들어간 콜백 : executor
// resolve : 성공했을 때 실행할 콜백함수, resolve(인자는 1개이하이어야함)
// reject : 실패했을 때 실행할 콜백함수

// 약속이 이행된 프로미스 (fullfilled promise)
// 성공이든 실패든 처리된 프로미스는 settled promise 반대는 pending promise 대기 상태 프로미스
// let promise = new Promise(function(resolve, reject){ //resolve와 reject는 자바스크립트 내장함수임, 콜백 안의 콜백
  // 시간이 오래 걸리는 비동기 작업
  // setTimeout(() => resolve('결과'), 2000) // 성공시-fulfilled-value
  // setTimeout(() => reject(new Error('에러발생!')), 1000) // 실패시 - rejected-error
// }) 

// then 
// promise.then(
//   result => alert(result), // resolve시 실행됨
//   error => alert(error) // reject시 실행됨
// )

// catch : 에러가 발생한 경우만 다루고 싶다면
// promise.catch(error => alert(error)) //  promise.catch(alert(error)) 이렇게 작성가능

//finally

// promise.finally(()=> alert('음반 발매 작업이 완료되었습니다!'))
// .then(result => alert(result))



// function loadScript(src){
//     return new Promise(function(resolve, reject){
//       let script = document.createElement('script')
//       script.src = src // 자바스크립트 파일을 읽기 시작함, 이게 시간이 오래걸려서 비동기 처리하려함
    
//       script.onload = () => resolve(script) 
//       script.onerror = () => reject(new Error(`${src}를 불러들이는 중에 에러가 발생했습니다!`))
      
//       document.head.append(script);
//     })
//   }


//   let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
// // promise 대기상태: {state: 'pending', result: undefined}
// // promise 성공 : {state: 'fulfilled', result: script}
// promise.then(script => alert(`팬들한테 결과전송 : ${script.src}`)) // 팬들한테 결과를 전송


// 프로미스 체이닝
// new Promise(function (resolve, reject){
//   setTimeout(()=> resolve(1), 1000) // 비동기 작업
// }).then(function(result){
//   alert(result) // 1
//   return result * 2 // return 값이 다시 promise가 되기떄문에 .then을 체이닝 할수 있음ㄴ
// }).then(function(result){
//   alert(result) // 2
//   return result * 2
// }).then(function(result){
//   alert(result) // 4
// })


// const promise = new Promise(function (resolve, reject){
//   setTimeout(()=> resolve("음반발매 완료"), 5000) // 비동기 작업
// })

// promise.then(result=> alert('첫번째 구독자',result)) 
// promise.then(result=> alert('두번째 구독자',result)) 
// promise.then(result=> alert('세번째 구독자',result)) 
// promise.then(result=> alert('네번째 구독자',result)) 
// promise.then(result=> alert('다섯번째 구독자',result)) 


// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   alert(result); // 1
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve(result * 2), 3000)
//   });

// }).then(function(result) { // (***)

//   alert(result); // 2
//   return result * 2;

// }).then(function(result) {

//   alert(result); // 4
//   return result * 2;

// });

// load 스크립트 예시 개선하기

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//     document.head.append(script);
//   });
// }

// loadScript('./js/script.js')
// .then(function(script){
//   alert('첫번째 script 로드 완료')
//   return loadScript('./js/script2.js')
// })
// .then(function(script){
//   alert('두번째 script 로드 완료')
//   return loadScript('./js/script3.js')
// })
// .then(function(script){
//   alert('세번째 script 로드 완료')
//   // 3개의 스크립트 로딩완료
//   one()
//   two()
//   three()
// })


// fetch('./js/user.json') 
// .then(function(response){
//   // 응답에서 텍스트 파싱(텍스트로 변환하는 비동기 작업)
//   return response.json()  // 서버 json data -> 자바스크립트 객체로 변환
// })
// .then(function(user){
//   alert(JSON.stringify(user))
// }) // 프로미스 반환

// // 위 함수를 화살표 함수로 표현시 아래와 같이 작성됨
// fetch('./js/user.json') 
// .then(response => response.json())
// .then(users => alert(JSON.stringify(users)))


// 깃허브 서버로 옮기기

function loadUser(url){ // 사용자 정보 조회
  return fetch(url)
        .then(response => response.json())
}
function loadGithubUser(name){ // 깃허브 아바타 사진 조회 
  return fetch(`https://api.github.com/users/${name}`)
  .then(response => response.json())
}

function showAvatar(githubUser){
  return new Promise(function(resolve ,reject){
    console.log(githubUser) // 디버깅용
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    document.body.append(img)
  
    setTimeout(()=> {
    img.remove()
    resolve(githubUser)
  }, 3000)
  })
}

loadUser('./js/user.json')
  .then(user => loadGithubUser(user.name))
  .then(githubUser => showAvatar(githubUser))
  .then(githubUser => alert('작업이 끝났습니다!'))