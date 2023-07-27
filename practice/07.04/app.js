
// 클릭시 움직이는 캐러셀, indicator와 포토의 id 값이 같아야한다

const sliderWrap = document.getElementById('sliderWrap')
const indicator = document.querySelector('#indicator')
const photosLength = document.querySelectorAll('.photo').length
const photos = document.querySelectorAll('.photo')



const distance = 800
let index = 0


function chagenIndicator(event) {
  const prevDotActive = indicator.querySelector('.active')
  prevDotActive.classList.remove('active')
  // 클릭하는 indicator dot에 active를 활성화 시킨다
  event.target.classList.add('active')
  
}

function sliderImgActiveDot(e) {
  if(e.target.className === 'dotPoint') { // 이벤트위임 제일 큰 괄호임, if문 가장 큰 괄호안에 나머지를 작성함
  index++
  if (index > photosLength -1 ) {
    index = 0
  } else if(index = e.target.dataset.id) {
  sliderWrap.style.transform='translateX(' + (-1* distance * index) + 'px)'
  }
  // 이전 indicator 중 active가 들어 있는 값을 찾아서 제거한다
  
  chagenIndicator(e)
  // console.log(e.target.dataset.id)
  
  }
}
  indicator.addEventListener('click', sliderImgActiveDot)

// 클릭된 dotPoint와 photos의 id 값이 일치할 경우 해당 id 지점으로 이동한다
// id로 위치 설정을 어떻게 하지?  data-id와 id를 사용해야하는데...
// 오류 1. 계속 클릭했을 때 사진이 안바뀌는 현상 2. photo의 id값을 활용하지 않고 index값을 활용한점
// for (let photo of photos) {
//   index = photo['id'] = e.target.dataset.id
// }




// 자동으로 움직이는 캐러셀 setTimeout


