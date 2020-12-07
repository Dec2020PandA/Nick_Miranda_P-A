//Min To Front

function minToFront(arr) {
    var newArr = [];
    var least = arr[0];
    for(let i = 0 ; i < arr.length; i++){      
        if(least > arr[i]){
            least = arr[i];
        }
    }
    newArr.push(least);
    for(let x = 0; x < arr.length; x++){
        if(arr[x] != least){
            newArr.push(arr[x]);
        }
    }
    return newArr;
}

console.log(minToFront([4,2,1,3,5]));