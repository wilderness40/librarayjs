// 문제 1번

// function pickRandomNumber(min, max){
//   return Math.floor( Math.random() * (max-min+1) ) + min 
// }

// function Tester (sleepTime, awakeTime, middleAwakeTime, tossAndTurn, deltaRatio) {
//   this.sleepTime = sleepTime
//   this.awakeTime = awakeTime
//   this.middleAwakeTime = middleAwakeTime
//   this.tossAndTurn = tossAndTurn
//   this.deltaRatio = deltaRatio
//   this.sleepSatisfaction = 0
// }

// Tester.prototype = {
// satisfaction() { 
//   this.sleepSatisfaction = this.deltaRatio / (this.sleepTime * this.awakeTime * this.middleAwakeTime * this.tossAndTurn)
// },

// get getSatisfaction() {return this.sleepSatisfaction} 
// }


// function creatTester() {
//   const newTesters = []
// for (let i=0; i<100; i++) {
//   const group = new Tester(
//     pickRandomNumber(1, 10),
//     pickRandomNumber(1, 10),
//     pickRandomNumber(1, 5),
//     pickRandomNumber(1, 10),
//     pickRandomNumber(0, 50)
//   )
//   newTesters.push(group)
// }     
// return newTesters
// }

// const groupA = creatTester()
// const groupB = creatTester()
// const groupC = creatTester()


// function countSatisfaction(group){ // function을 그룹마다 다르게 어떻게 적용하나 했는데 매개변수와 인자를 활용하면 되는 것이었음
//   let count = 0
//       for(let i = 0; i<100 ; i++){
//       group[i].satisfaction()
//     if(group[i].getSatisfaction > 0.37 && group[i].getSatisfaction  < 50) count++ 
// }
//   return count
// }

// // function을 그룹마다 다르게 어떻게 적용하나 했는데 매개변수와 인자를 활용하면 되는 것이었음
// const groupANum = countSatisfaction(groupA) 
// const groupBNum = countSatisfaction(groupB)
// const groupCNum = countSatisfaction(groupC)

// const maxNum = Math.max(groupANum, groupBNum, groupCNum)

// function showHighestGroup () {
// if (maxNum === groupANum) return alert(`GroupA had the highest level of satisfaction. \nNumber of people satisfied : ${groupANum}`)
// if (maxNum === groupBNum) return alert(`GroupB had the highest level of satisfaction. \nNumber of people satisfied : ${groupBNum}`)
// if (maxNum === groupCNum) return alert(`GroupC had the highest level of satisfaction. \nNumber of people satisfied : ${groupCNum}`)
// }

// showHighestGroup()




// 문제 2번

// function Station (name, latitude, longitude) {
//   this.name = name
//   this.latitude = latitude
//   this.longitude = longitude
// }

// Station.prototype = {
//   calculateDistance(station2) { //인자값에 도착지를 넣는 것을 생각하지 못했다
// // 출발지
// const lat1 = this.latitude;
// const lon1 = this.longitude;

// // 목적지 
// const lat2 = station2.latitude;
// const lon2 = station2.longitude;


// const R = 6371e3; // 지구의 반지름 (meter)

// // 좌표를 라디안 단위로 변환
// // 첨자는 자바스크립트에서 인식하지 못함
// const φ1 = lat1 * Math.PI / 180;
// const φ2 = lat2 * Math.PI / 180;
// const Δφ = (lat2 - lat1) * Math.PI / 180;
// const Δλ = (lon2 - lon1) * Math.PI / 180;

// const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
// 		  Math.cos(φ1) * Math.cos(φ2) *
//           Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
// const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

// const d = R * c; // meter

// return d
// },
//   faresAccodingToDistance(distance) {
//    return  Math.ceil(distance/1000) * 100 //return 뺴먹었었음
//   }
// }

// const seoul= new Station (
//   '서울역',
//   '37.55620110026294',
//   '126.97223116703012'
//   )

// const daejeon= new Station (
//   '대전역',
//   '36.332516127741',
//   '127.43421099777726'
// ) 

// const daegu= new Station (
//   '동대구역',
//   '35.88049128950934',
//   '128.62837657353532'
// )

// const busan= new Station (
//   '부산역',
//   '35.116613680508806',
//   '129.04009077373016'
// )

