'use strict';
'use strict';

// Produces a person object
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // return this;
}

const morris = new Person('Morris', 1976);
const jonas = new Person('Jonas', 1992);
const matilda = new Person('Matilda', 1975);
const jack = new Person('Jack', 2017);
// Prototypes

Person.prototype.calcAge = function() {
    return new Date().getFullYear() - this.birthYear;
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    console.log(`Hello class, my name is ${this.firstName}. I am studying ${this.course}. I am ${this.calcAge()} years old!`);
}

console.log(jack.calcAge());

const mike = new Student('Mike', 2000, 'Computer Science');

mike.introduce();




///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car1 = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car1.prototype.accelerate = function() {
    this.speed += 10;
    this.displaySpeed();
}

Car1.prototype.brake = function() {
    this.speed -= 5;
    this.displaySpeed();
}

Car1.prototype.displaySpeed = function() {
    console.log(`${this.make} is traveling at ${this.speed} km/h`);
}

const bmw1 = new Car1('BMW', 120);

const mercedes1 = new Car1('Mercedes', 95);


class PersonClass {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.name}!`)
    }

    get age() {
        return this.calcAge();
    }
}

class StudentClass extends PersonClass {
    constructor(name, birthYear, course) {
        super(name, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`Hello class, my name is ${this.name}. I am studying ${this.course}. I am ${this.calcAge()} years old!`);
    }

    calcAge() {
        console.log(`I am ${new Date().getFullYear() - this.birthYear} years old, but as a student I feel more like ${new Date().getFullYear() - this.birthYear + 10}`)
    }
}

const martha = new StudentClass('Martha Jones', 2012, 'Computer Science');

martha.introduce();

const rachel = new PersonClass('Jessica', 1996);

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }

}

console.log(account.latest);

const PersonProto = {
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();


///////////////////////////////////////
// Coding Challenge #2

// DO the following with ES6 class structure
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

class Car {
    make = '';
    speed = 0;
    
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        this.displaySpeed();
    }

    brake = function() {
        this.speed -= 5;
        this.displaySpeed();
    }

    displaySpeed = function() {
        console.log(`${this.make} is traveling at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }



}

const bmw = new Car('BMW', 120);

const mercedes = new Car('Mercedes', 95);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }
    accelerate() {
        this.speed += 10;
        this.charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge} %`);
        this.displaySpeed();
    }

}

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();

tesla.brake();
tesla.brake();
tesla.accelerate();

let arr = [1,2,3,4];

let result = 0;

for (let number of arr) {
    result *= number;
}
console.log(result);

class Account {
    _movements = [];
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.locale = navigator.language;

        console.warn('Thanks for opening your account');
    }

    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
        return this;
    }

    withdraw(val) {
        return this.deposit(-val);
    }

    approveLoan() {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan()) {
            return this.deposit(val);
        }
    }

}

const account1 = new Account('Jonas', "EUR", 1111);

account1.deposit(4340);
account1.withdraw(34);



account1.deposit(400).deposit(433).withdraw(43).requestLoan(1000);
console.log(account1.getMovements());
