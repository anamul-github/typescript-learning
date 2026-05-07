// getter
// setter
class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    //using setter
    set addBalance(balance: number) {
        this.userBalance = this.userBalance + balance
    }

    //using getter
    get getBalance(){
        return this.userBalance
    }
}
const AnamulAccount = new BankAccount(111, "Anamul", 100);

AnamulAccount.addBalance = 100;
AnamulAccount.addBalance = 80;

console.log(AnamulAccount);
console.log(AnamulAccount.getBalance);