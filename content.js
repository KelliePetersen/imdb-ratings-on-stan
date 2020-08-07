document.body.style.border = "5px solid red";
const programDetails = document.querySelector(".program__details");
const ratingsContainer = document.createElement("ul");
programDetails.appendChild(ratingsContainer);

function getShowRatings() {
  let title = document.querySelector('.program__title--logo').alt;
  let data = fetchShowData(title);
  data.then(data => displayShowRatings(data.imdbRating));
}

async function fetchShowData(title) {
  let response = await fetch(`http://www.omdbapi.com/?apikey=436ad94b&t=${title}`);
  let data = await response.json();
  return data;
}

function displayShowRatings(imdbRating) {
  let listItem = document.createElement("li");
  let listContent = document.createTextNode(`${imdbRating}`);
  listItem.appendChild(listContent);
  ratingsContainer.appendChild(listItem);
}

document.addEventListener('click', getShowRatings);