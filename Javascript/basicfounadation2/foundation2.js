// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function changePositive(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i]>0){
        arr[i]="big"
      }
    }
    return arr;
  }
  console.log(changePositive([-1,3,5,-1,0]));
  // Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
  function lowHigh(arr){
      let max= 0;
      let min=arr[0];
      for(let i =0; i<arr.length; i++){
        if(arr[i]>0){
          max= arr[i];
        }
        if(arr[i]<min){
          min= arr[i];
        }
      }
    console.log(min);
    return max;
  }
  console.log(lowHigh([1,4,7,9,-1,-6,8,80]));
  
  // Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
  function printAndReturn(arr){
    console.log(arr[arr.length-2]);
    for(let i =0; i<arr.length; i++){
      if(arr[i]%2 !== 0){
        return arr[i]
      }
    }
  }
  console.log(printAndReturn([1,4,7,9,-1,-6,8,80]))
  // Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
  function doubles(array){
    const arrayNew = [];
    for (let i=0; i<array.length; i++){
      arrayNew.push(2*array[i]);
    }
    return arrayNew;
  }
  console.log(doubles([1,2,3]));
  
  // Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
  function countPositives(array){
    let count=0;
    for(let i =0; i<array.length; i++){
      if(array[i]>0){
        count++;
      }
    }
    array[array.length-1]= count;
    return array
  }
  console.log(countPositives([-1,1,1,1]));
  
  // Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
  function evenOdds(arr){
    let odd=0;
    let even =0;
    for(let i =0; i<arr.length; i++){
      if(arr[i]%2 === 1 || arr[i]%2 === -1){
        odd++;
        even = 0;
        if(odd === 3){
          console.log( "That's odd!");
          odd = 0;
        }
      }
      else{
        even++;
        odd= 0;
        if(even === 3){
          console.log( "Even more so!");
          odd = 0;
        }
        
      }
    }
  }
  evenOdds([1,3,2,4,6,7,9,1])
  
  // Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
  function incrementSeconds(array){
    for(let i=0; i<array.length; i++){
      if(i%2 !== 0){
        array[i]=  array[i]+1;
      }
      console.log(array[i]);
    }
    return array;
  }
  console.log(incrementSeconds([1,2,3,4,5,6,7]));
  
  // Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
  function previousLength(arr){
   for (let i = arr.length-1; i > 0; i--){
          arr[i] = arr[i-1].length;
      }
      return arr;
  }
  console.log(previousLength(["hello", "dojo", "awesome"]));
  
  // Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
  function addSeven(arr){
    const newArray= [];
    for (let i =0; i<arr.length; i++){
      newArray.push(arr[i]+7);
    }
    return newArray;
  }
  console.log(addSeven([1,2,3]));
  // Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values
  function reverseArray(arr){
    return arr.reverse();
  }
  console.log(reverseArray([1,2,3,4,5,6]));
  
  function reverseArray1(arr){
    for(let i = 0; i<(arr.length/2); i++){
      let temp = arr[i];
      arr[i]= arr[arr.length-1-i];
      arr[arr.length-1-i]= temp;
    }
    return arr;
  }
  
  console.log(reverseArray1([1,2,3,4,5,6]));
  
  // Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
  function negatives(arr){
    for (let i=0; i<arr.length; i++){
      if(arr[i]>0){
        arr[i]= arr[i]*-1;
      }
    }
    return arr;
  }
  console.log(negatives([1,-3,5]));
  
  // Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
  function hungry(arr){
    for(let i =0; i <arr.length; i++){
      if(arr[i]=== "food"){
        console.log("yummy")
    }
      
  }
    if(!arr.includes("food")){
        console.log("I'm hungry")
      }
  }
  hungry(["salt","food", "sugar","banana","food"])
  function hungry1(arr){
    let goodFood = false;
    for(let i =0; i <arr.length; i++){
      if(arr[i]=== "food"){
        console.log("yummy")
        goodFood = true;
    }
      
  }
    if(goodFood === false){
        console.log("I'm hungry")
      }
  }
  hungry1(["salt", "sugar","banana"])
  // Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
  function swapTowardCenter(arr){
      for (var i = 0; i < arr.length/2; i+=2){
          var temp = arr[i];
        
          arr[i] = arr[arr.length-1-i];
          arr[arr.length-1-i] = temp;
      }
      return arr;
  }
  console.log(swapTowardCenter([6,2,4,3,5,1]))
  // Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
  function scaleArray(arr, num){
      for (let i = 0; i < arr.length; i++){
          arr[i] = arr[i]*num;
      }
      return arr;
  }
  console.log(scaleArray([1,2,3,4],4));