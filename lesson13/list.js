const itemsArr = JSON.parse(localStorage.getItem('shoppingItems'));
const itemsWrapper = document.createElement('div');
itemsWrapper.style.display = 'grid';
itemsWrapper.style.gridTemplateColumns = 'repeat(3, 1fr)';

itemsArr.forEach(item => {
    const itemBlock = document.createElement('div');
    itemBlock.innerHTML = `<h3>Item name: ${item.name}</h3>
                           <p>Amount: ${item.amount}</p>
                           <p>Price: ${item.price}$</p>
                           <img src="${item.image}" alt="cart item" width="200px" height="300px"><br>`

    const deleteItemFromCartBtn = document.createElement('button');
    deleteItemFromCartBtn.innerText = 'Remove from cart';

    deleteItemFromCartBtn.addEventListener('click', () => {
        const filteredArray = itemsArr.filter(element => element.name !== item.name);
        localStorage.setItem('shoppingItems', JSON.stringify(filteredArray));
    })

    itemBlock.appendChild(deleteItemFromCartBtn);
    itemsWrapper.appendChild(itemBlock);
})

const deleteAllBtn = document.createElement('button');
deleteAllBtn.innerText = 'Delete all items from cart';
deleteAllBtn.style.width = '50%';
deleteAllBtn.style.height = '50px';
deleteAllBtn.style.display = 'block';
deleteAllBtn.style.margin = '0 auto';
deleteAllBtn.style.marginTop = '15px';
deleteAllBtn.style.fontSize = '2rem';
deleteAllBtn.style.border = 'none';
deleteAllBtn.style.cursor = 'pointer';
deleteAllBtn.style.backgroundColor = 'cornflowerblue';
deleteAllBtn.style.color = '#fff';

deleteAllBtn.addEventListener('click', () => {
    localStorage.clear();
})

document.body.append(itemsWrapper, deleteAllBtn);

