
/*
const fruits = ['apple', 'banana', 'orange', 'watermelon']

 .find함수 

function longest(element) { //인자값 element는 판별함수
  return element.length > 6//판별조건
}

const found = fruits.find(longest) //longest는 for of문의 기능을 하게 된다
console.log(found)

*/

/*findIndex함수 

function longest (element) {
  return element.length > 6
}

const found = fruits.findIndex(longest)
console.log(found)

*/

/*includes 함수 - 리액트에서 자주 사용 (~에서 ''이 포함된 단어 찾기)

const seasons = ['spring', 'summer', 'autumn', 'winter']
console.log(seasons.includes('summer'))


const title = 'Harppry potter'
console.log(title.includes('potter'))

*/
/*
.filter 함수 - 리액트에서 자주 사용 (~에서 특정 조건의 변수 찾기)

const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

function isShort(word) {
if (return word.length < 5)  
  return true // filter에서 true값만 새로운 배열에 담는다
else
  return false // filter에서 false 값은 걸러냄
}
const wordsFiltered = words.filter(isShort)
console.log(wordsFiltered)

 */
/*
// some 함수 (-중 하나라도 조건을 만족하면 true 반환 - or조건과 유사함) - 자주는 사용 안함

const numbers = [32, 6, 4, 13, 9, 57]

function isMultiplyByThree(element) {
  return element % 3 === 0
}

const result = numbers.some(isMultiplyByThree)

*/

/*

// every 함수 - 모든 요소가 조건을 만족해야함 &&와 유사함 

const numbers = [32, 6, 4, 13, 9, 57]

function isMultiplyByThree(element){
    return element % 3 === 0
}

console.log(numbers.every(isMultiplyByThree))
 */

/*

// forEach 함수 - 새로운 배열을 만들지는 않는다.
// forEach : 기존 배열 원소를 재가공(리모델링) 하기 위함

const currnetTime = [3, 8, 23]  // 시, 분, 초
const timeStr = [] // 가공된 데이터가 저장

function addZero(time) {
  timeStr.push(`${time < 10 ? '0'+ time : time}`)
}

currnetTime.forEach(addZero)
console.log(timeStr.join(':')) // join을 사용하여 배열 -> 문자열로 변경됨, join은 :을 연결하는 기능

*/
/*

// forEach의 활용 예2

const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

function addDotCom(userID) {
  console.log(userID + '@gmail.com') 
}

userIDs.forEach(addDotCom)

*/



//map 함수 - element들을 하나씩 꺼내서 각각의 요소에 함수를 한번씩 실행하고 다시 새로운 배열에 담는다
// filter는 조건을 만족하는 요소들만 배열에 담지만 map 함수는 모든 요소들을 재가공해서 배열에 담는다.
/*
const numbers = [1, 2, 3, 4, 5]

function multiply(numberMultiplay) {
  if(numberMultiplay % 2 === 0) {
    return numberMultiplay * 2
   } else {
      return numberMultiplay * 4
    }
  }


const newArr = numbers.map(multiply)
console.log(newArr)  // 새로운 배열을 만들기 때문에 map 함수를 적용한 배열을 윗줄에서 처럼 newArr로 선언하고 console로 출력해야 결과를 볼 수 있다.

// map을 사용하여 짝수는 3을 곱하고 홀수는 4를 곱하기 위해서는 if-else 조건문을 작성하여 다른 조건을 걸고 reuturn 반환값을 다르게 작성하면 된다

*/
/*
//map과 forEach를 활용하여 이메일 주소 제거하고 아이디만 남기기
// forEach,map : 둘다 데이터 재가공(리모델링)이 목적이다

const userEmails = [
  'victoria@gmail.com',
  'sun@gmail.com',
  'johseb@gmail.com',
  'syleemomo@gmail.com',
  'hannah@gmail.com',
  'shara@gmail.com',
  'martin@gmail.com',
  'gorgia@gmail.com',
  'nana@gmail.com',
  'dannel@gmail.com'
]

function removeDotCom(userEmail) {
  return userEmail.split('@')[0]
}

const userIDs = userEmails.map(removeDotCom)

userIDs.forEach(function(userID){
  console.log(userID)
})

*/

