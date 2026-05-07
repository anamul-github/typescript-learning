// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}

const AnamulAccount = new BankAccount(111, "Anamul", 100);

AnamulAccount.addBalance(100);
AnamulAccount.addBalance(50);
console.log(AnamulAccount);