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
            card.historyLog.push({ operationType: "Receive credits", credits: amount,
            operationTime: new Date()})
        },

        takeCredits: (amount) => {
            if (card.balance >= amount && card.transactionLimit >= amount) {
                card.balance = card.balance - amount;
                card.historyLog.push({ operationType: "Withdraw credits", credits: amount,
                    operationTime: new Date()})
            } else {
                console.error('Not enough money for withdraw or transaction limit was exceeded');
            }
        },

        setTransactionLimit: (newLimit) => {
            card.transactionLimit = newLimit;
            card.historyLog.push({ operationType: "Set new transaction limit", transactionLimit: newLimit,
            operationTime: new Date()})
        },

        transferCredits: (transferAmount, targetCard) => {
            let taxPercentage = transferAmount * 5 / 100;
            let transferAmountWithTax = transferAmount + taxPercentage;
            if (card.balance >= transferAmountWithTax && card.transactionLimit >= transferAmountWithTax) {
                card.balance = card.balance - transferAmountWithTax;
                targetCard.balance = targetCard.balance + transferAmount;
                card.historyLog.push({ operationType: "Credits transfer", credits: transferAmountWithTax,
                    operationTime: new Date()})
                targetCard.historyLog.push({ operationType: "Receive credits", credits: transferAmount,
                    operationTime: new Date()})
            } else {
                console.error('Not enough money for transaction or transaction limit was exceeded');
            }
        },

        getCardOptions: () => {
            console.log(card)
        }
    }
}

const card1 = userCard(1);
const card2 = userCard(2);
card1.putCredits(100);
card1.transferCredits(50, card2)
card1.getCardOptions()
card2.getCardOptions()

class User {
    constructor(name) {

    }
}
