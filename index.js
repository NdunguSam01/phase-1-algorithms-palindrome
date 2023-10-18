function reverseString(string)
{
    string=string.toLowerCase()
    
    let reversedString=""

    for (let i = string.length - 1; i >= 0; i--) 
    {
        reversedString += string[i];
    }
    return reversedString
}

function isPalindrome(word) 
{
    word=word.toLowerCase()
    const reversedString=reverseString(word)

    let checkPalindrome= (word===reversedString) ? true : false

    return checkPalindrome
}
console.log(isPalindrome("Madam"))

/* 
  Add your pseudocode here
  function reverseString(string)
  {
    convert the string to lower case
    
    loop over the string to reverse it
      return the reversed string as the output
  }

  function isPalindrome(word)
  {
    converting the word passed to lower case

    invoking the reverseString function and reversing the string passed by the user

    checking if the reversed string is equal to the passed in string
      return true or false
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;