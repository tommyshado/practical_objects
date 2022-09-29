function nissansFromCK(carsData) {
	let nissanCounter = 0;
  
	for (let i = 0; i < carsData.length; i++) {
    	const currentCarObj = carsData[i];
      
      	if (currentCarObj.make === 'Nissan' && (currentCarObj['reg_number']).startsWith('CK')) {
        	nissanCounter++;
        }
    }
  	return nissanCounter;
}