const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

getNumber();
let total = 0;
function getNumber(){

    readline.question("Enter a number: ", input =>{

        if(input === 'stop'){
            console.log(`The sum of all the number is: ${total}`);
            readline.close();
        } else {
            if(parseInt(input))
                total += parseInt(input);

            //iterate the function call
            process.nextTick(getNumber);
            //setTimeout(getNumber,0);
            //getNumber();
        }
    });
}
