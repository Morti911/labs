var carsCount = +prompt('Input cars count'),
    cars = [],
    i = 0;

for (; i < carsCount; i++) {
  var carString = prompt('Input car for separate property using ";"'),
      carArray = carString.split(';'); // [0,1,2]

  cars.push({
    FirmName: carArray[0],
    ModelName: carArray[1],
    EngineDisplacement: parseFloat(carArray[2]) //2.3
  });
}

console.log('All cars', cars);

for (i = 0; i < carsCount; i++) {
  if (cars[i].EngineDisplacement >= 2) {
    console.log(cars[i]);
  }
}

cars.sort(function(a, b) {
  if (a.FirmName < b.FirmName) {
    return -1;
  } else if (a.FirmName > b.FirmName) {
    return 1;
  }

  return 0;
});

console.log(cars);
