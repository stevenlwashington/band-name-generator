// update the <p> on click slide
'use strict';

$(function(){

  $("button").click(function(){
    $.get('adjective', function(response){
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

  });

});

