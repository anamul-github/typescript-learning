//dynamically generalize: Generic
type GenericArray<T> = Array<T>; //here T is value

//const friends: string[]=['Karim','Rahim','Marim']
//const friends: Array<string> = ['Karim','Rahim','Marim']
const friends: GenericArray<string> = ['Karim','Rahim','Marim']

//const rollNumbers: number[]=[4,7,11];
//const rollNumbers: Array<number> = [4,7,11];
const rollNumbers: GenericArray<number> = [4,7,11];

//const isEligible: boolean[] = [true, false, true];
//const isEligible: Array<boolean> = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];



type Coordinates<X,Y> = [X,Y];

const Coordinates1: Coordinates<number, number> = [20,30];
const Coordinates2: Coordinates<string,string> = ["20","30"];

//Generics in Object
const userList: GenericArray<{ name: string; age: number }> = [
    {
        name: 'Anamul',
        age: 100
    },
    {
        name: 'Alex',
        age: 200
    }
]

