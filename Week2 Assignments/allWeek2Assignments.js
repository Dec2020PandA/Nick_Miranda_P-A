class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Fronts{
    constructor(){
        this.head = null;
    }

    addFront(value) {
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront() {
        if(this.head){
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        if(this.head != null){
            var value = this.head.value;
            return value;
        }
        return this.head;
    }

    contains(value){
        var contains = false;
        var thisHead = this.head;
        while(thisHead != null){
            if(this.head.value == value){
                contains = true;
                return contains;
            }
            thisHead = thisHead.next;
        }
        return contains;
    }

    length(){
        var length = 0;
        var thisHead = this.head;
        while(thisHead != null){
            length = length + 1;
            thisHead = thisHead.next;
        }
        return "The List length is: " + length;
    }

    display() {
        var thisHead = this.head;
        var strng = "";
        while(thisHead != null){
            strng += thisHead.value + ". ";
            thisHead = thisHead.next;
        }
        return strng;
    }

    max() {
        var max = this.head.value.length;
        var maxValue = this.head.value;
        var runner = this.head;
        while(runner != null){
            if(max < runner.value.length){
                max = runner.value.length;
                maxValue = runner.value;
            }
            runner = runner.next;
        }
        return "the largest value is: " + maxValue + " with a length of: " + max;
    }

    min() {
        var min = this.head.value.length;
        var minValue = this.head.value;
        var runner = this.head;
        while(runner != null){
            if(min > runner.value.length){
                min = runner.value.length;
                minValue = runner.value;
            }
            runner = runner.next;
        }
        return "the smallest value is: " + minValue + " with a length of: " + min;
    }

    average() {
        var average = 0;
        var runner = this.head;
        var listLength = 0;
        while(runner != null){
            average += runner.value.length;
            listLength++;
            runner = runner.next;
        }
        average = average/listLength;
        return average;
    }
}

var firstNode = new Fronts();
firstNode.addFront("Nick").addFront("michelle").addFront("someone");
firstNode.addFront("anotherone");
console.log(firstNode);
console.log(firstNode.contains("Nickkk"));
console.log(firstNode.length());
console.log(firstNode.display());

console.log(firstNode.max());
console.log(firstNode.min());
console.log(firstNode.average());

