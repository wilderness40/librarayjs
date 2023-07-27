const boxes = document.querySelectorAll('.box')
const indexArray = [0, 1, 2, 3, 4]
let index = 0, prevIndex = 0
let flag = true 

function moveBox() {
  console.log(index)
  boxes[prevIndex].classList.remove('active')
  boxes[index].classList.add('active')

  
  if(index >= 4 || index <= 0){
    flag = !flag
  }
  
  prevIndex = index 
  
  if(!flag) index++
  else index--


}

// function moveBox() {
  
//   boxes[index].classList.add('active')
//   index++ 
 
// }



//while로 했었나? if문은 도대체 왜 안되지 어제 기억이 없다


setInterval(moveBox, 1000)