window.addEventListener('load', function() {
  $ajax({
    url: 'http://api.randomuser.me/?results=10',
    responseType: 'json',
    success: function(users) {
      var usersCount = users.results.length,
          usersList = '',
          usersListPreview = '',
          i = 0;

      if (usersCount) {
        for (;i < usersCount; i++) {
          usersList += '<li> <img src="' + users.results[i].picture.medium + '" data-popup="' + users.results[i].picture.large + '" alt="" /></li>';

          usersListPreview += '<li> <img src="' + users.results[i].picture.thumbnail + '" alt="" /></li>';
        }
      }

      document.querySelector('[data-id="gallery-preview"]').innerHTML = usersList;

      document.querySelector('[data-id="gallery-thumbnails"]').innerHTML = usersListPreview;

      Gallery.init(document.querySelector('[data-id="gallery"]'));

      Popup.init({
        queryBy: '[data-popup]',
        urlAttr: 'data-popup'
      });
    }
  });
});