// console.log(`서울-대구 운임 : ${seoul.faresAccodingToDistance(seoul.calculateDistance(daegu))}원`)
// console.log(`서울-대전 운임 : ${seoul.faresAccodingToDistance(seoul.calculateDistance(daejeon))}원`)
// console.log(`서울-부산 운임 : ${seoul.faresAccodingToDistance(seoul.calculateDistance(busan))}원`)
// console.log(`대전-부산 운임 : ${daejeon.faresAccodingToDistance(daejeon.calculateDistance(busan))}원`)
// console.log(`대전-대구 운임 : ${daejeon.faresAccodingToDistance(daejeon.calculateDistance(daegu))}원`)
// console.log(`대구-부산 운임 : ${daegu.faresAccodingToDistance(daegu.calculateDistance(busan))}원`)



// 문제3번



// const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
// const hairTypes = ['curly', 'straight', 'wavy', 'coily']
// const glasses = [true, false]
// const heights = [150, 160, 170, 180, 190, 200]
// const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

// function pickRandomNumber(min, max){
//   return Math.floor( Math.random() * (max-min+1) ) + min 
// }



// function User(hairColors, hairTypes, glasses, heights, weights){
//   this.hairColors = hairColors
//   this.hairTypes = hairTypes
//   this.glasses = glasses
//   this.heights = heights
//   this.weights = weights
// }

// const newArr = []

// for (let i = 0; i < 10000; i++) {
//   const person = new User(
//     hairColors[pickRandomNumber(0, hairColors.length-1)], 
//     hairTypes[pickRandomNumber(0, hairTypes.length-1)],
//     glasses[pickRandomNumber(0, glasses.length-1)],
//     heights[pickRandomNumber(0, heights.length-1)],
//     weights[pickRandomNumber(0, weights.length-1)]
//     )
//    newArr.push(person)
// }

// const result = {}
// newArr.forEach(function(person){
//   sortByType(result, person.hairColors)
//   sortByType(result, person.hairTypes)
//   sortByType(result, person.heights)
// })


// function sortByType(result, type){
//   if(!result[type]) result[type] = 0 //result['black']
//   result[type]++
// }

// console.log(result)


// 문제 1

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


// function arrange(a, b){
//   return a.city > b.city ?  1 : -1
// }
// const city = friends.sort(arrange)
// // console.log(city)
// const seoulFriends = city.slice(5,10).sort((a,b)=>{return a.age-b.age})
// console.log(seoulFriends)
// console.log(seoulFriends)

// 문제 2번

// const rootDiv = document.getElementById('root')

