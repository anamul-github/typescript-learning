//keyof : type operator

type RichPeopleVehicle = {
    car: string; //key value
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle1 = "car";

//keyof constraint

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

const user : User = {
    id: 111, //key : value
    name: 'Anamul',
    address: {
        city: "Dhaka",
    },
};

//const myId = user.id;
const myId = user["id"];
const myName = user.name;
const myAddress = user.address.city;

console.log(myId, myName, myAddress);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);

const product = {
    brand: 'HP',
};

const student = {
    id: 123,
    class: 4,
}

const result2 = getPropertyFromObj(product, 'brand');
const result3 = getPropertyFromObj(student, 'id');