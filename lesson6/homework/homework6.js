// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// Method 1:
/*const srtLen = text => {
    console.log(text.length);
}

srtLen('hello world');
srtLen('lorem ipsum');
srtLen('javascript is cool');*/

// Method 2:
/*const srtLen = text => {
    let totalLength = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i]) {
            totalLength++;
        }
    }
    return totalLength;
}

console.log(srtLen('hello world'));
console.log(srtLen('lorem ipsum'));
console.log(srtLen('javascript is cool'));*/

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
/*const upperCaser = text => {
    console.log(text.toUpperCase());
}

upperCaser('hello world');
upperCaser('lorem ipsum');
upperCaser('javascript is cool');*/

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*const lowerCaser = text => {
    console.log(text.toLowerCase());
}

lowerCaser('HELLO WORLD');
lowerCaser('LOREM IPSUM');
lowerCaser('JAVASCRIPT IS COOL');*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*const cleaner = text => {
    console.log(text.trim());
}

cleaner(' dirty string   ');*/

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToArray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
/*let str = 'Каждый охотник желает знать';

const stringToArray = str => {
    return str.split(' ');
}

let arr = stringToArray(str);
console.log(arr);
document.writeln(arr);*/

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
/*let str = 'Каждый охотник желает знать';
const deleteCharacters = (str, length) => {
    return str.slice(0, length);
}

document.writeln(deleteCharacters(str, 7));*/

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

/*let str = "HTML JavaScript PHP";
const insertDash = str => {
    return str.toUpperCase().replaceAll(' ', '-');
}

document.writeln(insertDash(str));*/

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
/*const firstLetterToUpperCase = text => {
    text = text.replace(text[0], text[0].toUpperCase());
    return text;
}

console.log(firstLetterToUpperCase('i would like to know JS'));*/

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
/*const capitalize = str => {
    const stringArray = str.split(' ');
    const lettersCapitalizer = stringArray.map( word => {
        word = word.replace(word[0], word[0].toUpperCase());
        return word;
    });
    return lettersCapitalizer.join(' ');
}
console.log(capitalize('i would like to know java script'));*/
