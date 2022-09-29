function mostPopularColor(townName) {
	const dictForTown = {
    	'Malmesbury' : 'CK',
      	'Paarl' : 'CJ',
      	'Cape Town' : 'CA',
      	'Stellenbosch' : 'CL',
      	'Bellville' : 'CY',
      	'Kuilsriver' : 'CF'
    };
  
  	let globalReg = "";
    
    for (let keyTown in dictForTown) {
    	if (keyTown === townName) {
        	dictForTown[townName] = dictForTown[keyTown];
          	globalReg = dictForTown[townName];
        }
    }
  	
  	const color = {};
  
  	for (let i = 0; i < cars.length; i++) {
    	const currentObj = cars[i];
      
      	if ((currentObj['reg_number']).startsWith(globalReg)) {
        	if (color[currentObj.color] === undefined) {
        		color[currentObj.color] = 0;
        	}
      		color[currentObj.color]++;   
        };
    }
  	
  	let colorTracker = "";
  	let colorCounter = 0;
  
  	for (let keyColor in color) {
    	if (color[keyColor] > colorCounter) {
        	colorCounter = color[keyColor];
          	colorTracker = keyColor;
        }
    }
  	return colorTracker;
}