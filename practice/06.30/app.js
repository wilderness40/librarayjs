// let,const : 블록스코프
// 일반적으로는 재정의를 못하지만 블록스코프 안에서는 재정의 가능하다

// 단락평가
// 함수나 코드블럭에서 a값이 없는 경우 기본값을 설정


// for ~ of : 배열에서 하나의 element를 순서대로 읽어와서 반복적으로 처리를 한다.

// let numbers = [10,20,30,40,50]

for (let number of numbers) {
  console.log(number)
}

const doggy = {
  name : '멍멍이',
  sound : '멍멍',
  age : 2
}
// 객체 -> 배열로 변환 : 프로퍼티, 값의 쌍을 반환 
// 결과 : [[name: '멍멍이'], [sound: '멍멍'], [age:'2']]
console.log(Object.entries(doggy))

//객체 -> 배열 : 프로퍼티 이름만 추출해서 반환
console.log(Object.keys(doggy))

//객체 -> 배열 : 값만 추출해서 반환
console.log(Object.values(doggy))

//for ~ in

for(let key in doggy) {
  console.log(`${key}:${doggy[key]}`)
}

//반복문 : 배열 값을 조회할 때 (for ~ of) 을 사용
//객체의 값을 조회할때는 (for ~ in) 을 사용한다

/*
while (조건) {
 코드실행  
} 
*/

// 반복문이 조건을 항상 만족하면 끝나지 않고 무한루프에 빠지게 됨
// 무한루프에 빠지면 다음 코드가 실행이 되지 않음
/* let i = 11
while (i > 10) {
  console.log(i);
  i++ //while은 증감문을 코드블록 내부에 적어줘야한다
} */

// 반복문과 continue break

for(let i = 0 ; i < 10; i++) {
  if(i === 2) continue //다음 조건을 검사함
  console.log(i) // continue가 실행되면 이 구문은 실행되지 않음, 바로 증감으로 넘어감
  if(i === 5) break
}
// 2에서 continue가 되므로 2는 출력되지 않고 5에서 break되며 구문이 종료됨
// 출력값은 0,1,3,4,5



