

// PART ONE Fizz Buzz

    //Loop through all numbers 1 to 100.
//for (let i = 0; i < 101; i++){
    //console.log(i);
//}

    // if a number is divisble by 3, log "Fizz"

    // 1 through 15
/*function divisbleNumber (divisor){
 console.log('Fizz');
  for (let i = 0; i <15; i ++){
    if (i % divisor === 0){
   //     console.log(i);
    }
  }
}
 const advisor = 3;
 divisbleNumber(advisor);  // logs 'Fizz' with the number equals to the divisble 3


    // If a number is divisible by 5, log "Buzz"
  /*  let divisble = 5;
    let number = 16;
    for (let i = 0; i < number; i ++){
        console.log('Buzz');
        if(i % divisble === 0){
    //        console.log(i);
        }
    }           // logs 'Buzz' with the numbers equals to the divisible 5
*/

        // If a number is divisble by both 3 and 5, log "Fizz Buzz"
        const divisbleOne = 5;
        const divisbleTwo = 3;
        const str = "Fizz Buzz";

        for (let i = 0; i < 16; i ++){
            if (i % divisbleOne === 0 ){ // 5
                console.log(i, "Fizz");
            }
            else if(i % divisbleTwo === 0){ // 3
                console.log(i, "Buzz");
            }
        }
        console.log(str);


        
