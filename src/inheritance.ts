class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    //common
    getSleep(numOfHours: number) {
        console.log(`${this.name} 
            ${numOfHours} ghonta ghumay`);
    }
}

class Student extends Parent{}

const student1 = new Student(`Mr Fakibaaz`, 18, "Bangladesh");

class Teacher extends Parent{
    designation: string; //own property

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }

    //own method
    takeClass(numOfClass: number) {
        console.log(`${this.name} 
            ${numOfClass} ghonta class ney`);
    }
}

const Teacher1 = new Teacher(
    "Mr Smart",
    25,
    "Dhaka",
    "Senior"
);