// let checkPoint = document.querySelector('.checkpointer');
// let checkMark = document.querySelector('.checkarrow');
// console.log(checkMark)

// checkPoint.addEventListener('click',function(){
//   checkMark.classList.toggle('visible')

// })

let checkPoint = document.querySelector('.checkpointer');
let checkMark = document.querySelector('.checkarrow');

checkPoint.addEventListener('click',function(){ 
  console.log(checkMark.style.display)

  if(checkMark.style.display == 'none') { 
    checkMark.style.display ='block'
  } else {
    checkMark.style.display ='none'
  }
  
})

