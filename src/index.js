// index.js

// Callbacks
// const handleClick = (ramen) => {
  // Add 

// };

const ramenImages = document.querySelectorAll('#ramen-menu img');
//shows the node list
function handleClick(ramen) {
  const detailImage = document.getElementById('detail-image');
  const nameElement = document.getElementById('detail-name');
  const restaurantElement = document.getElementById('detail-restaurant');
  const rating = document.getElementById('rating-display');
  const comment = document.getElementById('comment-display');

    detailImage.src = ramen.image;
    nameElement.textContent = ramen.name;
    restaurantElement.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;
};

const newRamenForm = document.getElementById('new-ramen')

function addSubmitListener (e) {
  e.preventDefault();

  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    // rImages = document.querySelector('#new-image')
    rating: e.target.rating.value,
// rating = document.querySelector('#new-rating')
    comment: e.target['new-comment'].value,
// comment = document.querySelector('#new-comment') none of these worked 
  };

  comRamen(newRamen); //so we can display ramens

  e.target.reset();
};

newRamenForm.addEventListener('submit', addSubmitListener)

// const displayRamens = () => {
fetch("http://localhost:3000/ramens")
.then(response => response.json()) //we have data parsed on line 14, this line is taking that data and providing it to us to use, via the bracket. 
.then(ramens => ramenData(ramens));

const ramenMenuDiv = document.querySelector("#ramen-menu")// we console log here to see the data, it has to be invoked from our console. 

function ramenData(ramens) {
  ramens.forEach(comRamen);
}

function comRamen(ramen) {
  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);

  ramenImage.addEventListener('click', () => handleClick(ramen));
};

document.addEventListener("DOMContentLoaded", (e) => {});

const main = () => {
  // Invoke displayRamens here 
  comRamen();
  // Invoke addSubmitListener here
  addSubmitListener();
};

// main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
