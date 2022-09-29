function fewestOrangeCars(carsData) {
    const regObj = {};
    
    for (let i = 0; i < carsData.length; i++) {
        const currentObjCar = carsData[i]; 
      let currentReg = currentObjCar['reg_number'];
      let cond = currentReg && currentObjCar.color === 'orange';
      
      if (cond) {
        regObj[currentReg] = 0;
      }
      regObj[currentReg]++;
    }
    
    let pairArrReg = [];
    
    for (let key in regObj) {
        if (regObj[key] !== 1) {
        pairArrReg.push(key)
      }
    }
    let lastReg = pairArrReg[pairArrReg.length - 1];
    return `${lastReg[0]}${lastReg[1]}`
  }