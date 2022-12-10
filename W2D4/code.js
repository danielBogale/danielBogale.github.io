String.prototype.filter = function (arr){
    if(typeof arr === 'object'){
        if(arr.length > 0){
            return this.split(' ').filter(o => arr.indexOf(o) < 0).join(' ');
        }
    } else {
        if(arr.length > 0){
            return this.split(' ').filter(o => arr !== o).join(' ');
        }
    }
}
// console.log("This house is not nice!".filter(['not']));

function swap(arr, x, y){
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

Array.prototype.bubbleSort = function(){
    if(this.length <= 1)
        return this;
    
    let arr = this;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i -1; j++){
            if(arr[j] > arr[j+1])
                swap(arr, j, j+1)
        }
    }

    return arr;
}

//console.log([6,4,0, 3,-2,1].bubbleSort()); // [-2, 0, 1, 3, 4, 6]

//Parent class
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//child class
var Teacher = function() {};
Teacher.prototype = new Person(); //inherit Person

//add specific method for Teacher
Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject)
}

//create object for Teacher
const prasad = new Teacher();
prasad.initialize("Prasad", 45);
prasad.teach("Mathematics");