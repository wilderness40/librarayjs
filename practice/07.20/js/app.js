// async function f(){ // 이행된 프로미스(성공한 프로미스) 반환
//   let promise = new Promise((resolve, reject)=>{
//     setTimeout(resolve('완료!'), 1000)
//   })
//   let result = await promise // 비동기 작업을 기다림
//   console.log('await 다음줄')
// }

// f()
// console.log('프로미스 함수 다음줄')
// await는 말 그대로 프라미스가 처리될 때까지 함수 실행을 기다리게 만듭니다. 
// 프라미스가 처리되면 그 결과와 함께 실행이 재개되죠
// 함수 바깥의 코드가 먼저 실행된다.


// async function showAvatar(){
//   let response = await fetch('./js/user.json')
//   let user = response.json()

//   // 깃허브가서 사진 가져오기
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
//   let githubUser = githubResponse.json()

//   // 아바타 사진 보여주기
//   let img = document.createElement('img')
//   img.src = githubUser.avatar_url
//   document.body.appendChild(img)

//   // 딜레이 함수 (함수 내부에서는 3초동안 기다리는 딜레이 함수가 만들어짐)
//   await new Promise((resolve, reject)=>{
//     setTimeout(resolve, 3000)
//   })
//   img.remove()
//   return githubUser
// }



// showAvatar() // 함수호출

// async, await 사용시 try, catch 를 사용하여 에러를 잡아줘야 함

// async function f(){
//   try{
//     let reponse = await fetch('https://유효하지-않은-주소')
//   }catch(err){
//     alert(err)
//   }
// }
// f()

// // catch를 외부에서 사용하는 방법, 체이닝으로 사용
// async function f(){
//     let reponse = await fetch('https://유효하지-않은-주소')
// }
// f().catch(alert)


// Promise.all 주의사항 : 배열로 주어진 비동기 작업중 어느 하나라도 에러가 발생하면 
// 다른 비동기 작업도 무시되고 전체 결과가 rejected 됨
// Promise.allSettled 을 사용하면 중간에 에러가 있어도 실행이됨 
/* 예시 
[
  {status: 'fulfilled', value: ...응답...},
  {status: 'fulfilled', value: ...응답...},
  {status: 'rejected', reason: ...에러 객체...}
]
*/
// async function fetchServersData(){
//   let results = await Promise.all([
//     fetch('./js/user.json'), // 1번 서버
//     fetch('./js/user.json'), // 2번 서버
//     fetch('./js/user.json'), // 3번 서버
//     fetch('./js/user.json'), // 4번 서버
//     fetch('./js/user.json')  // 5번 서버
//   ])
//   for(let response of results){  // for문으로 모든 서버 결과나올떄까지 await로 기다림
//     const result = await response.json() 
//     alert(JSON.stringify(result))
//   }
// }

// fetchServersData()

const showModalBtn = document.querySelector('.modal-open')
const modalWindow = document.querySelector('.modal-window')
const containerWindow = document.querySelector('.container')
const scrollUpBtn = document.querySelector('.scrollBtn')

showModalBtn.addEventListener('click', openModal=>{
  modalWindow.classList.toggle('expose')
  document.body.classList.toggle('hidden')
  containerWindow.classList.toggle('expose')
})

// 스크롤 버튼 작업
scrollUpBtn.addEventListener('click',upScroll=>window.scrollTo(0,0))

window.addEventListener('scroll', scrollPosition=>{ 
   if(window.scrollY > 100 && window.scrollY <1000) {
    scrollUpBtn.style.display='none'
  }
   else if (window.scrollY == 0) {scrollUpBtn.style.display='none'}
   else {scrollUpBtn.style.display='block'}
})

// 스크롤시 네비바 액션 작업

const navbar = document.querySelector('nav')

window.addEventListener('scroll', navAction=> {
  if(window.scrollY > 80) navbar.style.opacity = '0'
  else if(window.scrollY < 80) navbar.style.opacity = '1'
})


// 네비바 작업 : 웹사이즈, 메인메뉴 호버시 서브메뉴 나오도록
const header = document.querySelector('header')
const navcontainer = document.querySelector('.nav-container')
const mainMenu = document.querySelector('.main-menu')
const mainLists = document.querySelectorAll('.main-menu>li>a')
console.log(mainLists)
 
const subMenus = document.querySelectorAll('.main-menu>li>ul')

const navBackground = document.querySelector('.background')

// 버거버튼 (모바일용 : 반응형 420px 이하일떄)



const burgerBtn = document.querySelector('header nav .burger-btn')
function showMenubar(){
  mainMenu.classList.toggle('show')
  navBackground.classList.toggle('on')

  mainLists.forEach(submenu => {
    // console.log(submenu)
    submenu.addEventListener('click',(e) => {
    console.log(e.target.nextElementSibling)
      e.target.nextElementSibling.classList.toggle('on') 
    })
  })
 

}
burgerBtn.addEventListener('click', showMenubar)
