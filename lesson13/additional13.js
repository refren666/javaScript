// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const itemForm = document.forms.itemForm;
const itemName = itemForm.name;
const itemAmount = itemForm.amount;
const itemPrice = itemForm.price;
const itemImage = itemForm.image;

function Item(name, amount, price, image) {
    this.name = name;
    this.amount = +amount;
    this.price = +price;
    this.image = image;
}

const shoppingItems = 'shoppingItems';

submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const shoppingItemsArray = JSON.parse(localStorage.getItem(shoppingItems)) ?? [];
    const findDuplicate = shoppingItemsArray.find(el => el.name === itemName.value);
    if (shoppingItemsArray.includes(findDuplicate)) {
        return;
    } else {
        shoppingItemsArray.push(new Item(itemName.value, itemAmount.value, itemPrice.value, itemImage.value));
    }
    localStorage.setItem(shoppingItems, JSON.stringify(shoppingItemsArray));
})