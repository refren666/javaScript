/*
function userCard(num, balance = 100, transactionLimit = 100) {
    const user = {
        balance: balance,
        transactionLimit: transactionLimit,
        historyLogs: [
            {transactionId: 124, transactionSum: 20, date: '20-04-2020'},
            {transactionId: 151, transactionSum: 50, date: '20-04-2020'},
            {transactionId: 192, transactionSum: 10, date: '20-04-2020'},
            {transactionId: 214, transactionSum: 90, date: '20-04-2020'},
        ],
        key: num
    };

        const  userChanger = {
            putCredits: function(amount) {
                this.balance = this.balance + amount;
            },

            takeCredits: function(amount) {
                if (this.balance >= amount && this.transactionLimit >= amount) {
                    this.balance = this.balance - amount;
                } else {
                    console.error('Not enough money for withdrawal or you have exceeded transaction limit')
                }
            },

            setTransactionLimit: function(newLimit) {
                this.transactionLimit = newLimit;
            },

            transferCredits: function(transferAmount, ) {

            }
    }
    // return userChanger(3);
}

// const card3= userCard(3);*/
