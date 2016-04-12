(function() {
  'use strict';

  function Animal(type) {
    this.type = type;
  }

  Animal.prototype.getData = function (success, error) {
    $ajax({
      url: '/animals/' + this.type + '.json',
      success: success,
      error: error
    });
  };

  if (!window.constructors){
    window.constructors = {
      Animal: Animal
    };
  }
})();
