function mostPopularCar(carsData) {
    const objCarMap = {};

  for (let i = 0; i < carsData.length; i++) {
      const currentCarObj = carsData[i];
    
        if (objCarMap[currentCarObj.make] === undefined) {
          objCarMap[currentCarObj.make] = 0;
      }
        objCarMap[currentCarObj.make]++;
  }
    
    let totalCar = 0;
    let mostPopular = "";
    
    for (let car in objCarMap) {
      if (objCarMap[car] > totalCar) {
          totalCar = objCarMap[car];
            mostPopular = car;
      }
  }
    return mostPopular;
}