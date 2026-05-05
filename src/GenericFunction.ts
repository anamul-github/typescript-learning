// Generic Function
const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next Level",
})

//Tuple
const createArrayTupleWithGeneric = <X,Y>
(param1: X, param2: Y) => [param1, param2]

const res1 = createArrayTupleWithGeneric('Anamul', false);
const res2 = createArrayTupleWithGeneric(222, {
    name: 'Anamul', age: 100
})


//Example:
const addStudentToCourse = <T>(studentInfo:T) => {
    return {
        course: 'AI',
        ...studentInfo,
    }
}

const student1 ={
    id: 123,
    name: 'Anamul',
    hasPen: true,
};

const student2 = {
    id: 321,
    name: 'Alex',
    hasCar: true,
    isMarried: true,
}

const result = addStudentToCourse(student2);
console.log(result);