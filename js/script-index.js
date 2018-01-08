$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
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
}else if(pagina==='recipe.html'){
	$('.js-menu').hide();
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






