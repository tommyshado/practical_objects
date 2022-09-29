function mostPopularModel(carsData) {
    const objCarMap = {};

  for (let i = 0; i < carsData.length; i++) {
      const currentCarObj = carsData[i];
    
        if (objCarMap[currentCarObj.model] === undefined) {
          objCarMap[currentCarObj.model] = 0;
      }
        objCarMap[currentCarObj.model]++;
  }
    
    let totalCar = 0;
    let mostPopularModel = "";
    
    for (let car in objCarMap) {
      if (objCarMap[car] > totalCar) {
          totalCar = objCarMap[car];
            mostPopularModel = car;
      }
  }
    return mostPopularModel;
}