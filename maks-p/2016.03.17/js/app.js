window.addEventListener('load', function() {
  var button = document.getElementById('button');
  var form = document.getElementById('form');

  button.addEventListener('click', function(event) {
    console.log(document.getElementById('input').value);

    event.stopPropagation();
    event.preventDefault();
    return false;
  });

  form.addEventListener('click', function(event) {
    console.log(event.target, event.currentTarget);
  });
});
