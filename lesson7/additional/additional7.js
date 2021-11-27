// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
/*class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

const address = new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    {lat: '-37.3159', lng: '81.1496'});

const user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', address,
    '1-770-736-8031 x56442', 'hildegard.org', { name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'});
console.log(user); */


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

/*class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

class Attribute {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

const aTagAction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.\n' +
    '\n' +
    'Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.';
const aTagAttributeHref = new Attribute('href',
    'Задает адрес документа, на который следует перейти.');
const aTagAttributeTarget = new Attribute('target',
    'Имя окна или фрейма, куда браузер будет загружать документ.');
const a = new Tag('a', aTagAction, [aTagAttributeHref, aTagAttributeTarget]);
console.log(a);

const divTagAction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.\n' +
    '\n' +
    'Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.'
const divTagAttributeAlign = new Attribute('align', 'Задает выравнивание содержимого тега <div>.');
const divTagAttributeTitle = new Attribute('title',
    'Добавляет всплывающую подсказку к содержимому.');

const div = new Tag('div', divTagAction, [divTagAttributeAlign, divTagAttributeTitle]);
console.log(div)

const h1TagAction = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
const h1TagAttributeAlign = new Attribute('align', 'Определяет выравнивание заголовка.');
const h1 = new Tag('h1', h1TagAction, [h1TagAttributeAlign]);
console.log(h1);

const spanTagAction = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
const spanTagAttributeAccessKey = new Attribute('accesskey',
    'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
const spanTagAttributeContextMenu = new Attribute('contextmenu',
    'Устанавливает контекстное меню для элемента.');
const span = new Tag('span', spanTagAction, [spanTagAttributeAccessKey, spanTagAttributeContextMenu]);
console.log(span);

const inputTagAction = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.\n' +
    '\n' +
    'Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.'
const inputTagAttributeAccept = new Attribute('accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
const inputTagAttributeAlt = new Attribute('alt', 'Альтернативный текст для кнопки с изображением.');
const inputTagAttributeChecked = new Attribute('checked',
    'Предварительно активированный переключатель или флажок.');
const input = new Tag('input', inputTagAction,
    [inputTagAttributeAccept, inputTagAttributeAlt, inputTagAttributeChecked]);
console.log(input);

const formTagAction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.\n' +
    '\n' +
    'Документ может содержать любое количество форм, но одновременно на сервер может быть отправлена только одна форма. По этой причине данные форм должны быть независимы друг от друга.';
const formTagAttributeAction = new Attribute('action',
    'Адрес программы или документа, который обрабатывает данные формы.');
const formTagAttributeAutocomplete = new Attribute('autocomplete',
    'Включает автозаполнение полей формы.');
const form = new Tag('form', formTagAction, [formTagAttributeAction, formTagAttributeAutocomplete]);
console.log(form);

const optionTagAction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
const optionTagAttributeDisabled = new Attribute('disabled',
    'Заблокировать для доступа элемент списка.');
const optionTagAttributeLabel = new Attribute('label', 'Указание метки пункта списка.');
const option = new Tag('option', optionTagAction, [optionTagAttributeDisabled, optionTagAttributeLabel]);
console.log(option);

const selectTagAction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
const selectTagAttributeForm = new Attribute('form', 'Связывает список с формой.');
const selectTagAttributeFormRequired = new Attribute('required',
    'Список обязателен для выбора перед отправкой формы.');
const select = new Tag('select', selectTagAction,
    [selectTagAttributeForm, selectTagAttributeFormRequired]);
console.log(select);*/
