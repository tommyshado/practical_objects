function printShoppingList(lstOfProducts) {
    console.log('Shopping list:');
    for (let i = 0; i < lstOfProducts.length; i++) {
        const currentObjName = lstOfProducts[i].itemName;
        const currentObjPrice = lstOfProducts[i].price;
      
        console.log(`* ${currentObjName} @ R${currentObjPrice.toFixed(2)}`);
    }
}

var shoppingList = [
  { itemName : 'Bread', price : 11.00 },
  { itemName : 'Milk', price : 7.00 },
  { itemName : 'Cheese', price : 19.50 }
];

printShoppingList(shoppingList);