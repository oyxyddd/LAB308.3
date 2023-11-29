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

//Part 3: Feeling Loopy
// const testString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const testString=`Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`
let cell1=''
let cell2=''
let cell3='' 
let cell4='';
let k = 1;
for (s of testString){
    if(s ==='\n'){
        console.log(cell1,cell2,cell3,cell4);
        k = 1;
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }else if (s === ','){
        k++;
    }else{
    switch(k){
        case 1:
            cell1 += s;
            break;
        case 2:
            cell2 += s ;
            break;
        case 3:
            cell3 += s;
            break;
        case 4:
            cell4 += s;
            break;
    }
    }
}