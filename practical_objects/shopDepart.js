var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];

function mostProfitableDay(salesData2) {  
    let salesDay = {};
    
    for (let i = 0; i < salesData2.length; i++) {
        let currentObjSale = salesData2[i];
      let salesPerDay = currentObjSale.day;
      
      if (salesDay[salesPerDay] === undefined) {
        salesDay[salesPerDay] = 0;
        
      } else {
        salesDay[salesPerDay] += currentObjSale.sales;
      }
    }
    
    let maxSaleDay = 0;
    let maxSalePerDay = "";
    
    for (let key in salesDay) {
      
        if (salesDay[key] > maxSaleDay) {
        maxSaleDay = salesDay[key];
        maxSalePerDay = key;
      }
    }
    
    return maxSalePerDay;
}

console.log(mostProfitableDay(salesData2));