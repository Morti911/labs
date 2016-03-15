'use strict';

function declare(className, superClass, props) {
    
    if (typeof className !== 'string') {
        props = superClass;
        superClass = className;
        className = undefined;
    }
    
    var classConstructor = function (name) {
        this.name = name;
    },
        
    superClassLength;
    
    if(superClass !== null && superClass.length){
        superClassLength = superClass.length
    }
        
        
    if (typeof superClass === 'function') {
        
        classConstructor.prototype = Object.create(superClass.prototype);

    } else if (typeof superClass === 'object' && superClassLength && superClassLength !== 0) {
        
    var i = 0,
    method,    
    tempFunction = function () {};
        
    for (; i < superClassLength; i++) {
    
        for (method in superClass[i].prototype) {
            
//         classConstructor.prototype[method] = superClass[i].prototype[method]; // тоже варіант!
           tempFunction.prototype[method] = superClass[i].prototype[method];
            
            }
        }
        
        classConstructor.prototype = new tempFunction();
    }
    
    for (method in props) {
    
        classConstructor.prototype[method] = props[method];
    }
    
    classConstructor.prototype._className = className;
    
    if (className) {
        window[className] = classConstructor;
    } else {
        return classConstructor;
    }
}

declare('Animal', null, {
    say: function() {console.log(this.name);},
    getClass: function() {console.log(this._className);}
});

declare('Smarty', null, {
    serve: function() {console.log("I'm serving");}
});

declare('Cat', Animal, {
    run: function() {console.log("run like hell!");}
});

declare('Dog', [Animal, Smarty], {
    sit: function() {console.log('I am siting!');}   
});

(function(){
    var AnimalLocal = declare(null, {
        say: function() {console.log('local say');}
    });
    
    var catLocal = new AnimalLocal();
    catLocal.say();
})();


var cat = new Animal('Mittens');
console.log(cat);
cat.say();
console.log(cat.name);

var fiona = new Cat('Fiona');
fiona.say();
fiona.run();

var rex = new Dog('Rex');
rex.sit();
rex.say();

 