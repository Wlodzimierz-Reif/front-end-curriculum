// Importing the toy list so we can use the data
import toyData from "./static/data/toys.js";
import Toy from "./Toy.js";

let mostRecentCustomers = ['Liam', 'Shea', 'Craig', 'Mark', 'William'];

// looping through the employee data file and creating an instance of Person for each object in the data file
let toys = toyData.map(toy => {
  return new Toy(
    toy.brand,
    toy.name,
    toy.price,
    toy.Description,
    toy.minimumAgeRating,
    toy.freeShipping,
    toy.image
  );
});

export let recentBuyerListHTML = "";

// looping over array of names and passing each name into the generateRecentBuyerHTML
// for(let index = 0; index < mostRecentCustomers.length; index++){
//   generateRecentBuyerHTML(mostRecentCustomers[index]);
// }

// forEach is doing the same as the for loop above
mostRecentCustomers.forEach(generateRecentBuyerHTML);
$("aside > ul").html(recentBuyerListHTML);

renderToys(toys);

/**
 * Function to take in a name and output the html list entry for that name
 *
 * @param {string} customerName - the name of the recent buyer you want to display
 * @return {void}
 */
export function generateRecentBuyerHTML (customerName) {
  recentBuyerListHTML += `<li>${customerName}</li>`;
};

/**
 * Uses the filter iterator to check which toys are suitable from birth
 */
function filterBySuitableFromBirth() {
  const filteredToys = toys.filter(toy => {
    return toy.suitableFromBirth;
  });

  renderToys(filteredToys);
};

/**
 * Function to take in a name and output the html list entry for that name
 *
 * @param {Array} toysToRender - the name of the recent buyer you want to display
 * @return {void}
 */
export function renderToys(toysToRender) {
  $("#toys").empty();
  toysToRender.forEach((toy) => $("#toys").append(toy.render()));
};

// This file is module scoped due to type="module". So we add an event listener to look for button clicks
if (document.getElementById("suitable-from-birth-filter") != null) {
  document
    .getElementById("suitable-from-birth-filter")
    .addEventListener("click", filterBySuitableFromBirth);

  document
    .getElementById("all-filter")
    .addEventListener("click", () => renderToys(toys));
}