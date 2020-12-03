//Push Front 
function placeValueInFront(arr, insertValue) {
    var x = insertValue;
    arr[0] = x;
    return arr;
}
console.log(placeValueInFront([0,3,4,5,"yo"], "hello"));

//Pop Front

function popFront(arr) {
    var x = arr[0];
    for(let i = 0; i < arr.length; i++)
        arr[i] = arr[i + 1];
        arr.length = arr.length - 1;
    return x;
}
console.log(popFront([5,6,7,8]));

//Insert At
funciton insertAt() {
    
}