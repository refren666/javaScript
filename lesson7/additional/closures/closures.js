const userCard = (num) => {
    const card = {
        balance: 100,
        transactionLimit: 100,
        historyLog: [],
        key: num
    }

    return {
        putCredits: (amount) => {
            card.balance = card.balance + amount;
            card.historyLog.push({ operationType: "Receive credits", receivedAmount: amount,
            operationTime: new Date()})
        },

        takeCredits: (amount) => {
            if (card.balance >= amount && card.transactionLimit >= amount) {
                card.balance = card.balance - amount;
                card.historyLog.push({ operationType: "Withdraw credits", withdrawalAmount: amount,
                    operationTime: new Date()})
            } else {
                console.error('Not enough money for withdraw or transaction limit was exceeded');
            }
        },

        setTransactionLimit: (newLimit) => {
            card.transactionLimit = newLimit;
            card.historyLog.push({ operationType: "Set new transaction limit", currentTransactionLimit: newLimit,
            operationTime: new Date()})
        },

        transferCredits: (transferAmount, targetCard) => {
            let taxPercentage = transferAmount * 5 / 100;
            let transferAmountWithTax = transferAmount + taxPercentage;
            if (card.balance >= transferAmountWithTax && card.transactionLimit >= transferAmountWithTax) {
                card.balance = card.balance - transferAmountWithTax;
                targetCard.putCredits(transferAmount);
                card.historyLog.push({ operationType: "Credits transfer", fullTransferAmount: transferAmountWithTax,
                    operationTime: new Date()})
            } else {
                console.error('Not enough money for transaction or transaction limit was exceeded');
            }
        },

        getCardOptions: () => {
            return card;
        }
    }
}

const card1 = userCard(1);
const card2 = userCard(2);
card1.putCredits(100);
card1.takeCredits(50);
card1.setTransactionLimit(500);
card1.transferCredits(20, card2)
const card1Info = card1.getCardOptions()
const card2Info = card2.getCardOptions()
console.log(card1Info);
console.log(card2Info);

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(num) {
        if (this.cards.length < 3) {
            this.cards.push(userCard(num).getCardOptions());
        }
    }

    getCardByKey(key) {
        for (let card of this.cards) {
            if (card.key === key) {
                console.log(card)
            }
        }
    }
}

const user = new UserAccount('Yarik')
user.addCard(1); // Додаю юзеру нову карточку з ключем 1
user.addCard(2); // Додаю юзеру нову карточку з ключем 2
user.addCard(3); // Додаю юзеру нову карточку з ключем 3
user.addCard(4); // Ця картка вже не додасться, так як в юзера виставлений ліміт на 3 картки
user.getCardByKey(3);

console.log(user)
