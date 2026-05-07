//oop : instance of type guard/type narrowing

class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} daily sleep is ${numOfHours} hours!`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHours: number) {
        console.log(`${this.name} daily studies ${numOfHours} hours!`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} takes class for ${numOfHours} hours!`);
    }
}

const getUserInfo = (user: Person) => {
    if(user instanceof Student) {
        user.doStudy(10);
    } else if(user instanceof Teacher){
        user.takeClass(5);
    } else {
        user.getSleep(12);
    }
}

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Mr. Person");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);