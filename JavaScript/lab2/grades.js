var arr = [4, 'Hello', false, [0, 1]];

/*************sorting Arrey*********/
var arr = [1,2,4,7,6,4,3,2,6,9,9,654,3,6,9,8765,3,7];

arr.sort(function(a, b){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else{
        return 0;
    }
})

/*
var grades = function() {
    
    var userGrade = parseInt(prompt('Enter your grade(number between 0 and 100):'), 10);
    
    if(typeof userGrade === 'number' && !isNaN(userGrade)){
        
    if(userGrade >= 0 && userGrade < 60){
        
        userGrade = "Fx";
        
    }else if(userGrade >= 60 && userGrade < 65){
        
        userGrade = "E";
        
    }else if(userGrade >= 65 && userGrade < 75){
        
        userGrade = "D";
        
    }else if(userGrade >= 75 && userGrade < 85){
        
        userGrade = "C";
        
    }else if(userGrade >= 85 && userGrade < 95){
        
        userGrade = "B";
        
    }else if(userGrade >= 95 && userGrade <= 100){
        
        userGrade = "A";
        
    }else{
        
        console.log('Please enter a valid number!');   
        
        }
        
    alert(userGrade);    
        
    }else{
        
    alert('Wrong!');
        
    }
}

grades(); */