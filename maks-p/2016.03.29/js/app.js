window.addEventListener('load', function() {
  var appNode = document.querySelector('[data-app-name="ajax"]'),
      button = document.querySelector('[data-id="lunch-button"]');

  button.addEventListener('click', function() {
    /*var req = new XMLHttpRequest();

    req.open('GET', '/server/user.json', true);

    req.onreadystatechange = function(aEvt) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          try {
            var user = JSON.parse(req.responseText);
          } catch (e) {
            console.error(e);
          }

          if (user) {
            var headerTemplate = document.getElementById('header');

            var headerHtml = headerTemplate.innerHTML.replace(/\{\{id\}\}/i, user.id).replace(/\{\{name\}\}/i, user.name);

            appNode.innerHTML = headerHtml;
          }
        } else {
          console.error(req, aEvt);
        }
      }
    };

    req.send(null);*/

     $.when(
       $.ajax('/server/user.json'),
       $.ajax('/templates/header.template.html')
     ).then(function(user, headerTmpl) {
       if (user) {
         var headerHtml = headerTmpl[0].replace(/\{\{id\}\}/i, user[0].id).replace(/\{\{name\}\}/i, user[0].name);

         appNode.innerHTML = headerHtml;
       }
     });

  });
});
