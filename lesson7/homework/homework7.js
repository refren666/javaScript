// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
/*function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(1, 'Vasya', 'Vasin', 'vasya@gmail.com', '+380-98-555-42-22');
const user2 = new User(2, 'Oleg', 'Sanchez', 'oleg@gmail.com', '+380-98-666-42-22');
const user3 = new User(3, 'Katya', 'Smith', 'kate@gmail.com', '+380-98-777-42-22');
const user4 = new User(4, 'Olya', 'Hemilton', 'olka@gmail.com', '+380-98-888-42-22');
const user5 = new User(5, 'Vova', 'Doe', 'vovka@gmail.com', '+380-98-999-42-22');
const user6 = new User(6, 'Taras', 'Simpson', 'taras@gmail.com', '+380-98-000-42-22');
const user7 = new User(7, 'Denys', 'Griffin', 'den@gmail.com', '+380-98-222-42-22');
const user8 = new User(8, 'Martha', 'Jordan', 'martha@gmail.com', '+380-98-111-42-22');
const user9 = new User(9, 'Nastya', 'Benitez', 'nastya@gmail.com', '+380-98-333-42-22');
const user10 = new User(10, 'Igor', 'Pushkin', 'igor@gmail.com', '+380-98-444-42-22');

const users = [user2, user1, user5, user3, user4, user9, user10, user8, user6, user7];

console.log(users);*/

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
/*const equalIdFilter = users.filter(user => user.id % 2 === 0);
console.log(equalIdFilter);*/

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
/*const sortedById = users.sort((a, b) => a.id - b.id);
console.log(sortedById);*/

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
/*class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(1, 'Vasya', 'Vasin', 'vasya@gmail.com', '+380-98-555-42-22',
    ['Xbox360', 'Headphones', 'Microphone']);
const client2 = new Client(2, 'Oleg', 'Sanchez', 'oleg@gmail.com', '+380-98-666-42-22',
    ['Keyboard']);
const client3 = new Client(3, 'Katya', 'Smith', 'kate@gmail.com', '+380-98-777-42-22',
    ['Smartphone', 'Microphone']);
const client4 = new Client(4, 'Olya', 'Hemilton', 'olka@gmail.com', '+380-98-888-42-22',
    ['Mouse', 'Headphones', 'Microphone', 'SSD', 'Floppy disc']);
const client5 = new Client(5, 'Vova', 'Doe', 'vovka@gmail.com', '+380-98-999-42-22',
    ['Monitor', 'Headphones']);
const client6 = new Client(6, 'Taras', 'Simpson', 'taras@gmail.com', '+380-98-000-42-22',
    ['GPU', 'Headphones', 'Microphone']);
const client7 = new Client(7, 'Denys', 'Griffin', 'den@gmail.com', '+380-98-222-42-22',
    ['CPU', 'Headphones', 'Microphone', 'Radio']);
const client8 = new Client(8, 'Martha', 'Jordan', 'martha@gmail.com', '+380-98-111-42-22',
    ['RAM', 'Headphones', 'Microphone', 'HDD', 'TV']);
const client9 = new Client(9, 'Nastya', 'Benitez', 'nastya@gmail.com', '+380-98-333-42-22',
    ['Chair', 'Headphones', 'Microphone']);
const client10 = new Client(10, 'Igor', 'Pushkin', 'igor@gmail.com', '+380-98-444-42-22',
    ['Table', 'Headphones', 'Microphone', 'SSD']);

const clients = [client3, client2, client1, client5, client4, client8, client6, client7, client9, client10];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedByOrderAmount = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedByOrderAmount);*/
