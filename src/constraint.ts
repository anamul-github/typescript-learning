// contrain : adding strict rules

type Student = {
    id: number; 
    name: string;
    dateOfBirth: string;
    class: string;
}

const addStudentToCourse = <T extends Student>(studentInfo:T) => {
    return {
        course: 'AI',
        ...studentInfo,
    }
}

const student1 ={
    id: 123,
    name: 'Anamul',
    hasPen: true,
    dateOfBirth: 'March 26',
    class: '10',
};

const student2 = {
    id: 321,
    name: 'Alex',
    hasCar: true,
    isMarried: true,
}

const result = addStudentToCourse(student1);
console.log(result);