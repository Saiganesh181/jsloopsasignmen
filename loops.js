//                         LOOPS LEVEL-1

//1.Use for loop & while-loop to iterate from 0 to 100 and print only even numbers

//let i = 0;
//while (i <= 100) {
    //if (i % 2 === 0) {
        //console.log(i);
    //}
    //i++;
//}
//2.Use for loop & while-loop to iterate from 0 to 100 and print only odd numbers
//let j = 0;
//while (j<= 100) {
    //if (j % 2 !=0) {
       // console.log(j);
  //  }
   // j++;
//}





//3.Use for loop & while-loop to iterate from 0 to 100 and print only prime numbers

//function isPrime(num) {
    //if (num <= 1) return false; 
   // if (num === 2) return true; 
 //   if (num % 2 === 0) return false; 

 //   for (let i = 3; i <= Math.sqrt(num); i += 2) {
 //       if (num % i === 0) return false; 
  //  }

  //  return true;
//}

//let i = 0;
//while (i <= 100) {
   // if (isPrime(i)) {
    //    console.log(i);
   // }
   // i++;
//}

//4.Use for loop & while-loop  to iterate from 0 to 100 and print the sum of all numbers.

// thiss Using for loop
//let a=0;
//for(let i=1;i<=100;i++){
   // a+=i;
//}
//console.log(a)


//useing while-loop 
//let z=0;
//let num=0;
//while(z<=100){
   // num+=z;
   // z++;
//}
//console.log(num)

//5.Use for loop & while-loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds

// let z=0;
// let num=0;
// while(z<=100){
//    num+=z;
//     z++;
// }
// console.log(num)

//6.Use for loop & while-loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
//using for loop
// let even=0;
// let odd=0;
// for(let i=0;i<100;i++){
//    if(i%2==0){
//       even+=i;
//    }else{
//       odd+=i;
//    }
// }
// console.log("even numbers:"+even);
// console.log("odd numbers:"+odd);

//7.using while loop
// let even=0;
// let odd=0;
// let i=0;
// while(i<100){
//    if(i%2==0){
//       even+=i;
//    }else{
//       odd+=i;
//    }
//    i++;
// }
// console.log("even numbers:"+even);
// console.log("odd numbers:"+odd);


//8.Write a program that calculates the factorial of a given positive integer
//using for loo[]
// let n=5;
// let r=1
// for(let i=1;i<=n;i++){
//    if(n>0){
//      r*=i;

//    }
//      }
//    console.log(r);

//9.using while loop
// let n=10;
// let r=1
// let i=1;
// while(i<=n){
//    if(n>0){
//      r*=i;

//    }
//    i++;
//      }
//    console.log(r);

//                      LOOPS LEVEL-2


//1.Print the numbers 0 - 20, one number per line.
//using for loop
// for (let i = 0; i <= 20; i++) {
//    console.log(i);
// }

//while loop
// let i=0;
// while(i<=20){
//    console.log(i);
   
// }
// i++;


//2.Print only the ODD values from 3 - 29, one number per line.

// for(let i=3;i<=29;i++){
//    if(i%2!=0){
//       console.log(i)
//    }
// }


//3.Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// for(let i=12;i>=-14;i--){
//    if(i%2==0){
//       console.log(i)

//    }
   
// }

//4.Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// for(let i=50;i>=20;i--){
//    if(i%3==0){
//       console.log(i)

//    }
   
// }

//5.Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
// Initialize variables
// let str='LaunchCode'
// let array=[1,2,3,4,5,'GddgDf']
// for(i=0;i<str.length;i++){
//    console.log(str[i])
// }
// for(i=0;i<array.length;i++){
//    console.log(array[i])

// }


//6.Print each element of the array to a new line.

// let array=[1,23,,4,5,6]
// for(i=0;i<array.length;i++){
//    console.log(array[i])
// }

//7.Print each character of the string---in reverse order---to a new line

// let str='LaunchCode'
// for(i=str.length;i>=0;i--){
//    console.log(str[i])
// }


//8.Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

// let array=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
//  let even=[];
//  let odd=[];
//  for(i=0;i<array.length;i++){
//    if(array[i]%2==0){
//       even.push(array[i])
//    }else{
//       odd.push(array[i])
//    }
//  }
//  console.log(even);
//  console.log(odd);

//9.Define an empty evens array to hold the even numbers and an odds array for the odd numbers

// let array=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
//  let even=[];
//  let odd=[];
//  for(i=0;i<array.length;i++){
//    if(array[i]%2==0){
//       even.push(array[i])
//    }else{
//       odd.push(array[i])
//    }
//  }
//  console.log(even);
//  console.log(odd);

//10.In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.

// let array=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
//  let even=[];
//  let odd=[];
//  for(i=0;i<array.length;i++){
//    if(array[i]%2==0){
//       even.push(array[i])
//    }else{
//       odd.push(array[i])
//    }
//  }
//  console.log(even);
//  console.log(odd);