// return 앞에 쓰는 것과 뒤에 쓰는 것의 차이는 어떨때 return을 작성하나


// flag 변수 :  로딩 화면 공올라갔다 내려갔는 것 구현하려고 나온 변수
// 인덱스 값이 증가하면서 공이 올라가다가 인덱스 값이 다시 감소하면서 마지막으로 올라갔던 공을 올리고 싶었다
// 문제는 마지막에 올라갔던 공이 인덱스가 감소하면서 기존 인덱스 증가하는(공이 올라가는) for문 조건으로 들어가게 되면서 인덱스 값이 3,4,3,4 갖혀버렸다
// flag 를 통해 이것을 해결할 수 있다

/*

// 아이콘 넣기 
 
const fruits = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
const rootDiv = document.getElementById('root')

function addIcons(fruit, index) // 두번째, 세번째 파라미터는 선택사항(옵션)이다. 반드시 작성해야하는 것은 아님
{
  const item = document.createElement('div')
  item.innerText = `${icons[index]} ${fruit}`
  return item
}
const fruitsRefined = fruits.map(addIcons)

function displayFruits(fruitElement) {
  rootDiv.appendChild(fruitElement) // HTML 문서에 엘리먼트를 마운트 한다
}

fruitsRefined.forEach(displayFruits) // for of문의 역할 모든 변수들을 하나씩 적용

*/ 

// 서버가 데이터(rest api)를 브라우저로 보낸다
// 서버가 rest api를 통해 보내는 배열(JSON등)을 리액트(map등)를 통해 원하는 내용으로 
// 가공하여 가공된 결과값(엘리먼트)를 브라우저로 보여준다

// 문제 2번 - 쥬라기공원이 나와야하는데 그 중 빠른연도 찾는법을 모르겠다, forEach?

// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]

// function findMovie(movie) {
//  return movie.release >= '2005-00-00' && movie.release <= '2010-00-00'
// }

// const searchMovie = movies.find(findMovie)
// console.log(searchMovie)

// 문제 3번 - find만으로도 할수 있나?

// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]

// function searchWordMan(movie) {
//   return movie.title.includes('man') 
// }
// const containManWordMovie = movies.find(searchWordMan)


// 문제 4번 

// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]

// function findtitleRelease(movie) {
//    return  movie.release < '2010' &&  movie.title.startsWith('J')
// }
// const movie_Jfirst_Before2010 = movies.find(findtitleRelease)
// console.log(movie_Jfirst_Before2010)

// 문제 5번

// const words = [
//   'abc',
//   'animal',
//   'fruit',
//   'abba',
//   'abcba',
//   'location',
//   'radar',
//   'madam',
//   'mario',
//   'level'
// ]

// function contain_a_Word (word) {
//   return word.includes('a')
// }

// const a_words = words.filter(contain_a_Word)
// console.log(a_words)

// 문제 6번 

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     console.log(products)

//     // 조건에 맞는 상품을 검색하는 코드 구현하기
//     function findProduct(product){
//       return product.product_type == `mascara` && product.price < 10
//     }
//     const mascara_below10dollar =products.filter(findProduct)
//     console.log(mascara_below10dollar)
// })

// 문제 7번

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     console.log(products)

//     // 조건에 맞는 상품을 검색하는 코드 구현하기
//     function findProduct(product){
//             return product.product_type == `lipstick` &&  product.rating <= 5 &&  product.rating >= 4   
//           }
//       const lipstick_rating4as5 =products.filter(findProduct)
//        console.log(lipstick_rating4as5)

//   })


// 문제 8번 

// const friends = [
//   {name: 'victoria', age: 13, city: 'seoul'},
//   {name: 'sun', age: 34, city: 'busan'},
//   {name: 'johseb', age: 25, city: 'busan'},
//   {name: 'syleemomo', age: 9, city: 'seoul'},
//   {name: 'hannah', age: 41, city: 'daegu'},
//   {name: 'shara', age: 37, city: 'seoul'},
//   {name: 'martin', age: 28, city: 'daegu'},
//   {name: 'gorgia', age: 39, city: 'seoul'},
//   {name: 'nana', age: 24, city: 'busan'},
//   {name: 'dannel', age: 19, city: 'seoul'},
// ]
// function filterFriend(friend){
//   return friend.city == `seoul` && friend.age < 30
// }
// const seoul_below30age_friend = friends.filter(filterFriend)
// console.log(seoul_below30age_friend)


