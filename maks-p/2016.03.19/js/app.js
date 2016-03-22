window.addEventListener('load', function() {
  var regForm = document.querySelector('[data-id="reg-form"]'),
      capchaNode = document.querySelector('[data-id="capcha"]'),
      reloadCapchaNode = document.querySelector('[data-id="reload-capcha"]'),
      capcha;

  var getRandom = function() {
    return Math.random().toString(36).substr(2, 4);
  };

  var reloadCapcha = function() {
    capcha = getRandom();
    capchaNode.innerHTML = capcha;
  };

  reloadCapcha();

  reloadCapchaNode.addEventListener('click', reloadCapcha);

  regForm.addEventListener('submit', function(e) {
    var requiredInputs = regForm.querySelectorAll('[required]'),
        requiredInputsLength = requiredInputs.length,
        i = 0;

    for (; i < requiredInputsLength ;i++) {
      var node = requiredInputs[i];
      if (!node.value) {
        console.log('Field ' + node.name + ' is required');
      }
    }

    if (!/\S+@\S+\.\S+/.test(regForm.email.value)) {
      console.log('Field Email is not correct format');
    }

    if (regForm.capcha.value !== capcha) {
      console.log('Capcha is not correct. Are you robot?');
    }

    /*if (!regForm.name.value) {
      alert('Field Name is required');
    }

    if (!regForm.email.value) {
      alert('Field Email is required');
    } else if (!/\S+@\S+\.\S+/.test(regForm.email.value)) {
      alert('Field Email is not correct format');
    }

    if (!regForm.password.value) {
      alert('Field Password is required');
    } else if (regForm.password.value !== regForm.confirmPassword.value) {
      alert('Passwords dosn`t match');
    }

    if (!regForm.confirmPassword.value) {
      alert('Field Confirm Password is required');
    }

    if (!regForm.capcha.value) {
      alert('Field Capcha is required');
    } else if (regForm.capcha.value !== capcha) {
      alert('Capcha is not correct. Are you robot?');
    }*/

    e.preventDefault();
    return false;
  });
});
