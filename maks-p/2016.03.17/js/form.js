window.addEventListener('load', function() {
  var mainForm = document.getElementById('mainForm');

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
