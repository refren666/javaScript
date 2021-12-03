class UserCard {
    constructor(balance = 100, transactionLimit = 100, num) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLog = [];
        this.key = num;
    }

    putCredits(amount) {
        this.balance = this.balance + amount;
        this.historyLog.push({
            operationType: "Receive credits", receivedAmount: amount,
            operationTime: new Date()
        })
    };

    takeCredits(amount) {
        if (this.balance >= amount && this.transactionLimit >= amount) {
            this.balance = this.balance - amount;
            this.historyLog.push({
                operationType: "Withdraw credits", withdrawalAmount: amount,
                operationTime: new Date()
            })
        } else {
            console.error('Not enough money for withdraw or transaction limit was exceeded');
        }
    }

    setTransactionLimit(newLimit) {
        this.transactionLimit = newLimit;
        this.historyLog.push({
            operationType: "Set new transaction limit", currentTransactionLimit: newLimit,
            operationTime: new Date()
        })
    }

    transferCredits(transferAmount, targetCard) {
        let taxPercentage = transferAmount * 5 / 100;
        let transferAmountWithTax = transferAmount + taxPercentage;
        if (this.balance >= transferAmountWithTax && this.transactionLimit >= transferAmountWithTax) {
            this.balance = this.balance - transferAmountWithTax;
            targetCard.putCredits(transferAmount);
            this.historyLog.push({
                operationType: "Credits transfer", fullTransferAmount: transferAmountWithTax,
                operationTime: new Date()
            })
        } else {
            console.error('Not enough money for transaction or transaction limit was exceeded');
        }
    }

    getCardOptions() {
        return this
    }


}

const card1 = new UserCard(100, 100, 1);
const card2 = new UserCard(100, 100, 2);
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
            this.cards.push(new UserCard(100, 100, num));
        }
    }

    getCardByKey(key) {
        for (let card of this.cards) {
            if (card.key === key) {
                return card;
            }
        }
    }
}

const user = new UserAccount('Yarik')
user.addCard(1); // Додаю юзеру нову карточку з ключем 1
user.addCard(2); // Додаю юзеру нову карточку з ключем 2
user.addCard(3); // Додаю юзеру нову карточку з ключем 3
user.addCard(4); // Ця картка вже не додасться, так як в юзера виставлений ліміт на 3 картки
console.log(user)
let userCard1 = user.getCardByKey(3);
let userCard2 = user.getCardByKey(2)
userCard1.putCredits(100);
userCard1.transferCredits(50, userCard2)
console.log(userCard1)


