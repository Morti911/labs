;(function() {
  'use strict';

  var config = {};
  var template;

  var showPopup = function(e) {
    var url = e.target.getAttribute(config.urlAttr);

    var onTemplateLoaded = function () {
      var popupHandlebars = Handlebars.compile(template);

      var popupHtml = popupHandlebars({
        modalId: '',
        name: '',
        content: '<img src="' + url + '"/>',
        footer: ''
      });

      document.body.innerHTML += popupHtml;
    };

    if (template) {
      onTemplateLoaded();
    } else {
      $ajax({
        url: '/templates/modal.html',
        success: function(result) {
          template = result;
          onTemplateLoaded();
        }
      });
    }
  };

  var init = function(userConfig) {
    config = userConfig;

    var popupNodes = document.querySelectorAll(config.queryBy);

    Array.prototype.forEach.call(popupNodes, function(popupNode) {
      popupNode.addEventListener('click', showPopup);
    })
  };

  window.Popup = {
    init: init
  };
})();
