const contents = document.querySelectorAll('.contents')

function startAnimation(){
  for (const content of contents){
    console.log(content.getBoundingClientRect().top)
    if(!content.classList.contains('show') && content.getBoundingClientRect().top < 200){
      content.classList.add('show')
    }
  }
}

window.addEventListener('scroll', startAnimation)