// const lyrics = `
// Don't, don't worry 'bout \n
// Don't worry \n
// Don't worry \n
// Don't, don't worry 'bout me \n
// 오지랖 떨지 말고 신경 꺼 \n
// 온 세상이 날 등져도 I don't give a fuck \n
// God is watchin' over me 나 죽을 일 없어 \n
// 내 걱정은 세상에서 제일 쓸데없는 짓 \n
// 부정적인 shit, man I ain't got time \n
// 썸머소닉 to 코첼라, 글라스톤베리가 다음 \n
// 일상이 축제니까 감사하기도 바빠 \n
// Middle finger to the Devil, stop fuckin' up my vibe! \n
// 영화처럼 살았네 \n
// 역경이 상대역인데 웃으며 환영해 \n
// 그 정도는 돼야 내가 인생 연기를 해주잖냐 \n
// 보여줘야지, 사방이 아역들인데 \n
// 애들이 배우잖아 \n
// 내 혼을 베어다가 아낌없이 준 내 아티스트리 \n
// 다 남을 깎아내릴 때 난 나를 깎아 나눴지 \n
// 'Cause I am Groot motherfucker \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n 
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks \n
// 신경써줘서 고마워 \n
// 아가미 달린 시키 알아서 헤엄 치니 \n
// Take care of yourself \n
// 치킨 다리 먼저 겟할 걱정이나 해 \n
// 모지리 이미지야 이리 잘하니 zip your lips huh? \n
// 대장인 척 해도 소화 못해 거기서 쳇기 쳇기 \n
// 쉬운 게 아니야, 무대는 'bout your 객기 \n
// 체크해 motherfuckers, my lyrics \n
// Motherfucker 만 써도 이젠 혐이라 하는 시대, shit \n
// Rhyme에 R도 모르는 대중은 프로듀서가 됐고 \n
// 농사짓는 울 삼촌은 거의 엔터 제작 대표 \n
// 조카는 음평가 태도 \n
// 내가 니 안줏거리지만 내가 느그 상사 느그 선생 아니듯이 \n
// 느그들이 누굴 평가하고 하면 띠꺼워 \n
// 내 사생활이 궁금하면 니가 내 엄마해 새꺄 알겠어? \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks, ya \n
// 경쟁은 관심 밖, 돌린 눈과 귀 \n
// 틈만 나면 찾고 있네, 다음 휴가지 \n
// 나이 들어 보니까 인생은 주관식 \n
// 남 보기보다 중요해, 내 삶이 둔 가치 \n
// 고이 무렵부터 내 갈 길을 걸어 \n
// 나도 안 한 내 걱정을 해준 분들 여럿 \n
// 덕분에 내 할 일에만 매진한 결과 \n
// 난 이제 돈과 시간 모두 몇 배를 더 벌어 \n
// 너 할 일 해, 시간이 돈인데 \n
// 다 먹고 살만한가 봐? 두 손 놀리네 \n
// 날 한 방 먹일 생각이면 좀 더 고민해 \n
// 대식가인 내겐 먹어봐야 겨우 요기인데 \n
// 난 물먹어도 절망 안에 배영 \n
// 잠수타도 14년째 곡이 배를 채워 \n
// 불통보다 소통이 더 유행이니까 \n
// 다 들어 줄게, 불만 있는 놈들 먼저 줄부터 세워 (걱정하지 말아요) \n
// 야야 난 first class 양아치에 third class 연예인 \n
// 내 Hollywood style 연애는 엄마의 스트레스 원인 \n
// 삶은 계속되는 이별여행, 쉴틈없이 나는 꺼내 \n
// 이번 애인은 의사였으면 해, 정신병원에 \n
// 틈만 나면 한 눈 팔아, 나는 오급 장애죠 \n
// 나의 불행은 너의 행복, 그래 맘껏 즐겨줘 \n
// 망막 기증까진 오바야, 날 그만 걱정해줘 \n
// 나는 저 멀리 보고 살아, 한쪽으로도 \n
// 힙합씬은 여전히 내겐 오백의 삼십 사이즈 \n
// 내 영혼이 살기엔 너무 좆만해서 탄식 하 \n
// 나는 오로지 나의 존망만이 관심사 \n
// 욕을 존나 쳐먹어도 찌지 않아, 망신살 \n
// "출근 안하는 CEO", "허슬 안하는 랩퍼" \n
// "내 거품 속에서 목욕하는 그녀들은 왜 예뻐?" \n
// 성실한 이름들 사이에 이제 나는 못 껴 \n
// 난 시간에 쫒겨 살해당한 내 시체를 자주 목격 \n
// 앨범은 내 때가 되면 내, 비난은 발매가 되면 해 \n
// 기다려주는 팬들에게 미안해 기분 개같았는데 \n
// 돈도 좆도 안되는 대체 왜 너네가 negative? \n
// 니 오빠 똥꼬나 더 긁어줘라 fuck your magnetic \n
// 백날 씨부려대봤자 내 입만 아픔 \n
// 에픽 앨범에 난 똥을 싸질러놨구 \n
// 이건 내가 예전에 깠던 Born Hater Part 2 \n
// 일동 기립 박수 안 칠거면 내 얼굴에 칵 투 \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks \n
// You get one life \n
// 나한테 낭비하지 마라 \n
// Can I live my life? \n
// Let me live it how I wanna \n
// 내 걱정은 no thanks (내 걱정은 no thanks) \n
// 내 걱정은 no thanks (내 걱정은 no thanks) \n
// 내 걱정은 no thanks (thank you) \n
// I am
// `

// // 구현하기
// // 타입이 무엇인지 확인한다 - string
// // string 타입을 배열로 변경한다 - 스프레드 연산자 이용 , split(), array.from(), Array.isarray()
// // 특정 단어 찾기 - includes, indexOf, search, split
// // 결론 : split(), join(), 메서드체인 활용
// const cleanLyrics = lyrics.split('똥').join('💩').split('shit').join('❤️')

// console.log(cleanLyrics)

// rootDiv.innerHTML = cleanLyrics


// 문제 3번

