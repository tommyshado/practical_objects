function mostBlueCars(carsData) {
    const regObj = {};
    
    for (let i = 0; i < carsData.length; i++) {
        const currentObjCar = carsData[i]; 
      let currentReg = currentObjCar['reg_number'];
      let cond = currentReg && currentObjCar.color === 'blue';
      
      if (cond) {
        regObj[currentReg] = 0;
      }
      regObj[currentReg]++;
    }
    
    let maxRegBlue = 0;
    let maxReg = "";
    
    for (let regKey in regObj) {
        if (regObj[regKey] > maxRegBlue) {
        maxRegBlue = regObj[regKey];
        maxReg = regKey;
      }
    }
    return `${maxReg[0]}${maxReg[1]}`;
  }