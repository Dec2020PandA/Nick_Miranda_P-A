//Remove Blanks

function removeBlanks(str) {
    var x = str.split(" ").join("");
    return x;
}
console.log(removeBlanks("h hijskn n j   nksdj m"));

//Get Digits

function getDigits(str) {
    var x = 0;
    var splitStr = str.split("");
    var newArr = [];
    for(x; x <= 9; x++){
        for(let i = 0; i < splitStr.length; i++){
            if(x == splitStr[i]){
                var temp = splitStr[i];
                newArr.push(temp);
            }
        }
    }
    var onlyNumbers = newArr.join("");
    return onlyNumbers/1;
}
console.log(getDigits("1nmo3n4"));

//Acronyms 

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}
console.log(acronyms("anything i say - will be capitalized"));

//Count non-spaces

function countNonSpaces(){
    var x = str.split(" ").join("");
    var length = x.length;
    return length;
}
console.log(countNonSpaces("hello i   am a boy"));

//remove Short Strings

function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
console.log(removeShort(["helo", 3, "yooooo", "hi", "suppp", "hellooo"], 4));