// const novel = `
// Sherlock Holmes she is always the
// woman. I have seldom heard him mention her under any other name. In his
// eyes she eclipses and predominates the
// whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and
// that one particularly, were abhorrent to his cold,
// precise but admirably balanced mind. He was, I
// take it, the most perfect reasoning and observing
// machine that the world has seen, but as a lover he
// would have placed himself in a false position. He
// never spoke of the softer passions, save with a gibe
// and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s
// motives and actions. But for the trained reasoner
// to admit such intrusions into his own delicate and
// finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all
// his mental results. Grit in a sensitive instrument, or
// a crack in one of his own high-power lenses, would
// not be more disturbing than a strong emotion in
// a nature such as his. And yet there was but one
// woman to him, and that woman was the late Irene
// Adler, of dubious and questionable memory.
// I had seen little of Holmes lately. My marriage
// had drifted us away from each other. My own
// complete happiness, and the home-centred interests which rise up around the man who first finds
// himself master of his own establishment, were sufficient to absorb all my attention, while Holmes,
// who loathed every form of society with his whole
// Bohemian soul, remained in our lodgings in Baker
// Street, buried among his old books, and alternating
// from week to week between cocaine and ambition,
// the drowsiness of the drug, and the fierce energy of
// his own keen nature. He was still, as ever, deeply
// attracted by the study of crime, and occupied his
// immense faculties and extraordinary powers of observation in following out those clues, and clearing
// up those mysteries which had been abandoned as
// hopeless by the official police. From time to time
// I heard some vague account of his doings: of his
// summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of
// the Atkinson brothers at Trincomalee, and finally
// of the mission which he had accomplished so delicately and successfully for the reigning family of
// Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of
// the daily press, I knew little of my former friend
// and companion.
// `
// // 1. 본문을 소문자로 변경, split 으로 철자단위로 구분한다 (문자열 -> 배열)
// // 2. 핊터로 이스케이스시퀀스와 특수문자를 제외한다 (배열 -> 배열)
// // 3. 특수문자는 문자열인데 ? 배열에서 문자열을 뺼수 있나?
// // 4. 특수문자를 포함하고 있는것을 어떻게 제외하지? includes? -> includes(specialCharacters) 로는 안됨
// // 5. 배열내에서 걸러진 철자들 개수세기

// const classified = {}
// const specialCharacters = '`~!@#$%^&*()-_=+|\<>,.?/:;\'"—’'
// const alphabetFrequency = []
// // const special = specialCharacters.split('')


// const splitWord = novel.toLowerCase().split('') // 소문자로 전환
// function filterWord(word){
//     if(specialCharacters.includes(word)) return false 
//     // 나는 word.includes(specialCharaters)로 작성했었음, 그러나 speicialCharacters가 장문의 문자열 이고 word가 한글자 이기 떄문에 거꾸로 하는 것이 맞다
//     // 문자열은 배열로 인식이 되기 떄문에 includes 바로 사용 가능하다
//     // 안걸러진 값들이 return 되지않고 밑으로 내려간다
//     else if((word=='\n' || word == ' ')) return false // 안걸러진 값들이 return 되지않고 밑으로 내려간다
//     else return true // 
// }
// // false는 걸러낸다 , true는 포함시킨다 (새로운 배열에 담겠다)
// const filteredWord = splitWord.filter(filterWord)

// // console.log(result)


// // 배열 내에서 철자들의 개수세기를 쉽게하기 위해서는 객체로 만들어서
// // 객체 속성값을 카운트 해주면 된다
// // 배열을 객체로 변경하기 위해서는 forEach , ...스프레드 연산자
// // forEach는 배열을 객체로 바꿔주지 않는다 그냥 스트링을 하나씩 풀어준다 
// // 빈 객체를 만들어서 그 뒤에 속성값으로 붙이는 작업에서 객체로 바뀌는 것이다


