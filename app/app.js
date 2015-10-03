'use strict';

var arr = ['random string 1', ' random string 2', ' random string 3'];

var randomString = function(){
  arr(Math.floor((Math.random() * 3) + 1));
};

$(document).ready(function(){
  $('button').click(function(){
    $('.randstring').appendTo();
    var randomString = $('.randstring').val();
    $('.randstring').html(arr);
  });
});

//what am I doing wrong here? I can't generate a random string from my array, rather the
//click event is generating the whole array to be displayed.
