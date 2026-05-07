//static
class Counter {
    static count: number = 0;

    increment(){
        return (Counter.count = Counter.count + 1);
    }
    decrement() {
        return (Counter.count = Counter.count -1);
    }
}

const instance1 = new Counter(); // one memory
console.log(instance1.increment()); //1
console.log(instance1.increment()); //2
console.log(instance1.increment()); //3

const instance2 = new Counter(); //same memory
console.log(instance2.increment()); //4
console.log(instance2.increment()); //5
console.log(instance2.increment()); //6

const instance3 = new Counter(); //same memory
console.log(instance3.increment()); //7