$(document).ready(function(){
  console.log('he cargado');
})

$('.js-show-recipe').click(function(){
  $('.page').removeClass('make');
})

$('.js-show-make').click(function () {
  $('.page').addClass('make');
})