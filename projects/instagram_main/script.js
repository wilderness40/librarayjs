let imgList = document.querySelectorAll('.middle li');
let hoverText = document.querySelectorAll('.hovertext');

imgList.forEach((img) => {
  img.addEventListener('mouseover', function (e) {
    // console.log(img.querySelector('.hovertext'))
    img.classList.add('on');
    img.querySelector('.hovertext').style.opacity = '1';
  });

  img.addEventListener('mouseleave', function (e) {
    // console.log(img)
    img.classList.remove('on');
    img.querySelector('.hovertext').style.opacity = '0';
  });
});

// let inputFocus = document.querySelector('.headerwrap form input');
// let searchSvg = document.querySelector('.searchbar svg');

// inputFocus.addEventListener('focusin', removeSearchSvg);
// function removeSearchSvg() {
//   searchSvg.style.opacity = '0';
// }

// inputFocus.addEventListener('focusout', addSearchSvg);
// function addSearchSvg() {
//   searchSvg.style.opacity = '1';
// }

let cardBtn = document.querySelector('.bottom span');
let cardSlider = document.querySelector('.bottom .cardslider');

cardBtn.addEventListener('click', function () {
  cardSlider.scrollBy({
    left: 700,
    behavior: 'smooth',
  });
});

const cards = document.querySelectorAll('.card');
for (let card of cards) {
  card.addEventListener('click', function (e) {
    this.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });
}
