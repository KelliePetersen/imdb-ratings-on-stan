document.body.style.border = "5px solid red";

function getMovieTitle() {
  let title = document.querySelector('.program__title--logo').alt;
  console.log(title);
}

document.addEventListener('click', getMovieTitle);