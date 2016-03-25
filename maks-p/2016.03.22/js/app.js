window.addEventListener('load', function() {
  var searchForm = document.querySelector('[data-id="search-form"]'),
      searchTextInput = searchForm['search-text'],
      listNode = document.querySelector('[data-id="list"]'),
      noDataNode = document.querySelector('[data-id="no-data"]');

  var search = function(db, searchText) {
    var result = db.filter(function(value) {
      return value.indexOf(searchText) === 0;
    });

    return result;
  };

  searchTextInput.addEventListener('keyup', function(e) {
    var searchText = searchTextInput.value;

    if (searchText) {
      var result = search(searchDb, searchText),
          listHtml = '',
          resultLength = result.length,
          i = 0;

      if (resultLength) {
        for (;i < resultLength;i++) {
          var value = result[i];

          listHtml += '<li data-search="' + value + '">' + (i+1) + ': ' + value + '</li>';
        }

        listNode.innerHTML = listHtml;
        noDataNode.style.display = 'none';
      } else {
        listNode.innerHTML = '';
        noDataNode.style.display = 'block';
      }
    } else {
      listNode.innerHTML = '';
    }
  });

  listNode.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
      searchTextInput.value = e.target.getAttribute('data-search');
    }
  });

  searchForm.addEventListener('submit', function(e) {

    window.open('https://www.google.com.ua/webhp?#q=' + searchTextInput.value.split(' ').join('+'));

    e.preventDefault();
    return false;
  });
});
