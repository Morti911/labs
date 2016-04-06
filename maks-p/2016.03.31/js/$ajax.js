function $ajax(obj) {
  /*
    obj: {
      method: 'GET'|'POST'|'PUT'|'DELETE'
        | default: 'GET'
      url: String
      async: true|false
        | default: true
      responseType: String
        | default: 'text'
      success: function() {}
      error: function() {}
        | function() { console.error(responseText) }
      data: {}
        | default null
    }
  */
  if (!obj) {
    obj = {};
  }

  var method = obj.method || 'GET',
      url = obj.url,
      asynchronous = obj.async || true,
      responseType = obj.responseType || 'text',
      success = obj.success,
      error = obj.error || function(req, aEvt) {
        console.error(req, aEvt);
      },
      data = obj.data || null;

      var req = new (XMLHttpRequest || ActiveXObject)();

      req.open(method, url, asynchronous);

      req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      req.onreadystatechange = function(aEvt) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            if (responseType === 'json') {
              var responseJson;

              try {
                responseJson = JSON.parse(req.responseText);
              } catch (e) {

              }
            }
            
            success && success(responseJson || req.responseText, req);
          } else {
            error(req, aEvt);
          }
        }
      };

      req.send(data);
}
