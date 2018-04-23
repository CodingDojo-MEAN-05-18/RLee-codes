// For full requirements, see the readme.txt

var _ = {
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
    map: function(array, callback) {
      var newArr = [];
      for (let item in array){
          newArr.push(callback(array[item]));
      }
      return(newArr);
    },


    reduce: function(array, callback, memo=false) { 
    // reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it
    // should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the 
    // iteration, and finally a reference to the entire list.
        for( let item in array){
            if (memo == false){
                memo = array[item];
                continue;
            }
            memo = callback(memo, array[item], item);
        }
        return(memo);
    },


    find: function(array, callback) {   
    // Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes
    // the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
        for (let item in array){
            if (callback(array[item]) == true){
                return(array[item]);
            }
        }
        return false;
    },


    filter: function(array, callback) { 
    // filter_.filter(list, predicate,)
    // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
    // **unsure about this portion & so it was not included: "predicate is transformed through iteratee to facilitate shorthand syntaxes."
        var newArr = [];
        for(let item in array){
            if (callback(array[item]) == true ){
                newArr.push(item);
            }
        }
        // console.log(newArr);
        return(newArr);
    },


    reject: function(array, callback) { 
    // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter
        var newArr = [];
        for(let item in array){
            if (callback(array[item]) !== true){
                newArr.push(array[item]);
            }
        }
        return (newArr);
    }
};


// arr used in all test cases
var arr = [1,2,3,4,5,6];


// // _.map test PASSED
// var xform = function(input){
//     let adj = (input + 1)*3;
//     return (adj);
// };
// console.log(_.map(arr, xform));


// .reduce test PASSED
// var xform = function(input, memo){
//     let adj = (input + memo);
//     return (adj);
// };
// console.log(_.reduce(arr, xform)); // => 21


// //_.find test PASSED
// var check = function(input){  
//     if ( input % 3 === 0){
//         return true;
//     }
//     else{
//         return;
//     }
// };
// console.log(_.find(arr, check)); // => 3


// _.filter test PASSED
// var isEven = function (input){ 
//     if (input % 2 == 0 ){ 
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(_.filter(arr, isEven));


// _.reject test PASSED
// var isEven = function (input){ 
//     if (input % 2 == 0 ){ 
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(_.reject(arr, isEven));  // => [1,3,5]