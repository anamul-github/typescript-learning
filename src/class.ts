// oop - class - object

//parameter properties
class Animal {
//    public name: string;
//    public species: string;
//    public sound: string;

    constructor(public name:string, public species: string, public sound: string){
        //this.name = name
        //this.species = species
        //this.sound = sound
    }

    makeSound(){
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}

const dog = new Animal('Doggy', 'Dog', 'Ghew ghew');
const cat = new Animal("Catty", "Cat", "Meow meow");

console.log(dog.sound);
console.log(cat.name);

dog.makeSound();