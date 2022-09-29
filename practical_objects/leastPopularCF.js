function leastPopularCF(carsData) {
    const regMap = {};

    for (let i = 0; i < carsData.length; i++) {
      const currentObjCar = carsData[i];
        const currentReg = currentObjCar['reg_number'];
   
        let kuilsriverReg = currentReg.startsWith('CF');
        
        if (kuilsriverReg) {
          regMap[currentObjCar.model] = 0;
      }
        regMap[currentObjCar.model]++;
  }

    let leastPop = '';
    let leastNum = 0;
    
    for (let regKey in regMap) {
      if (regMap[regKey] <= 1) {
          leastNum = regMap[regKey];
            leastPop = regKey;
            break;
      }
  }
    return leastPop;
}