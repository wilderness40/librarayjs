// 전역변수
const container2 = document.querySelector('.container-noneauto')
const tultipBtn = document.querySelector('.tultip-btn')
const tultip = document.querySelector('.tultip')
const detailView = document.querySelector('.detail-view')
const detailViewModal = document.querySelector('.detailview-modal')
const header = document.querySelector('.wrapper header')

let cardArr = []
const allcardSection = document.querySelector('.allcards')
let newArr = []
let cards = []

let isDown = false // 플래그 : 현재 마우스 클릭여부 판단
let startX // 마우스 클릭시 마우스의 x좌표
let scrollLeft // 최근 스크롤바 위치 저장


container2.addEventListener('mousedown', e=>{
isDown = true
container2.classList.add('active')
startX = e.pageX - container2.offsetLeft // 컨테이너 기준 클릭한 마우스의 x좌표
scrollLeft = container2.scrollLeft // 현재 스크롤바 위치 저장
})

function deactive(){
isDown = false
container2.classList.remove('active')
}

container2.addEventListener('mouseleave', deactive)
container2.addEventListener('mouseup', deactive)

container2.addEventListener('mousemove', e=> {
if(!isDown) return
e.preventDefault()
const x = e.pageX - container2.offsetLeft // 마우스가 드래그할때 현재 마우스의 x좌표
const walk = x - startX // 마우스 드래그 지점에서 이전에 마우스 클릭지점까지 이동한 거리
container2.scrollLeft = scrollLeft - walk // 최근 스크롤바 위치에서 마우스 이동거리만큼 더하거나 뺴줌
})

// fetch 데이터 가져오기

async function showLocalImg() {
let results = await Promise.all ( // promise.all
[
fetch('https://api.unsplash.com/photos?page=1&per_page=35&client_id=NNmNL2OOluBZlE9VpvVPQKXW7p0vm0dCkz2n8dFIAUA&;')
.then(response => response.json()),
fetch('https://api.unsplash.com/photos?page=2&per_page=35&client_id=NNmNL2OOluBZlE9VpvVPQKXW7p0vm0dCkz2n8dFIAUA&;')
.then(response => response.json()),
fetch('https://api.unsplash.com/photos?page=3&per_page=35&client_id=NNmNL2OOluBZlE9VpvVPQKXW7p0vm0dCkz2n8dFIAUA&;')
.then(response => response.json())
])


// 여기에다가 로딩화면을 구성해야겠네
let div = document.createElement('div')
div.innerText = `Loading...`
div.className = 'loading-message'
document.body.append(div)


// 메세지 생성후 화면에 보여주기
// await new Promise((resolve, reject) => setTimeout(resolve, 3000));

div.remove() // 메세지 삭제

const unsplash = results

newArr.push(...results[0])
newArr.push(...results[1])
newArr.push(...results[2])

// unsplash 이미지 가로스크롤 
for (let i=0; i < newArr.length; i++) {

let cardList = document.createElement('div')
cardList.className = 'card'

let radomImg = document.createElement('img')
radomImg.src = newArr[i].urls.regular
radomImg.className = 'imgbox'
radomImg.alt = newArr[i].alt_description

container2.appendChild(cardList)
cardList.append(radomImg)
cards.push(cardList)
}
// 디테일뷰 파트
// 이벤트 위임 

for(let card of cards){
function showlargeImg(e){ // 카드이미지2 클릭시 확대
  inside = false
  detailView.innerHTML = `<img src=${e.target.src} alt='${e.target.alt}' class='large-view'>`
  }
card.addEventListener('click', showlargeImg)
}

// 전체 카드리스트 가져오기
function createCard(card){
  let allCard = document.createElement('div') // 개별카드를 감싸는 프레임
  let cardImgFrame = document.createElement('div') // 카드이미지를 감싸는 프레임
  let cardImg = document.createElement('img')  // 카드이미지 프레임 내의 이미지
  let cardText = document.createElement('div') // 카드텍스트를 감싸는 프레임

  allCard.className = 'cardFrame'  
  cardImgFrame.className ='cardImgFrame'
  cardImg.className = 'cardImg'
  cardText.className = 'cardtext' 
  cardText.innerHTML = `<h3>${card.alt_description}</h3> \n <p>by ${card.user.username}</p>`

  cardImg.src = card.urls.regular // 카드 이미지

  allcardSection.appendChild(allCard)
  allCard.append(cardImgFrame,cardText)
  cardImgFrame.appendChild(cardImg)
  cardArr.push(allCard)
}
window.createCard = createCard
  
for (let i = 0; i < newArr.length; i++) {
  createCard(newArr[i])
}
}
showLocalImg()

