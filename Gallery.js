(function() {
  var flickerAPI = "https://api.flickr.com/services/feeds/groups_pool.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    id: "37996591093@N01",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#innerBanner" ).wrap( "<li></li>" );
        if ( i === 100 ) {
          return false;
        }
      });
    });
})();