// filteredWord.forEach(function(frequency){ // frequency : 캐릭터 
//     // console.log(frequency)
//     if(!classified['a'])  classified[frequency] =0  //classsified가 뭐지?
//     classified[frequency]++  // 더해서 나온 숫자값은 뭐를 더해서 나온값이지? 속성? 개수는 무엇을 세서 카운팅 한거지?
//     // a++는 a+a가 아니라 a=a+1 or a+=a 이다, classified[frequency]+classified[frequency] 이게 아니다
// })
// // console.log(classified)
// // console.log(classified['a']) // 결과값 : 153, 이 값은 무엇을 의미하는가?, 153번 인덱스의 a? => a속성을 가진게 153개다, 그것이 값이 된것이다
// // 배열과 객체를 헷갈려 하는것 같다, 인덱스 값은 배열, 속성은 객체?
// // 객체는 반드시 이름과 값으로 구성이 되어야 하나? => 그렇다
// // 그럼 배열을 스프레드 연산자로 객체로 바꾸면 속성과 키값이 어떻게 되는거지? => 밑에 기재
// // 자바스크립트 배열의 값은 따옴표가 필요하다 (숫자 제외)
// const checkThink = ['a', 'b', 'c', 'd', 'e'] 
// // console.log(checkThink)
// const spredTest = {...checkThink} // 배열을 객체로 바꾸면 속성이 별도로 없어도 속성(key)에 인덱스 값이 부여가 된다..!


// // // console.log(checkThink)
// // console.log(typeof spredTest)

// // forEach는 배열내의 원시값을 가져오는 건가?, 배열 내의 객체를 가져오는 것?



// // 객체 관련 지식 : 생성자 함수, for in 문, this, 스프레드 연산자는 객체 / 배열 둘다사용


// // 배열안의 배열, 객체 안의 객체 조회 및 카운트는 어떻게??
// const testArr = ['a', 'b', 'c', 'd', {a:'kim', b: 34, c: 'what'}, ['1', '3','5', 'z', 'x', 'y', 'a', 'b']]
// const testObj = {}


// testArr.forEach(sortThis)

const addBtn = document.getElementById('user-comment-add')
const userInput = document.getElementById('user-comment-input')
const UserComments = document.getElementById('user-comments')
const newCommentArr = []
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']

// 마운트 작업

function buildElement(comment){ 
    const commentBasket = document.createElement('div')
    commentBasket.className = 'comment'
    commentBasket.innerHTML = comment
    return commentBasket // DOM 객체
}


// 디스플레이 작업


function displayComments (comments) {
    UserComments.innerHTML = ''
    comments.forEach(function(comment){
        const commentElement = buildElement(comment)
        UserComments.appendChild(commentElement)
    })
    
}

// 1. 댓글을 받아서 스페이스로 끊기
// 2. 반복문으로 음절로 끊은 단어를 반복적으로 조회하기
// 3. 댓글의 한단어에 대하여 insults 배열에 포함되어 있는지 검사

// 4. insults 배열에 포함되어 있으면 아이콘으로 교체
// 5. insults 배열에 포함되어 있지 않으면 단어 자체를 반환하기 

// 오류
// 1. 띄어쓰기도 욕설로 인식한다. -> 해결
// 2. 문장 가운데 욕을 쓰면 모든 문장이 아이콘으로 변한다 -> 띄어쓰기 안하면 그렇게 됨, 띄어쓰기하면 해결됨

function addComments() {
        if(userInput.value.trim() !== '')  {
            
         const splitWord = userInput.value.split(' ')
         const finalWord = splitWord.map(searchInsult => {
             
                for(insult of insults) {
                    if(searchInsult.includes(insult)) {
                        console.log(searchInsult.split(' '))
                        console.log(insult)
                        return '😊' 
           } 
              } return searchInsult
                            
         })       
    
          newCommentArr.push(finalWord.join(' '))
          displayComments (newCommentArr)
         userInput.value = ''
      
    }else alert('There is no comments, Please write down your opinion') 
    }

   
addBtn.addEventListener('click', addComments)


// 오류 발견
// 1. 띄어쓰기도 욕설로 인식한다
// 2. finalWord object로 배열에 넣으면 띄어쓰기시 콤마가 들어간다
// 3. 스트링으로 변환해서 넣으면 한칸 띄어쓰기는 인식 못하고 그 이상은 스페이스 공간을 욕설로 인식한다
// 4. 욕을 붙여서 쓰면 못찼는다

// function addComments() {
//     if(userInput.value !== '')  {
        
//      const splitWord = userInput.value.split(' ')
//      const finalWord = splitWord.map(searchInsult => {
//          if(insults.join('').includes(searchInsult)) {
//           return '😊' 
//        } else return searchInsult
//         })

//       newCommentArr.push(finalWord)
//       displayComments (newCommentArr)
//      userInput.value = ''
//   }  else alert('There is no comments, Please write down your opinion') 
// }