var functions = {
  show: show,
  hide: hide,
  setColor: setColor,
  slideUp: slideUp,
  slideDown: slideDown,
  fadeOut: fadeOut
}

window.addEventListener('load', function() {
  var actionsNode = document.querySelector('[data-id="actions"]'),
      selectorInput = document.querySelector('input[name="selector"]');
      colorInput = document.querySelector('input[name="color"]');

   actionsNode.addEventListener('click', function(e) {
     if (e.target !== e.currentTarget) {
       var action = e.target.getAttribute('action'),
           el = document.querySelector(selectorInput.value);

       if (action == 'setColor') {
         functions[action](el, colorInput.value);
       } else {
         functions[action](el);
       }
     }

     e.stopPropagation();
     return false;
   });
});

function show(el) {
  el.style.display = '';
}

function hide(el) {
  el.style.display = 'none';
}

function setColor(el, color) {
  el.style.color = color;
}

function slideUp(el) {
  el.style.overflow = 'hidden';

  var interval = setInterval(function() {
    if (el.offsetHeight <= 0) {
      clearInterval(interval);
    } else {
      el.style.height = Math.floor(el.offsetHeight/2) + 'px';
    }
  }, 200);
}

function slideDown(el) {
  var clone = el.cloneNode(true);
  clone.style.visibility = 'hidden';
  clone.style.height = '';
  document.body.appendChild(clone);

  var cloneHeight = clone.offsetHeight;

  var interval = setInterval(function() {
    if (el.offsetHeight >= cloneHeight) {
      clearInterval(interval);
    } else {
      el.style.height = el.offsetHeight + 5 + 'px';
    }
  }, 200);

  document.body.removeChild(clone);
}

function fadeOut(el) {
  var interval = setInterval(function() {
    var opacity = el.style.opacity || 1;

    if (opacity <= 0) {
      el.style.display = 'none';
      clearInterval(interval);
    } else {
      el.style.opacity = opacity - 0.1;
    }
  }, 200);
}
