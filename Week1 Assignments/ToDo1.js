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
function insertAt(arr, idx, val) {
    for(let i = arr.length; i > idx; i--)
    arr[i] = arr[i-1]

arr[idx] = val;
return arr;
}
console.log(insertAt([4,5,6], 1, "hello")); //7 -6 

//Remove at

function removeAt(arr, idx) {
    var newArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        if (i < idx)
        {
          newArr[i] = arr[i];
        }
        else
        {
          newArr[i] = arr[i + 1];
        }
      }
    console.log(newArr);
    return arr[idx];
}
console.log(removeAt([2,3,4,5,70,88], 2));

//swap pairs

function swapPairs(arr) {
    for(let i = 0; i < arr.length - 1;i += 2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
console.log(swapPairs([1,2,3,4,5]));

//remove duplicates 

function removeDuplicates(arr){
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] != arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}
console.log(removeDuplicates([2,2,4,5,6,6,7,8]));