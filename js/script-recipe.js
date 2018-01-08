$(document).ready(function(){
  /**
 * ocultar elemento js-menu mientras este en pagina recipe.html
 */
  $('.js-menu').hide();

  console.log('he cargado');


})




/**
 * funcion ocultar clase make y añadir clase active
 */
$('.js-show-recipe').click(function(){
  $('.page').removeClass('make');
  $('.js-show-recipe').addClass('active')
  $('.js-show-make').removeClass('active');
})


/**
 * funcion añadir clase make y añadir clase active
 */
$('.js-show-make').click(function () {
  $('.page').addClass('make');
  $('.js-show-make').addClass('active');
  $('.js-show-recipe').removeClass('active');
})


/**
 * funcion para retroceder a index.html dando click al elemento js-back
 */
$('.js-back').click(function(){
  window.location = 'index.html';
})