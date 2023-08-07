
const toggleBtn = document.querySelector('.parent>button')
const paragraph = document.querySelector('.parent>.summary')
paragraph.classList.add('contents')


toggleBtn.addEventListener('click', function () {
  paragraph.classList.toggle('contents')
})

