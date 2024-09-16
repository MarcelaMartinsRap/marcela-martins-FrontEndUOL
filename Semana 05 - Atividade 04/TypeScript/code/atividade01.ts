interface Person {
  name: string;
  lastName: string;
  age: number;
  isOlderThanEighteen: boolean;
  favoriteFoods: string[];
}

class PersonClass implements Person {
  name: string;
  lastName: string;
  age: number;
  isOlderThanEighteen: boolean;
  favoriteFoods: string[];
  fullName: string;

  constructor(
    name: string,
    lastName: string,
    age: number,
    favoriteFoods: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isOlderThanEighteen = age >= 18;
    this.favoriteFoods = favoriteFoods;
    this.fullName = name + " " + lastName
  }

  setFullName() {
    this.fullName = `${this.name} ${this.lastName}`;
  }

  showUserData() {
    console.log(`Full Name: ${this.fullName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Favorite Foods: ${this.favoriteFoods.join(", ")}`);
  }
}

const person1 = new PersonClass("Marcela", "Martins", 25, ["Apple", "Chocolate"]);
person1.setFullName();
person1.showUserData();
