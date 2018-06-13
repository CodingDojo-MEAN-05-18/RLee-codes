const myNum: number = 5;

const myString: string = "Hello Universe";

let myArr: number[] = [1,2,3,4];

let myObj: object = {name: "Bill"};

let anythingVariable: any = "Hey";
anythingVariable = 25;


let arrayOne: boolean[] = [true, false, true, true];

type stringNumBool = (string | number | boolean);
let arrayTwo: stringNumBool[] = [1, 'abc', true, 2];


// myObj is already typed as an Object on line 7
myObj = { x: 5, y: 10};

class MyNode {
    
    constructor(public val: number = 0, private _priv: number = 0 ){
        
    }
    
    doSomething() : void {
        this._priv = 10;
    }

}

const myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World")    ;
    return;
}

function sendingErrors(): void {
    throw new Error("Error Message");
}