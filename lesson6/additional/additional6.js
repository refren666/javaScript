// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

/*const validator = (email, emailSymbolChecker, textBeforeEmailSymbolChecker, dotPositionChecker) => {
    emailSymbolChecker(email);
    textBeforeEmailSymbolChecker(email);
    dotPositionChecker(email);
    console.log(email);
}

const emailSymbolChecker = email => {
    if (email.includes('@')) {
        return true
    } else {
        alert('Invalid e-mail, the "@" sign is absent');
    }
}

const textBeforeEmailSymbolChecker = email => {
     if (email.indexOf('@') > 0) {
         return true
     } else {
         alert('Invalid e-mail, there are no letters before "@" sign')
     }
}

const dotPositionChecker = email => {
    if (email.indexOf('.') > email.indexOf('@') + 2) {
        return true
    } else {
        alert('Invalid e-mail, there only may be one "." sign and there must be at least 2 symbols after "@" sign')
    }
}

validator('example@gmail.com', emailSymbolChecker, textBeforeEmailSymbolChecker, dotPositionChecker);*/

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
/*let coursesArray = [
             {
                 title: 'JavaScript Complex',
                 monthDuration: 5,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
             },
             {
                 title: 'Java Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'java core',
                     'java advanced']
             },
             {
                 title: 'Python Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'python core',
                     'python advanced']
             },
             {
                 title: 'QA Complex',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
             },
             {
                 title: 'FullStack',
                 monthDuration: 7,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'node.js',
                     'python',
                     'java']
             },
             {
                 title: 'Frontend',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
             }
         ];*/
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

/*const sortArrayOfObjectsByAmountOfModules = arr => {
    return arr.sort((a, b) => b.modules.length - a.modules.length );
}

console.log(sortArrayOfObjectsByAmountOfModules(coursesArray));*/

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

/*const count = (str, symb) => {
    let stringSearch = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symb) {
            stringSearch++;
        }
    }
    return stringSearch;
}

console.log(count('Астрономия это наука о небесных объектах', 'о'));*/

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// сплітнути стрінгу до масиву, n буде відповідати за індекс сплайсу. Після сплайсу заджойнити

/*const cutString = (str, n) => {
    return str.split(' ').splice(0, n).join(' ');
}

document.writeln(cutString('Сила тяжести приложена к центру масс тела', 5));*/
