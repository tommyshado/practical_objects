# practical_objects

Cars from where?
One of your friends wants to start a second hand car dealership and is doing some market research.

He gave you some data that he wants some help with analyzing.

For a few towns he recorded the, model, color and make. As he needs to decide which models to sells and where to open his dealership.

Each object in the list looks like this:


var car = {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
}

Cars can be from

Paarl ('CJ')
Bellville ('CY')
Stellenbosch ('CL')
Malmesbury ('CK')
Cape Town ('CA')
Kuilsriver ('CF')
Your friend now wants to know

What make is the most popular? (mostPopularCar)
How many Nissan's are from Malmesbury? (nissansFromCK)
Which town has the most blue cars? (mostBlueCars)
What town has the fewest orange cars? (fewestOrangeCars)
What is the most popular model car overall? (mostPopularModel)
What is the most popular model car in Stellenbosch? (mostPopularCL)
What is the least popular model car in Kuilsriver? (leastPopularCF)
Write functions that can answer these questions for your friend. Each function's name in brackets.

Remember that your functions should correctly if the input data change.

Test your code using assert statements.

Note: there is a global variable called cars that you can use for functions that doesn't take a list of cars as a parameter.

There's more

Your friend also wants this data:

all the cars for any given town carsForTown('townname')
all the cars for a specific color for a specific town numberOfCars('blue', 'town name')
the cars for a specific color & model for a specific town numberOfCarsPerModel('blue', 'model', 'town name')
the most popular color car for any given town mostPopularColor('townname')
Write functions that can answer these questions for your friend, function names in brackets.

These asserts will test your code:

var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
},  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
},  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
},  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
},  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
},  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
},  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
},  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
},  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
},  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
},  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
},  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}]
assert.equal(mostPopularCar(cars), 'Toyota');

assert.equal(nissansFromCK(cars), 1);

assert.equal(mostBlueCars(cars), 'CA');

assert.equal(fewestOrangeCars(cars), 'CA');

assert.equal(mostPopularModel(cars), 'Corolla');

assert.equal(mostPopularCL(cars), 'Polo');

assert.equal(leastPopularCF(cars), 'Juke');

assert.deepEqual(carsForTown("Malmesbury"), [{"color":"orange","make":"Nissan","model":"Juke","reg_number":"CK 32655"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 57166"},{"color":"orange","make":"Ford","model":"Ranger","reg_number":"CK 22692"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 41166"}])
assert.deepEqual(carsForTown('Paarl'), [{"color":"white","make":"Nissan","model":"Micra","reg_number":"CJ 16103"},{"color":"white","make":"Toyota","model":"Hilux","reg_number":"CJ 16455"},{"color":"orange","make":"Ford","model":"Fiesta","reg_number":"CJ 67577"}]);

assert.deepEqual(numberOfCars('blue', 'Cape Town'), [{"color":"blue","make":"Volkswagen","model":"Jetta","reg_number":"CA 46977"},{"color":"blue","make":"Ford","model":"Ranger","reg_number":"CA 77852"}, { "color": "blue", "make": "Ford", "model": "Fiesta",  "reg_number": "CA 34015" }]);
assert.deepEqual(numberOfCars('red', 'Paarl'),[]);

assert.deepEqual(numberOfCarsPerModel('orange','Hilux','Bellville'),[{"color":"orange","make":"Toyota","model":"Hilux","reg_number":"CY 52435"}])
assert.deepEqual(numberOfCarsPerModel('red','Fiesta','Cape Town'),[])

assert.equal(mostPopularColor('Bellville'), 'white');
