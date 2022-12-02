function max(num1,num2){
    if (num1 > num2) {
        return num1;
      } else if (num1 < num2) {
        return num2;
      } else {
        return "The numbers are the same";
      }

}
//alert(max(9,8));
function maxOfThree(a,b,c){

    if (a>b){
        if(a>c){
            return a;
        }
        return c;
    }
    else {
    if(b>c){
        return b;
    }
      return c;
    }
}
//alert(maxOfThree(33,16,25));
function isVowel(char){
   
    switch(char) {
        case 'a':  return true;
        case 'e':  return true;
        case 'i':  return true;
        case 'o':  return true;
        case 'u':  return true;
        default:
            return false;
    }
}
//alert(isVowel('k'));
function sum(numbers){
    var total=0;
    for(var i=0;i<numbers.length;i++){
        total+=numbers[i];
    }
    return total;
}
function multiply(numbers){
    var total=1;
    for(var i=0;i<numbers.length;i++){
        total*=numbers[i];
    }
    return total;
}
//alert(multiply([1,2,3,4]));
//console.log(multiply([1,2,3,4]));
//console.log(sum([1,2,3,4]));
function reverse(str){
    var tot="";
   var ch;
    for(var i=str.length;i>=0;i-- ){
        tot+=str.charAt(i);
      // tot+=ch;
    }
    return tot;
}
//alert(reverse("Haftish"));
function  findLongestWord(str){
    var longestWord=0;
    for(var i=0;i<str.length;i++){
        if(str[i].length>longestWord)
        {
            longestWord=str[i].length;
        }
            
    }
    return longestWord;

}
//alert(findLongestWord(["haft","hafth","eifeuih"]));
function  filterLongWords(str,x){
    return  str.filter(i=> i.length>x);
  //longestWord;
}
//alert(findLongestWord(["abc","iej"],1));
function jsfiddle(a){
    const b = a.map(function(elem, i, array) {
        return elem * 10;
      })
      console.log(b);
      const c = a.filter(function(elem, i, array){
        return elem === 3;});
        console.log(c);
      const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
      });
      console.log(d);
}
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))); //max(a,b)
  console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20,10,30))); //maxOfThree(a,b,c)
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a'))); //isVowel(a)
  console.log("Expected output of sum([1,2,3,4,5]) is 15" + myFunctionTest(15, sum([1,2,3,4,5]))); //sum(a)
  console.log("Expected output of reverse(Haftish) is hsitfaH  " + myFunctionTest("hsitfaH", reverse("Haftish"))); //reverse(str)
  console.log("Expected output of findLongestWord([JS,is,easy,for,Hafteab]) is 7  " + myFunctionTest(7, findLongestWord(["JS","is","easy","for","Hafteab"]))); //findLongestWord(str)
  console.log("Expected output of filterLongWords([JS,is,hard,for,Noobs] , 3) is ['hard', 'Noobs']  " + myFunctionTest(["hard", "Noobs"], filterLongWords(["JS","is","hard","for","Noobs"] , 3))); //filterLongWords(str , val)
  console.log("Expected output of jsfiddle([1,2,3,4,5,6]) is [10, 20, 30, 40, 50, 60]  " + myFunctionTest(720, jsfiddle([1,2,3,4,5,6]))); //jsfiddle(a)
  