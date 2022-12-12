"use strict";

class Bank {
    constructor(){
        this.accountList = [];
    }

    static sequence = 2000;

    //stores sequence of account number
    static nextNumber(){
        return ++this.sequence;
    }

    addAccount(){
        const nr = Bank.nextNumber();
        const ac = new Account(nr);
        ac.deposit(5000);
        this.accountList.push(ac);
        return nr;
    }

    addSavingsAccount(interest){
        const nr = Bank.nextNumber();
        const ac = new SavingsAccount(nr, interest);
        ac.deposit(7000);
        this.accountList.push(ac);
        return nr;
    }

    addCheckingAccount(overdraft){
        const nr = Bank.nextNumber();
        const ac = new CheckingAccount(nr,overdraft);
        ac.deposit(5000);
        ac.withdraw(5150);
        this.accountList.push(ac);
        return nr;
    }

    closeAccount(number){
        const index = this.accountList.findIndex(e => e._number === number);

        if(index > -1)
            this.accountList.splice(index, 1);
    }

    accountReport(){
        return this.accountList.reduce((accum, elem) => (accum !== "" ? accum + "\n" : "" ) + elem.toString(), '');
    }

    endOfMonth(){
        return this.accountList.reduce((accum, elem) => (accum !== "" ? accum + "\n" : "" ) + elem.endOfMonth(), '');
    }
}
    