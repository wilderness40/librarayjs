const boxes = document.querySelectorAll('.box')
const container = document.querySelector('#box-container')
let index = 0


function moveBox() {

  console.log(boxes[index])
  if(boxes[index]) boxes[index].classList.add('active')

  index++
  if ( index > boxes.length - 1) {
    setTimeout(function(){
      for(let box of boxes){
        // console.log(box)
        box.classList.remove('active')
      }
      index = 0
    }, 500)
  }
  
}

setInterval(moveBox,500)
// setInterval 자체가 for문이기 때문에 반복문 for를 안에 넣으면 
// 동시에 실행되는 것처럼 배열이 한번에 실행된다.

    //순서대로? -> index 값을 활용
