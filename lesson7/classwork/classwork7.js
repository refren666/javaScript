// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}km на годину`)
    }
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function(newValue) {
        this.year = newValue;
    }
    this.addDriver = function(driver) {
        this.driver = driver;
    }
}

let car = new Car('Hyundai Genesis', 'Korea', '2016', 300, 3.8);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2017);
car.addDriver({ name: 'Yarik', credo: 'vadila', age: undefined });
console.log(car.driver);*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function() {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed}km на годину`);
        }
        this.info = function() {
            for (let key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key} - ${this[key]}`);
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function(driver) {
            this.driver = driver;
        }
    }
}

let car2 = new Car('BMW M4', 'Germany', 2015, 320, 3.0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
// console.log(car2.maxSpeed);
car2.changeYear(2017);
// console.log(car2.year);
car2.addDriver({name: 'Peter', surname: 'Parker'});
console.log(car2)*/

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
/*class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Olya', 20, 38),
    new Cinderella('Martha', 24, 39),
    new Cinderella('Olena', 19, 37),
    new Cinderella('Katya', 21, 41),
    new Cinderella('Tanya', 22, 40),
    new Cinderella('Yulia', 22, 36),
    new Cinderella('Lisa', 18, 37),
    new Cinderella('Nastya', 22, 35),
    new Cinderella('Anna', 23, 39),
    new Cinderella('Natalya', 21, 37)
]

class Prince {
    name = 'Ivan';
    age = 23;
    foundShoe = 40;
}

const prince = new Prince()

for (let i = 0; i < cinderellas.length; i++) {
    const cinderella = cinderellas[i];
    if (cinderella.footSize === prince.foundShoe) {
        console.log(`Принцу ${prince.name} підходить попелюшка під іменем ${cinderella.name} з розміром ноги ${cinderella.footSize}`);
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findCinderella = cinderellas.find(girl => girl.footSize === prince.foundShoe);
console.log(findCinderella)*/
