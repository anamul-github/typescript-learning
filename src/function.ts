// Function
//normal function
function addNormal(num1: number, num2: number): number{
    return num1 + num2;
}

// arrow function
const addArrow = (num1:number,num2:number):number => num1 + num2;

//object => function => method
const poorUser = {
    name: "Anamul",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(10000)