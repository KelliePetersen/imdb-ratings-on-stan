document.body.style.border = "5px solid red";

function getMovieTitle() {
  let title = document.querySelector('.program__title--logo').alt;
  console.log(title);
}

async function fetchShowData(title) {
  let response = await fetch(`http://www.omdbapi.com/?apikey=436ad94b&t=${title}`);
  let data = await response.json();
  return data;
}

document.addEventListener('click', getMovieTitle);