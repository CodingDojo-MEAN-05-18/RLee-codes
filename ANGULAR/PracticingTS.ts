let myString = 'this is a String';

myString = "reassign";

const array: NumBooStr[] = ["cat", 'dog', 999];
// or   const array : (string | number) = ["cat", "dog"]
array.push("things");
array.push(5);
array.push(true);

type NumBooStr = boolean | string | number;

const first: number = array[2] as number;

function printName(name: string): string {
    return `Hello, ${name}`;
}

class User {
    

    constructor(public name : string, public age: number){}
        sayHello(name: string): void {
            console.log(`Hello, ${name}, I'm ${this.age}`);
    }
}
