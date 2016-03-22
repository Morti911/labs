window.addEventListener('load', function() {
  var mainForm = document.getElementById('mainForm');

  mainForm.a.addEventListener('keypress', function(e) {
    var input = parseInt(String.fromCharCode(e.keyCode), 10);
    if(typeof input !== 'number' || isNaN(input)) {
      e.preventDefault();
      return false;
    }
  });

  mainForm.addEventListener('submit', function(e) {
    var a = +mainForm.a.value,
        b = +mainForm.b.value,
        operation = mainForm.operation.value,
        result;

        switch (operation) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            result = a / b;
            break;
        }

    document.querySelector('[data-id="result"]').innerHTML = result;

    e.preventDefault();
    return false;
  });
});
