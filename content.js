document.body.style.border = "5px solid red";
let programDetails = document.querySelector(".program__details");
var ratingsContainer = document.createElement("ul");
programDetails.appendChild(ratingsContainer);

function getShowRatings() {
  let title = document.querySelector('.program__title--logo').alt;
  let data = fetchShowData(title);
  data.then(data => console.log(data.imdbRating));
}

async function fetchShowData(title) {
  let response = await fetch(`http://www.omdbapi.com/?apikey=436ad94b&t=${title}`);
  let data = await response.json();
  return data;
}

document.addEventListener('click', getShowRatings);