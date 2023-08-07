let slide = document.querySelector('.sliderwrap .slider')
let moveBtn = document.querySelector('.btn')

let index = 0

moveBtn.addEventListener('click', function(){
 
 if (index===2) return;
 index++;

  let clickEvent = slide.style.transform=`translateX(-${100 * index}%)`
  console.log(clickEvent)
})