//Creating the Toy class so we can have a common set of attributes and methods for each toy / shop item
export default class Toy {
  constructor(
    brand,
    name,
    price,
    description,
    minimumAgeRating,
    freeShipping,
    image
  ) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.description = description;
    this.minimumAgeRating = minimumAgeRating;
    this.freeShipping = freeShipping;
    this.image = image;
  }

  // We can use getter and setter keywords to have methods that can be called like properties
  get fullProductName() {
    return this.brand + " - " + this.name;
  }

  get suitableFromBirth() {
    return this.minimumAgeRating === 0;
  }

  // A class method that can be used by calling .render() on the class instance
  render() {
    let suitableFromBirthText = "";
    if (this.suitableFromBirth) {
      suitableFromBirthText = "<p>Suitable from birth</p>";
    }
    return `<section class="toy">
    <img src="static/images/${this.image}" />
    <h2>${this.fullProductName}</h2>
    <p><i class="fas fa-pound-sign margin-right-4"></i>8.99</p>
    <p class="description">${this.description}</p>
    ${suitableFromBirthText}
    <button>Buy now!</button>
    </section>`;
  }
}