//11.Print the arrays to confirm the results. Print evens first. Example: console.log(evens);

// let results=[1,2,3,4,5,6]
// for(let i=0;i<results.length;i++){
//    if(i%2!=0){
//       console.log(results[i])

// }
// }

//12.Define three variables for the socialprachar for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


// let socialprachar=1000;
// let noofastronouts=45;
// let altitude=40;
// console.log(socialprachar)
// console.log(noofastronouts)
// console.log(altitude)

//13.Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.


// let fuelvalue=parseInt(prompt("enter the fuel values:"))


//    if(fuelvalue>5000 && fuelvalue<60000){
//       console.log(fuelvalue);
      
//    }else{
//       console.log("invalid number")
//    }


//14.Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry by having the loop continue until the user enters an integer from 1 - 7.


// function getnoofastronouts(){
//    let noofastronouts;
//    while(true){
//       noofastronouts=parseInt(prompt("entr the value"))
//       if(Number.isInteger(noofastronouts)&& noofastronouts>=1 && noofastronouts<=7){
//          break;
//       }else{
//          alert('invalid')
//       }
      
//    }
//    return noofastronouts;
    

// }
// astronouts=getnoofastronouts();
//    console.log(astronouts);

//15.Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might not reach 0).

// Function to monitor the shuttle's fuel and altitude
// function monitorShuttle(fuelLevel, numAstronauts) {
//     let altitude = 0;

//     // Loop to monitor fuel and altitude
//     while (fuelLevel >= numAstronauts * 100) {
//         // Update the altitude
//         altitude += 50;
        
//         // Decrease the fuel level
//         fuelLevel -= numAstronauts * 100;

//         // Display the current status
//         console.log(`Altitude: ${altitude} km`);
//         console.log(`Fuel Level: ${fuelLevel} units`);
//     }

//     // Notify when fuel is not enough for another boost
//     console.log("Not enough fuel for another boost.");
// }

// // Example usage
// let initialFuelLevel = 1000; // Example initial fuel level
// let numAstronauts = 4;        // Example number of astronauts

// // Call the function with the initial values
// monitorShuttle(initialFuelLevel, numAstronauts);



//                       LEVEL3

   //1.Write a JS code to print a pattern using for loop

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */


   
      // for(let i=1;i<=8;i++){
      //    let line='';
      //    for(let j=1;j<=i;j++){
      //       line +=j+'';

      //    }
      //    console.log(line.trim());
         
      // }
      
   
   
      //2.write a js code to print Square Star Pattern .
     
      // let n=5;
      // let star="";
      // for(let i=0;i<n;i++){
      //    for(let j=0;j<n;j++){
      //       star +='*   ';

      //    }
      //    star +=' ';
         
      // }
      // console.log(star)


      //3.write a js code to print  Hollow Square Pattern .

      // let n=5;
      // let star="";
      // for(let i=0;i<n;i++){
      //    for(let j=0;j<n;j++){
      //       if(i===0||i===n-1 ||j===0||j===n-1){
      //          star +="*";
      //       }else{
      //          star +=" ";
      //       }
      //    }
      //    star +="\n";
      // }
      // console.log(star)

      //4.write a js code to print  Right Triangle Pattern in Javascript.
      //  let n=5;
        
      // for(let i=0;i<=n;i++){
      //       let line=' ';
      //       for(let j=0;j<=i;j++){
      //          line +='* ';
   
      //       }
      //       console.log(line.trim());
            
      //    }
         
      //5.write a js code to print  left Triangle Pattern in Javascript.

      //  let n=5;
        
      // for(let i=0;i<=n;i++){
      //       let line=' ';
      //       for(let j=0;j<=i;j++){
      //          line +='* ';
   
      //       }
      //       console.log(line.trim());
            
      //    }


      //6.write a js code to print  Downward Triangle Star Pattern


      //  let n=5;
        
      // for(let i=0;i<=n;i++){
      //       let line=' ';
      //       for(let j=0;j<=n-i;j++){
      //          line +='* ';
   
      //       }
      //       console.log(line.trim());
            
      //    }


      //7.print pyramid in js

      // let n=5;
      // for(let i=1;i<n;i++){
      //    let str="*";
      //    let space=" ";
      //    console.log(space.repeat((n-i))+str.repeat(i*2-1));

      // }

      //8.inverted pyramid

      // let n=5;
      // for(let i=n;i>=1;i--){
      //    let str="*";
      //    let space=" ";
      //    console.log(space.repeat((n-i))+str.repeat(i*2-1));

      // }


      //9.diamond shape


      // let n=5;
      // for(let i=1;i<n;i++){
      //    let str="*";
      //    let space=" ";
      //    console.log(space.repeat((n-i))+str.repeat(i*2-1));

      // }for(let i=n;i>=1;i--){
      //    let str="*";
      //    let space=" ";
      //    console.log(space.repeat((n-i))+str.repeat(i*2-1));

      // }