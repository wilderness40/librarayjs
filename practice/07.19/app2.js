// 카드이미지 상위 div card h-100
// 카드 타이틀, 텍스트 상위 div card-body

const cardImg = document.querySelectorAll('.card-body')
const cardText = document.querySelectorAll('.card-footer')
const movieBtn = document.querySelector('.px-4')
const recipeBtn = document.querySelector('.px-3')
const movieSection = document.querySelector('.movies')
const recipeSection = document.querySelector('.recipes')
const foodRecipe = document.querySelectorAll('.food-Img')
const recipeText = document.querySelectorAll('.recipe-text')


const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: { from: "0", size: "20", tags: "under_30_minutes" },
  headers: {
    "x-rapidapi-host": "tasty.p.rapidapi.com",
    "x-rapidapi-key": "642d501214msh97213792c7eb4e4p166eb1jsnec777296332b"
  }
}
// fetch("https://tasty.p.rapidapi.com/recipes/list&quot;, options)

let promise = fetch('https://yts.mx/api/v2/list_movies.json')

// movie.json에 요청을 보낸다.
fetch('https://yts.mx/api/v2/list_movies.json')
// 응답받은 내용을 json으로 불러온다.
.then(response => response.json())
// 레시피.json 요청을 보낸다
.then(movies => {
  fetch("https://tasty.p.rapidapi.com/recipes/list", options)
  .then(response => response.json())
  .then(recipes => {
    console.log(recipes)
    // movies 마운트 & display
    for(let i=0; i < cardImg.length; i++) {
    let moviePoster = document.createElement('img')
    moviePoster.className = 'card-img-top'
    moviePoster.src = movies.data.movies[i].medium_cover_image

    let titleH5 = document.createElement('h5')
    titleH5.className = 'card-title'
    titleH5.innerHTML = movies.data.movies[i].title
    
    let genresP = document.createElement('p')
    genresP.className = 'card-text'
    genresP.innerHTML = movies.data.movies[i].genres.join(' ')
    
    cardImg[i].appendChild(moviePoster)
    cardText[i].appendChild(titleH5)
    cardText[i].appendChild(genresP)
  }

  //recipe 마운트 & display

for (let i = 0; i < foodRecipe.length; i++) {
  let foodImg = document.createElement('img')
  foodImg.src = recipes.results[i].thumbnail_url
  foodImg.className = 'img-edit'

  let foodName = document.createElement('h5')
  foodName.innerHTML = recipes.results[i].name

  let foodCalorie = document.createElement('p')
  foodCalorie.innerHTML = `This food Calories : ${recipes.results[i].nutrition.calories}kcal <br>
  User Ratings : <i>${Math.floor(recipes.results[i].user_ratings.score * 100)}</i> out of 100`
  console.log(recipes.results[i].original_video_url)

  foodRecipe[i].appendChild(foodImg)
  recipeText[i].append(foodName,foodCalorie)
}

})
})

function showMoives(){
  movieSection.style.display='block'
  recipeSection.style.display='none'
}
function showRecipe(){
    movieSection.style.display='none'
    recipeSection.style.display='block'
}


movieBtn.addEventListener('click', showMoives)
recipeBtn.addEventListener('click', showRecipe)