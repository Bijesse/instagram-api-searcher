$(document).ready(
  function() {
    $('#search-btn').click(
      function() {
        searchInstagram(
          $('#search-query').val(),
          8,
          function(results) {
            console.log(results);
            $('#search-results').empty();
            $.each(
              results.data,
              function(index, result) {
                $('#search-results').append('<img src="' + result.images.thumbnail.url + '">');
              }
            )
          }
        )
      }
    );
  }
);