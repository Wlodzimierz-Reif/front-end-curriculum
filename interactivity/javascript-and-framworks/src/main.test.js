import { renderToys } from './main.js';
import Toy from "./Toy.js";
import toyData from "./static/data/toys.js";

test("renderToys should insert Freddie into the DOM", () => {

  let toy = new Toy(
    toyData[0].brand,
    toyData[0].name,
    toyData[0].price,
    toyData[0].Description,
    toyData[0].minimumAgeRating,
    toyData[0].freeShipping,
    toyData[0].image
  );
  renderToys([toy]);

  // console.log(document.body.innerHTML);
  // console.log($("#toys").text();

  expect($("#toys").text()).toEqual(expect.stringContaining(toyData[0].name));
});