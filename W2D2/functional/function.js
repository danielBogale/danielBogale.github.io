
function sum(arr){
    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    return arr.reduce(function(accumulator, element){
        return accumulator + element;
    }, 0);

}

//or
const sum=numbers.reduce((result, ele)=>result+ele);

function multiply(arr){
    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    return arr.reduce((accumulator, element) => accumulator * element, 1)

}
//or
const multiply=numbers.reduce((result, ele)=>result*ele);

function reverse(str){
    return Array.from(str).reduce((accumulator, elem) => elem + accumulator, '');
}


const ele=Array.from(vowels.reduce((e,f)=>f+" "+e));


function findLongestWord(arr){
    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    return arr.sort((a,b) => b.length - a.length)
                .find(element => element);
}

function filterLongWords(arr, size){

    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    return arr.filter( (element, arr) => element.length > size);

}