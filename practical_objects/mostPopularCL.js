function mostPopularCL(carsData) {
	const regMap = {};
  
  	for (let i = 0; i < carsData.length; i++) {
    	const currentObjCar = carsData[i];
      	const currentReg = currentObjCar['reg_number'];
     
      	let stelliesReg = currentReg.startsWith('CL');
      	
      	if (stelliesReg) {
        	regMap[currentObjCar.model] = 0;
        }
      	regMap[currentObjCar.model]++;
    }
  	
  	let mostPop = "";
  	let maxPop = 0;
  
  	for (let car in regMap) {
    	if (regMap[car] > maxPop) {
        	maxPop = regMap[car];
          	mostPop = car;
            break;
        }
    }
  	return mostPop;
}