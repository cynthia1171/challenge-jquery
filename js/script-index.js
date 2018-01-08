$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	(renderHighlightedRecipes(recipesArray));
	(renderActivities(activities));

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for(var i=0; i<recipesArray.length; i++){
		if (recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	//var newArray = [];
	$('.btn-primary').click(function(){
		var title = recipe.title;
		var name = recipe.source.name;
		var image = recipe.name;	
		
		$('.list-recipes').append('<a class="item-recipe" href="#">'+
																'<span class= "attribution">'+
																	'<span class="title-recipe">'+title+'</span>'+
																	'<span class="metadata-recipe">'+
																		'<span class="author-recipe">'+name+'</span>'+
																		'<span class="bookmarks-recipe">'+
																			'<span class="icon-bookmark"></span>'+
																		'</span>'+
																	'</span>'+
  															'</span >'+

																'<img src="img/recipes/320x350/'+image+'.jpg" />'+
															'</a >'
															)
	});
}




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	for (var i = 0; i < activities.length; i++) {
		renderActivity(activities[i]);
	} 
	if(activities.length==0){
		$('.wrapper-message').css('display','block');
		
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
	var avatar = recipe.userAvatar;
	var name = recipe.userName;
	var title = recipe.recipeName;
	var texto = recipe.text;
	var place = recipe.place;
	var image = recipe.image;	
	$('.list-activities').append('<a href="#" class="item-activity">'+
																	'<span class= "attribution">'+
																		'<span class="avatar">'+
																			'<img src="'+avatar+'" class="image-avatar">'+
																		'</span>'+
																		'<span class="meta">'+
																			'<span class="author">'+name+'</span>'+
																			'<span class="recipe">'+title+'</span>: '+texto+
																			'<span class="location">&mdash;'+place+'</span>'+
																		'</span>'+
																	'</span >'+
																	'<div class="bg-image" style="background-image: url(' + image +');"></div>'+
																'</a >'
															);
}

/**
 * Ocultar elemento dependiendo de la pagina en la que este.
 * Primero obtengo la url y la convierto en un array
 * Luego tomo el ultimo elemento del array formado, este indica en que pagina estoy, si en index.html o recipe.html
 * Dependiendo en que pagina me encuentre oculto el elemento
 */
var path = window.location.pathname.split("/");
var pagina = path[path.length-1];
if(pagina==='index.html'){
	$('.js-back').hide();
}


/**
 * Funcion para asignar texto al parrafo
 * Con el metodo children() obtengo el primer elemento p que se encuentre en el div
 * Con html() le asigno el texto "nuevas recetas".
 */
function printNews() {
	var hijo = $('.callout-news').children('p');
	hijo.html('<b>NUEVAS RECETAS</b>');
}
printNews();






