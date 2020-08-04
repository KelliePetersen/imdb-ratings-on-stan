document.body.style.border = "5px solid green";
let container = document.querySelector('.home__feeds');

container.addEventListener('mouseover', event => {
  if (event.target.tagName == "IMG") {
    console.log(event.target.alt);
    let newData = fetchShowData(event.target.alt);
    newData.then(data => console.log(data.imdbRating));
  }
});

async function fetchShowData(title) {
  let response = await fetch(`http://www.omdbapi.com/?apikey=436ad94b&t=${title}`);
  let data = await response.json();
  return data;
}