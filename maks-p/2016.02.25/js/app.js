while(true) { // for (;;)
  var userInput = prompt('Input your rate'),
      rate = parseInt(userInput, 10), // +userInput
      mark;

  if (userInput === 'stop') {
    break;
  } else if (typeof rate === 'number' && !isNaN(rate)) {
    if (rate >= 95 && rate <= 100) {
      mark = 'A';
    } else if (rate >= 95 && rate <= 100) {
      mark = 'B';
    } else if (rate >= 85 && rate <= 94) {
      mark = 'C';
    } else if (rate >= 65 && rate <= 74) {
      mark = 'D';
    } else if (rate >= 60 && rate <= 64) {
      mark = 'E';
    } else if (rate >= 0 && rate <= 59) {
      mark = 'Fx';
    } else {
      mark = 'It`s imposible';
    }

    alert(mark);
  } else {
    alert('Uncorrect input')
  }
}
