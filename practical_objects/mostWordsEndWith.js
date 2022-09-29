function mostWordsEndWith(sentence) {
	let arrayWords = sentence.split(" ");
  
  	const objEnds = {};
  	const results = { letter: undefined, words: undefined };
    
  	for (let i = 0; i < arrayWords.length; i++) {
    	const currentWord = arrayWords[i];
      	
      	if(objEnds[currentWord[currentWord.length - 1]] === undefined) {
        	objEnds[currentWord[currentWord.length - 1]] = 0;
        }
      	objEnds[currentWord[currentWord.length - 1]]++;
    }
  
  	let maxWord = 0;
  	let maxLetter = "";
  
  	for (let letter in objEnds) {
    	if (objEnds[letter] > maxWord) {
        	maxWord = objEnds[letter];
          	maxLetter = letter;
        }
    }
  
  	results.letter = maxLetter;
  	let newWordsArr = [];
  
  	for (let j = 0; j < arrayWords.length; j++) {
      if ((arrayWords[j]).endsWith(maxLetter)) {
          newWordsArr.push(arrayWords[j]);
      }
    }
  	results.words = newWordsArr;
  	return results;
}

var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
console.log(mostWordsEndWith(sentence));