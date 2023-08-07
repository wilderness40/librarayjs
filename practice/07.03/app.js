// const openBtn = document.getElementById('open-btn')
// const sideBar = document.querySelector('.sidebar')
// const menus = document.querySelectorAll('.menu')

// function openSidebar(e){
//   e.stopPropagation() // 이벤트 버블링 방지
//   sideBar.classList.add('show')
// }

// function hideSidebar(e) {
//   // 사이드바가 열려있는지 체크하는 용도
//   console.log(sideBar.classList.contains('show'))

//   // 사이드바 영역 내부를 클릭했는지 체크하는 용도
//   console.log(sideBar.contains(e.target))

//   if(sideBar.classList.contains('show') && !sideBar.contains(e.target)) {
//     sideBar.classList.remove('show')
//     console.log(hidesidebar.contains(e.target))
//   }
  
// }

// openBtn.addEventListener('mouseenter', openSidebar)
// document.addEventListener('click', hideSidebar)


// let index = 0

// function lightoff(e) {
//   const led = document.querySelector('.on') //켜져있는 led 찾기 (on클래스가 적용된 led)
//   if(led) led.classList.remove('on')
// }

// function lighton() {
//   lightoff() // 이전에 켜져있던 led 끄기
//   const leds = document.querySelectorAll('.led')
//   leds[index].classList.add('on')
//   index++ //인덱스값 증가
//   if(index > leds.length - 1) {
//     index = 0
//   }

//   // 현재 led 켜기
// }

// function startEffect(){
//   console.log('load')
//   setInterval(lighton,1000)// 1초마다 led를 켜기
// }

// // load 이벤트 : 웹 화면이 처음 로딩될 때 발생함
// window.addEventListener('load', startEffect)



// 연습문제 5번


const circle = document.querySelector('.circle')


function copyImg(e) {
  console.log(e)
  let x = e.clientX
  let y = e.clientY
  let div = document.createElement('div')
  div.className='circle'
  // div.setAttribute('class', 'circle')
  div.style.left=x+'px'
  div.style.top=y+'px'
  // console.log(div)
  document.body.appendChild(div)
  console.log(document.body.appendChild(circle))
  
  // console.log(div.setAttribute('class', 'circle'))
  // console.log(div.className)
  

}

window.addEventListener('click', copyImg)

// 클릭할때마다 div를 생성한다 -> css를 입힌다 (실패)
  // const div = document.createElement('div')
  // div.classList.add('circle')
  // e.target.append(div)


// 클릭하는 영역의 좌표값을 인식한다
  // let x = e.target.clientX
  // let y = e.target.clientY
  // circle.style.left=x+'px'
  // circle.style.top=y+'px'

// 클릭하는 영역에 element를 복사한다, 추가한다?