// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    private addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
    callHiddenMethod(balance: number) {
        this.addBalance(balance);
    }
}

const AnamulAccount = new BankAccount(111, "Anamul", 100);

AnamulAccount.addBalance(100);
AnamulAccount.addBalance(50);
console.log(AnamulAccount);