// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function return255(){
    let array = [];
    for (let i = 1; i<=255; i++){
      array.push(i)
    }
    return array
  }
  //console.log(return255());
  
  // Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
  function sumEven(n){
    let sum=0;
    for(let i =0; i<=n; i=i+2){
      sum+=i;
    }
    return sum;
  }
  console.log(sumEven(1000))
  
  // Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
  function sumOdd(n){
    let sum=0;
    for(let i =1; i<=n; i=i+2){
      sum+=i;
    }
    return sum;
  }
  console.log(sumOdd(5000));
  
  // Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
  
  function sumArray(arr){
    let sum= 0;
    for(let i =0; i<arr.length; i++){
      sum+=arr[i]
    }
    return sum;
  }
  console.log(sumArray([-5,2,5,12]))
  // Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
  
  function maxNum(arr){
    let max=0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]>max){
        max= arr[i];
      }
    }
    return max
  }
  //console.log(maxNum([-3,3,5,7]));
  function maxNum1(arr){
    return Math.max(...arr);
  }
  //console.log(maxNum1([-3,3,5,7]));
  
  
  // Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
  function averageArr(arr){
    let sum= 0;
    for(let i =0; i<arr.length; i++){
      sum+=arr[i]
    }
    return sum/arr.length;
  }
  console.log(averageArr([1,3,5,7,20]));
  // Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
  function oddArray(n){
    let array = [];
    for (let i = 1; i<=n; i+=2){
      array.push(i)
    }
    return array
  }
  console.log(oddArray(50));
  // Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
  function greaterThanY(arr, y){
    let array=[];
    for(let i=0; i<arr.length; i++){
      if(arr[i]>y){
        array.push(arr[i]);
      }
    }
    return array
  }
  console.log(greaterThanY([1, 3, 5, 7],3))
  // Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
  function squareArray(arr){
    for(let i =0; i<arr.length; i++){
      arr[i]= arr[i]*arr[i]
    }
    return arr;
  }
  console.log(squareArray([1,2,3,7,-1]));
  // Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
  function noNegative(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i]<0){
        arr[i]=0;
      }
    }
    return arr;
  }
  console.log(noNegative([-1,-4,6,7,9]));
  // Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
  function maxMinAvg(arr){
    let max= 0;
    let min=arr[0];
    let sum = 0;
    for(let i =0; i<arr.length; i++){
      if(arr[i]>0){
        max= arr[i];
      }
      if(arr[i]<min){
        min= arr[i];
      }
      sum+= arr[i];
    }
    return[max,min,sum/arr.length]
  }
  console.log(maxMinAvg([1,5,-10,-2]));
  
  // Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
  function swapValue(arr){
    let temp= arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
  }
  console.log(swapValue([-2,5,10,1]));
  // Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
  function replaceNegative(arr){
    for(let i =0; i<arr.length; i++){
      if(arr[i]<0){
        arr[i]= "Dojo";
      }
  }
    return arr;
  }
  console.log(replaceNegative([-1,-3,2]));
  
  
  