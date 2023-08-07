
// 연습문제 1번

// let tilebox = document.querySelector('.container')
// let boxItems = document.querySelectorAll('.box')


// function changeColor() {
//     for(let boxitem of boxItems) {
//     Math.floor(Math.random()*256)
//     let boxColor = boxitem.style.background =`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
//     console.log(boxColor)
//     console.log(boxitem)
//   }
// }


// tilebox.addEventListener('click', changeColor)


// 연습문제 2번

// const imgBox = document.querySelector('.imgbox')

// function showImg() {
//   imgBox.classList.add('on')
//   window.setTimeout(hideImg,3000)
// }

// function hideImg() {
//   imgBox.classList.remove('on')
// }

// window.setTimeout(showImg,1000)

// 연습문제 3번
//setInterval 자체가 반복 성격이 있기때문에 for을 또 사용할 필요가 없다.

// const conutBox = document.querySelector('.num')

// let i =1
// function countNumber() {
//   conutBox.innerText= i
//   i++
//  }

// window.setInterval(countNumber,1000)

// 연습문제 4번
// undefined 전에 끝나게하는 수식 or 마지막 인덱스 값을 찾는 수식 or !의 인덱스 값을 찾는 방법?
const text ='You are watching text now !'
const textBox = document.querySelector('.text-box')
let i = 0


function paradeText() {
  
  // textBox.innerHTML = innerHTMl+text[i]/
  textBox.innerHTML += text[i]
  i++
  if(i > text.length - 1){
    window.clearInterval(timerId)
    
  } 
}

// const timerId= window.setInterval(paradeText,1000)


// 연습문제 5번