window.addEventListener('scroll', () => {
  for (let i = 0; i<cardArr.length; i++) {
  if(allcardSection.getBoundingClientRect().top < header.offsetHeight + 500){   
      cardArr[i].classList.add('reveal','down')
  
  }  else {
    cardArr[i].classList.remove('reveal','down')
  }
}

// 튤팁기능
function showhideTultip(){
tultip.classList.toggle('on')
}
tultipBtn.addEventListener('click', showhideTultip)

let inside = null


  // 스크롤시 모달창 나오는 기능
const detailViewImg = detailView.querySelector('img')
if(detailViewImg && detailViewImg.getBoundingClientRect().top < header.offsetHeight + 10) {
detailViewModal.innerHTML = `<p>현재 ${detailViewImg.alt}를 보고 있습니다.</p> \n <button>닫기</button>`

if(!detailViewModal.classList.contains('show') && !inside){
detailViewModal.classList.add('show')
inside = true
}

const modalCloseBtn = detailViewModal.querySelector('button')
modalCloseBtn.addEventListener('click', (event) => {
if(detailViewModal.classList.contains('show')) detailViewModal.classList.remove('show')
})
}

// 무한스크롤 
const scrollHeight = Math.max(   // 전체문서 높이 (스크롤이벤트 내부에 있어야 함)
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );
    // 스크롤을 브라우저창 아래까지 다 내린경우
let imgList = []

  if(Math.abs(window.pageYOffset+document.documentElement.clientHeight-scrollHeight) < 100){
    imgList = getImgList(2)
    console.log('scroll is bottom of browser!')
   imgList.forEach(factory => {
    // console.log(createCard)
    window.createCard(factory)
    }) 
  }

})

// 무한스크롤시 이미지 배열 합치기
function getImgList(num){
  for (let i = 0; i < num; i++){
    imgList = newArr.concat(newArr)
    // imgList.push(...newArr)
  }
  return imgList
}


// 스크롤투탑
const scrollTopBtn = document.querySelector('.scrollBtn')
scrollTopBtn.addEventListener('click', () => window.scrollTo({
top: 0 ,
behavior: 'smooth'
}))

// 다크모드

const mode = document.querySelector('.mode')
const modeBtns = document.querySelectorAll('.mode .fa-solid')

mode.addEventListener('click', (event) => {
document.body.classList.toggle('dark')
header.classList.toggle('dark')
for (const modebtn of modeBtns){
if(modebtn.classList.contains('active')){
modebtn.classList.remove('active')
} else {
modebtn.classList.add('active')
}
}
})

// 스크롤 임계점 도달시 좌측 하단에 모달창 보이도록 설정
/*
window.pageYoffset 문서상단부터 브라우저 상단까지의 거리
getBoundingClientRect().top 브라우저상단부터 엘리먼트까지의 거리
*/


// 검색창 기능
const input = document.querySelector('.search input')
// const inputEnter = document.querySelector('label span')

function searchPhotos(e) {
  
  console.log(e.target.value.trim())
  e.target.value =''
}
input.addEventListener('change', searchPhotos)

  