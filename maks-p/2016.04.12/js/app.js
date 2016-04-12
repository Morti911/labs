window.addEventListener('load', function() {
  var animalTypeInput = document.querySelector('[data-id="animal-type"]'),
      animalTypesSelect = document.querySelector('[data-id="animal-types"]'),
      createButton = document.querySelector('[data-action="create"]'),
      getDataButton = document.querySelector('[data-action="getData"]'),
      resultBox = document.querySelector('[data-id="result"]');
      window.animals = {};

      createButton.addEventListener('click', function() {
        var animalType = animalTypeInput.value;

        if (animalType && !animals[animalType]) {
          animals[animalType] = new constructors.Animal(animalType);

          var option = document.createElement('option');

          option.value = animalType;
          option.innerHTML = animalType;
          animalTypesSelect.appendChild(option);

          animalTypeInput.value = '';
        }
      });

      getDataButton.addEventListener('click', function() {
        var selectedAnimal = animalTypesSelect.value;

        if (selectedAnimal) {
          animals[selectedAnimal].getData(function(data) {
            resultBox.innerHTML = data;

          }, function(error) {
            resultBox.innerHTML = 'Not found.';
            console.error(error);
          });
        }
      });
});
