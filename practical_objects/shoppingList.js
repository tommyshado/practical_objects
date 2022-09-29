function shoppingList(arrayLst) {
	let totalPrice = 0;
  
  	for (let i = 0; i < arrayLst.length; i++) {
    	const currentObjPrice = arrayLst[i].price;
      
      	totalPrice += currentObjPrice;
    }
  	return totalPrice;
}