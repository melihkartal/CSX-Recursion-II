function countdown(n) {
    //Check if n is 0(exclusive)
      if(n === 0) return;
    //Else, print the value of n and invoke recursive call
    console.log(n);
    return countdown(n-1);
  }
  
  // To check if you've completed it, uncomment these console.logs!
  // countdown(5);
  // countdown(10);