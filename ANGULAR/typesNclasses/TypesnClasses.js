var myNum = 5;
var myString = "Hello Universe";
var myArr = [1, 2, 3, 4];
var myObj = { name: "Bill" };
var anythingVariable = "Hey";
anythingVariable = 25;
var arrayOne = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
// myObj is already typed as an Object on line 7
myObj = { x: 5, y: 10 };
var MyNode = /** @class */ (function () {
    function MyNode(val, _priv) {
        if (val === void 0) { val = 0; }
        if (_priv === void 0) { _priv = 0; }
        this.val = val;
        this._priv = _priv;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
    throw new Error("Error Message");
}
