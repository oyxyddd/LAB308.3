//Part 1: Fizz Buzz
for(let i = 1; i <= 100; i++){
    if( i % 3 === 0){
        i % 5 === 0 ? console.log("Fizz Buzz") : console.log("Fizz");
    }else if( i % 5 === 0){
        console.log("Buzz")     
    }else{
        console.log(i);
    }
}

// Part 2: Prime Time 
let n=45;
//find the next prime number
let isPrime; 
do{
    n++;
    isPrime = true;
    for (let j = 2; j < n; j++ ){
        if (n % j === 0 ){
            isPrime=false;
            break;
        }
    }
}while(!isPrime)
console.log(n);