import Toy from "./Toy.js";
import toyData from "./static/data/toys.js";

test("A toy with minimum age rating of 0 should be suitable from birth", () => {
  let toy = new Toy(
    toyData[0].brand,
    toyData[0].name,
    toyData[0].price,
    toyData[0].Description,
    toyData[0].minimumAgeRating,
    toyData[0].freeShipping,
    toyData[0].image
  );
  expect(toy.suitableFromBirth).toBeTruthy();
});

test("A toy with minimum age rating above 0 should not be suitable from birth", () => {
  let toy = new Toy(
    toyData[2].brand,
    toyData[2].name,
    toyData[2].price,
    toyData[2].Description,
    toyData[2].minimumAgeRating,
    toyData[2].freeShipping,
    toyData[2].image
  );
  expect(toy.suitableFromBirth).toBeFalsy();
});
