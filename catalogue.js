document.body.style.border = "5px solid green";
let container = document.querySelector('.home__feeds');

function getMovieTitleOnHover() {
  let items = document.querySelector('.programs__item');
  console.log(items);
}

container.addEventListener('mouseover', event => {
  if (event.target.tagName == "IMG") {
    console.log(event.target.alt);
  }
});