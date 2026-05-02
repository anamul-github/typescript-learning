// array, object
let bazarList = ['eggs','milk','sugar'];

bazarList.push(12);
bazarList.push(true);

//Tuple
let couple: [string, string] = ["Husband", "Wife"];
let NameAndRoll: [string, number] = ["Anamul", 10];
let destination: [string, string, number] = ['Dhaka','Chattogram',3];

//reference type : object
const user: {
    organization:'XYZ'; //value => type : literal types
    firstName:string;
    middleName:string;
    lastName:string;
} = {
    organization:'XYZ',
    firstName:'Anamul',
    middleName:'Hasan',
    lastName:'Ishty'
};

user.organization = 'XYZ ABC';

console.log(user);
