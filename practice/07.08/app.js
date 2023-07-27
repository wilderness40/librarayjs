// 문제 1번

// solution 1 : 내림차순으로 정렬하고 인덱스 값이 0인 것을 출력 (flag 함수 복붙.. 이거 직접 작성못하겠음)
// function findMaxValue(flag, ...args){
//   args.sort( (a, b) => flag * (a - b))
//    return parseFloat(args[0])
// }

// // solution 2 : 숫자가 아닌 것을 거른다, 기준값(가장 큰 값? or 가장 작은값)을 설정한 다음에 인자값이랑 비교해서 차이가 가장 큰 값으로 업데이트 한다

// // 테스트 케이스 
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))

// 문제 2번


// solution 1 : 화살표 함수 내의 function 함수를 화살표 함수로 변경하여 상위의 this가 가리키는 값과 일치시킨다


// function Movie(title, author, release){
//   this.title = title
//   this.author = author
//   this.release = release
//   // console.log(this)
  
  
//   this.printMovieInfo = () => {
    
//       const getInfo = ()=>{
//         return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//       }
//       console.log(getInfo()) 
     
      
//   }
// }
// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()


// 문제 3번

// getDistance 함수 구현하기 

// soulution 1 : 인자가 객체인경우 어떻게 할 것인가?
// 인자값으로 객체가 여러개 올경우 어떻게 하지? 스프레드 연산자?
// 인자로 객체 2개를 인식 못하여 실패

  // function getDistance({x, y}){
  //   x = x || 0
  //   y = y || 0
  //    return Math.sqrt(Math.pow((x-0),2)+Math.pow((y-0),2))
  // }

  // solution 2 : 인덱스를 활용?
// function getDistance(a, b) {
 
//  b[0]-a[0] 
//  b[1]-a[1]
 
// }

 
// 테스트 케이스
//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14})) // 13 => {x:3, y:2} 변수를 인식한다
//  console.log(getDistance({x: 3, y: 4})) // 5

// solution 3 : gpt도움- 변수명 설정하여 value값 활용


// 내가 처음 작성한 코드 

// const a = {x:' ', y:' '} // 의미없는 코드
// const b = {x:' ', y:' '} // 의미없는 코드

// function getDistance(a, b) {
//   if( a, b || 0 ) { // 객체를 0으로 표현하면 안됨, a,b콤마도 어색 ,if문도 필요없음
//   let ret1 = b.x - a.x
//   let ret2 = b.y - a.y
//   return  Math.sqrt(Math.pow(ret1,2) + Math.pow(ret2,2))
// }

// if (!(b || 0) ) { 객체를 0으로 표현하면 안됨, if문도 필요없음
//    return  Math.sqrt(Math.pow(a.x,2)+Math.pow(a.y,2)) // 의미없는 코드
// }
// }

//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14})) // 13 
//  console.log(getDistance({x: 3, y: 4})) // 5

// 선생님이 리팩토링한 코드

// function getDistance(a, b) {
//   a = a || {x: 0, y: 0} 
//   b = b || {x: 0, y: 0}
//   let ret1 = b.x - a.x
//   let ret2 = b.y - a.y
//   return  Math.sqrt(Math.pow(ret1,2) + Math.pow(ret2,2)) 
// }

//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14})) // 13 
//  console.log(getDistance({x: 3, y: 4})) // 5


// 문제 4

// solution 1 : find, includes를 사용? -> 배열이 아닌데 가능한가? 인자들에게 적용이 가능한건지
// 스프레드 연산자가 배열로 변경시켜줌
// 숫자세는건 변수 값 설정해서 반복문 돌려야함
// 함수를 너무 중첩시킨거 같다 

// function countDuplication(...args) {
//   // console.log(args) 배열로 변한거 확인
//   let index = 0                       
//     function countCat(animal){
//       if(animal == 'cat') index++
//  }
//     const findCat = args.filter(countCat)
//     return index - 1
// }


// // 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4


// 문제 5번

// 배열 내 숫자의 합 구하기 
// 문자열로 작성된 숫자도 합한다
// 조건문을 써야할거 같은데, 실수 인경우 '실수' 인 경우 sum
// 실수가 아닌경우? 부등호 등식 =, ==인 경우 숫자로 인식하지 않나?
// += 와 sum =0 설정이 낯설다 익숙해져야한다

// function add(...args){
//   // console.log(args)
//   let sum = 0
//   for (let arg of args) {
//     arg = parseFloat(arg) || 0 
//     sum += arg // sum = sum + arg
//   }
//    return sum
//   }


// // 테스트 케이스
// console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9

// 문제 6번

// function divider(...args) {
//   const newArr = []
//   for(let i =1; i < args.length -1 ; i++) {
//     // console.log(args)
//     if(args[0]) {newArr.push(args[i] / args[0])}
//      else {return args.splice(1,args.length-1)}
//   } return newArr
// }


// // // 테스트 케이스 
// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))

// 문제 7번

// const numbers = [121, 23, 345, 43, 59]


// pickIndex return 값은 index 값이 되어야 하고 numbers의 length-1 까지의 값이어야 한다
// index 는 0~4 
// len 은 10이어야 하고 
//  Math.floor(Math.random() * len) 이거는 <= 4 이어야 하는거 아닌가?

// Math.random() // 0 ~ 4
// function pickIndex(len){
//   return Math.floor(Math.random() * len)
// }

// function shuffle(arr){
//     // 구현하기
//     let randomIndex = null 
//     for(let i =0; i<arr.length -1; i++){
//       console.log(arr)
//       randomIndex = pickIndex(arr.length)
//       while(randomIndex === i){
//         randomIndex = pickIndex(arr.length)
//       }
//       // console.log(i, randomIndex)
//     temp = arr[i] 
//     arr[i] = arr[randomIndex]
//     arr[randomIndex] = temp
//     // console.log(temp)
// }
//    return numbers
// }

// console.log(shuffle(numbers))

//  a = 1 b = 2
// temp = a (임시값)
// a = b
// b = temp
// 이렇게 하면 값이 바뀐다고함