// 문제 9번  - 인터넷 복붙으로 해결.. https://curryyou.tistory.com/228

const friends = [
  {name: 'victoria', age: 13, city: 'seoul'},
  {name: 'sun', age: 34, city: 'busan'},
  {name: 'johseb', age: 25, city: 'busan'},
  {name: 'syleemomo', age: 9, city: 'seoul'},
  {name: 'hannah', age: 41, city: 'daegu'},
  {name: 'shara', age: 37, city: 'seoul'},
  {name: 'martin', age: 28, city: 'daegu'},
  {name: 'gorgia', age: 39, city: 'seoul'},
  {name: 'nana', age: 24, city: 'busan'},
  {name: 'dannel', age: 19, city: 'seoul'},
]

function numOfCity(friend) {
  return friend.city
}

function getCount(array) {
  return array.reduce((pv, cv)=>{
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
  }, {});
}

// const cityList = friends.map(numOfCity)
// console.log(getCount(cityList))

// { 'seoul': 0}

// result.seoul = 0
// result['seoul'] = 0

const result = {}
friends.forEach(function(friend){
  console.log(friend.city)
  if(!result[friend.city]) result[friend.city] = 0 // result['seoul'] = 0
  result[friend.city]++
})

console.log(result)


// 문제 10번 
// const friends = [
//   {name: 'victoria', age: 13, city: 'seoul'},
//   {name: 'sun', age: 34, city: 'busan'},
//   {name: 'johseb', age: 25, city: 'busan'},
//   {name: 'syleemomo', age: 9, city: 'seoul'},
//   {name: 'hannah', age: 41, city: 'daegu'},
//   {name: 'shara', age: 37, city: 'seoul'},
//   {name: 'martin', age: 28, city: 'daegu'},
//   {name: 'gorgia', age: 39, city: 'seoul'},
//   {name: 'nana', age: 24, city: 'busan'},
//   {name: 'dannel', age: 19, city: 'seoul'},
// ]

// function olderThanMe(friend) {
//   return friend.age >40 
// }

// const age40overFriends = friends.map(olderThanMe)
// console.log(age40overFriends)

// 문제 11번 

// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// function filteringUsers (user) {
//  return user.age > 0 && user.age == parseInt(user.age)  && user.email.includes(`@`) && user.email.includes(`.com`) 
// }

// const findError = users.filter(filteringUsers)
// console.log(findError)

// 문제 12번 

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const rootDiv = document.getElementById('root')

// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// 서버 데이터 값을 map으로 가져와서 creatElement로 요소에 넣고 값을 불러와서 입력해야함
// product: {name: '', price: ''} : 데이터

// element.innerHTML = `<div> ${/} </div>`
// rootDiv.appendChild(element)



// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){

  const item = document.createElement('div')
  item.className ='product'

  const item_img = document.createElement('div')
  item_img.className ='product-img'


  const img = document.createElement('img')
  img.src = product.image_link

  const item_name= document.createElement('div')
  item_name.className ='product-name'
  item_name.innerHTML = `${product.name} \n (${product.price})`


  const item_description= document.createElement('div')
  item_description.className ='product-description'
  item_description.innerText = product.description

  item.append(item_img,item_name,item_description)
  item_img.appendChild(img) 
  return item
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(item){
  rootDiv.appendChild(item)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    console.log(productsRefined)
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})

// 자바스크립트 1급함수 (first-class function)
// 함수를 변수와 동일하게 취급함

function mimic(){
  console.log('mimic')
}
function bark(){
  console.log('bark')
}
function speak(bark, mimic){
  if(true){
    bark() // 콜백함수 
  }else{
    mimic()
  }
}

const copyedArray = []
const array = [1, 2, 3]

function copyArray(array, callback){
  for(let element of array){
    copyedArray.push(callback(element))
  }
}
function multiplyTwo(element){
  return 2 * element 
}
copyArray(array, multiplyTwo)

console.log(copyedArray)

