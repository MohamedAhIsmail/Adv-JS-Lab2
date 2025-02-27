class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  teach(subject) {
    return `${this.name} is now teaching ${subject}`;
  }
}

let teacher = new Teacher("Mohamed");
console.log(teacher.teach("Arabic"));

class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  static countCall = 0;
  constructor(wheels = 2, speed = "Fast Enough") {
    super(wheels, speed);
    Bike.countCall++;
  }
  static incrementCount() {
    return `${this.countCall}`;
  }
}

let bikeOne = new Bike();
let bikeTwo = new Bike();
let bikeThree = new Bike();
let bikeFour = new Bike();
let bikeFive = new Bike();

console.log(Bike.incrementCount());
