function testArray(arr){
    let sum= 0;
  for(let i =0; i<arr.length; i++){
  sum += arr[i];
    console.log(`num ${arr[i]}, sum ${sum} `)
  }
//   Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21
  
  }
  testArray([6,3,5,1,2,4]);
  function multiplyArray(arr){
    for(let i=0; i<arr.length; i++){
      arr[i]= arr[i]*i
  }
    return arr;
  }
  console.log(multiplyArray([6,3,5,1,2,4]));
//   [0,3,10,3,8,20]