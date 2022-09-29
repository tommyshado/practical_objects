function numberOfCarsPerModel(color, model, townName) {
	const dictForTown = {
    	'Malmesbury' : 'CK',
      	'Paarl' : 'CJ',
      	'Cape Town' : 'CA',
      	'Stellenbosch' : 'CL',
      	'Bellville' : 'CY',
      	'Kuilsriver' : 'CF'
    }
    
    let globalReg = "";
    
    for (let keyTown in dictForTown) {
    	if (keyTown === townName) {
        	dictForTown[townName] = dictForTown[keyTown];
          	globalReg = dictForTown[townName];
        }
    }
  
  	let carsWithColorAndModel = [];
  	
	for (let i = 0; i < cars.length; i++) {
      	const currentObj = cars[i];
      
    	for (let key in currentObj) {
        	if ((currentObj[key]).startsWith(globalReg) && currentObj.color === color && currentObj.model === model) {
            	carsWithColorAndModel.push(currentObj);
            }
        }
    }
  	return carsWithColorAndModel;
}