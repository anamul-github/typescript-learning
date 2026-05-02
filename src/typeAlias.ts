type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contactNo: string;
    address: {
        city: string,
        state: string;
    };
} 
const user1:User = {
    id: 123,
    name: {
        firstName: "Anamul",
        lastName: "Hasan"
    },
    gender: "male",
    contactNo: "507000000",
    address: {
        city: "Edina",
        state: "MN"
    },
}
const user2: User = {
    id: 456,
    name: {
        firstName: "X",
        lastName: "Y"
    },
    gender: "female",
    contactNo: "1000000",
    address: {
        city: "Dhaka",
        state: "BD"
    },
};

//Function
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2; 