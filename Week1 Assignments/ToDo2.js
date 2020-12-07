//Reverse

function reverse(arr) {
    var last = arr.length - 1;
    for(let i = 0; i < last; i++ ){
        var temp = arr[i];
        arr[i] = arr[last];
        arr[last] = temp;
        last--;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]));

//Rotate

function rotateArr(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
	}
}
console.log(rotateArr([1,2,3], 1));

//Filter Range

function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
    }
    return arr;
}
console.log(filterRange([1,2,3,4,5,6,7,8,9], 5, 7));

//Concat

function Concat(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        var push = arr2[i];
        arr1.push(push); 
    }
    return arr1;
}
console.log(Concat([1,2,3], ["hello", "yo"]));