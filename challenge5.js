function palindrome(string) {
	// Use Regex to sanitize input string for testcases.
  string = string.replace(/\W/ig, '').toLowerCase();
                          
  //Base case 1: If we've reached the point where the string's length is less than or equal to 1, return true
  if(string.length <= 1) return true;
  
  //Base case 2: If the beginning and ending characters of the string don't match up, return false
  if(string[0] !== string[string.length - 1]) return false
  
  //Recursive case: call palindrome , but pass in a sliced version of the string w/ first and last chars removed. 
  return palindrome(string.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false