function carsSort() {
    /* var car1 = {};
    car1.FirmName = prompt('Enter firm name of the car No.1:');
    car1.ModelName = prompt('Enter model name of the car No.1:');
    car1.EngineDisp = prompt('Enter engine displacement of the car No.1:');
    
    var car2 = {};
    car2.FirmName = prompt('Enter firm name of the car No.2:');
    car2.ModelName = prompt('Enter model name of the car No.2:');
    car2.EngineDisp = prompt('Enter engine displacement of the car No.2:');
    
    var car3= {};
    car3.FirmName = prompt('Enter firm name of the car No.3:');
    car3.ModelName = prompt('Enter model name of the car No.3:');
    car3.EngineDisp = prompt('Enter engine displacement of the car No.3:'); */
    
    var carArr = [];
    
    for(var j = 0; j<=5; j++){
        var car = {};
        car.FirmName = prompt('Enter firm name of the car');  
        car.ModelName = prompt('Enter model name of the car');
        car.EngineDisp = prompt('Enter model name of the car');
        carArr.push(car);
    }
    
    for(var i = 0; i < carArr.length; i++ ) {
        if(+carArr[i].EngineDisp > 2.0){
            console.log(carArr[i]);
        }
    }
}


function sortMaxym() {
    var carsCount = parseInt(prompt('How many cars you are goin to enter?:')),
    cars = [],
    i = 0;
    
for(; i < carsCount; i++){
    var carString = prompt('Input car, for separate property use ";":'),
        carArray = carString.split(';');
    
    cars.push({
        FirmName: carArray[0],
        ModelName: carArray[1],
        EngineDisp: parseFloat(carArray[2])
        
    });
}
    
    cars.sort(function(a, b){
        if(a.FirmName > b.FirmName){
            return -1;
        }else if(a.FirmName < b.FirmNamename){
            return 1; 
        }else{
            return 0;
        }
    })
    
    console.log(cars); 
    
    for(var i = 0; i < carsCount; i++ ) {
        if(cars[i].EngineDisp >= 2.0){
            console.log(cars[i]);
        }
    }
       
}
    
sortMaxym()    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    