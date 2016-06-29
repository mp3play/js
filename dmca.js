<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
//<script>
var request = $.ajax({
  url: "https://gist.githubusercontent.com/phquhai/728404964eb4bd62f1d0e7f762db8c8a/raw",
  method: "GET",
  data: {
    
  },
  dataType: "json"
});

request.always(function(response, status) {
  var path = window.location.pathname;
  if (status === 'success' && typeof response === 'object' && response !== null) {
    if (typeof response.latest === 'object') {
      for (var i in response.latest) {
        if (response.latest.hasOwnProperty(i)) {
          var term = response.latest[i];
          if (path.match(term)) {
            $('meta[name=robots]').remove();
            $('head').append('<meta name="robots" content="noindex,nofollow" />');
            window.location.href = "http://" + window.location.hostname + "/mp3";
            break;
          }
        }
      }
    }
  }
});

request.fail(function(jqXHR, textStatus) {
  //alert( "Request failed: " + textStatus );
});
//</script>
