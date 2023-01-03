//Create def. parameter, index and assign to 0
function sum(array, index = 0) {
    //Base case: if index reaches the last valid index
      if(index === array.length - 1) return array[array.length - 1];
    
    return array[index] + sum(array, index + 1);
  }
  
  // uncomment these to check your work
   // console.log(sum([1,1,1])); // -> returns 3
   // console.log(sum([1,2,3,4,5,6])); // -> returns 21