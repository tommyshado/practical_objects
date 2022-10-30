// Complete the function that accepts a string parameter, and reverses 
// each word in the string. All spaces in the string should be retained.

// outputs:

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(sentence) {
    let words = sentence.split(" ");
    let sentenceReversed = "";
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i] + " ";
      
      for (let j = currentWord.length - 1; j >= 0; j--) {
        const currentLetter = currentWord[j];
        sentenceReversed += currentLetter;
      }
    }
    return sentenceReversed.trim();
  }

let returnedValue = reverseWords("This is an example!");  // ==> "sihT si na !elpmaxe"
console.log(returnedValue);
// "double  spaces"      ==> "elbuod  secaps"
