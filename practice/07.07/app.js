// 문제 9번

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const rootDiv = document.getElementById('root')
const pricebBtn = document.querySelector('.sort-btns')




// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    // 구현하기

  const productList = document.createElement('div')
  productList.className ='product'
  const productImgBox = document.createElement('div')
  productImgBox.className = 'product-img'

  const productName = document.createElement('div')
  productName.className = 'product-name'
  productName.innerHTML = `${product.name} <br> (${product.price})`


  const productDescription = document.createElement('div')
  productDescription.className = 'product-description'
  productDescription.innerHTML = product.description

  const productImg = document.createElement('img')
  productImg.src = product.image_link

  productList.append(productImgBox, productName, productDescription )
  productImgBox.appendChild(productImg)
  
  return productList 
  // return productList 안해주면 아래 오류 나옴
  // TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(productList){
  // console.log(productList)
   rootDiv.appendChild(productList)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    // console.log(products)
    // 정렬하기 전에 원본 미리 저장해두기 
    const copyedArray = [...products]

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)

    
    function priceArrange(a,b){
      // console.log(a.price)
      if(parseInt(a.price) > parseInt(b.price) ) return 1
      if(parseInt(a.price) < parseInt(b.price)) return -1
      return 0
    }

    function arrange(e) { 
      //productList가 아니라 product 인가 productList는 배열이 아니다
      // product 도 배열이 아니라고 나오네
      copyedArray.sort(priceArrange)
      // console.log(products)

      rootDiv.innerHTML = ''
      products.forEach(function(product){
  
        const productList = buildElement(product) // 객체 -> 엘리먼트 생성
        // console.log(productList)
        displayProduct(productList)
      })
    }
    pricebBtn.addEventListener('click', arrange)

})


// click or toggle 로 진행 
// 클릭한 상태를 어떻게 구분할것인가? 
// 클릭할때마다 값/색/속성을 부여한다?
// 인덱스로 할수 있나? 
// 플래그?
// 처음 클릭시 가격이 낮은순으로 정렬
// 다시 클릭시 처음 화면 그대로 (이전 기능이 캔슬되는 개념?)
// return 0이 처음 그대로 아닌가? ><= 모든 부등호 조건에서 return을 0으로?
// return을 0으로 하면 이전화면으로 돌아가는것이 아니라 아무것도 동작하지 않게될듯
// return false?


//toggle은 작동도 안한다

