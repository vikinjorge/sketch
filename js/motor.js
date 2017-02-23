////comprueba que la cuadricula no sea demasiado pequeña ni demasiado grande
var compruebaCuadricula = function(){
	while (numCuadros<4 || numCuadros>64)
	{
		 numCuadros = prompt("Introduce el tamaño de cuadricula min 4 y max 64");
	}
};


//calcula el ancho que tienen que tener los cuadros para caber en container principal
var calculaCuadricula = function()
{
	//division tamaño cuadricula entre cuadros indicados
	ancho = cuadricula/numCuadros;

	///multiplicamos los cuadros para tener el total de cudros que habrá que dibujar
	///si puso 4, pues 4x4=16, 16 cuadros dibujaremos
	numCuadros=numCuadros*numCuadros;
};



var numCuadros = prompt("Introduce el tamaño de cuadricula min 4 y max 64");
compruebaCuadricula();

//variables de la cuadricula
var cuadricula = 400;
var ancho = 0;
//variables colores
var multiColor = true;
var r = 0;
var g = 0;
var b = 0;






$(document).ready(function(){
	
	calculaCuadricula();




	for (var fil=0; fil<numCuadros; fil++)
	{

			$('#container').append('<div id="celdaF'+ fil+'" class="celda"></div>');
			$('.celda').width(ancho);
			$('.celda').height(ancho);

	}


$('.celda').mouseenter(function(){

	if (multiColor)
	{
		colorAlAzar();
		$(this).css("background-color", "rgb("+r+","+g+","+b+")");
	}
	else
	{
		$(this).css("background-color", "rgb(0,0,0");
		console.log(multiColor);
	}
	


});

/*$('.celda').mouseout(function(){

	$(this).css("background-color", "rgb("+r-10+","+g-10+","+b-10+")");

})*/


var colorAlAzar = function (){

		r= Math.floor(Math.random()*255)+1;
		g= Math.floor(Math.random()*255)+1;
		b= Math.floor(Math.random()*255)+1;


};






});

	
/*
$('.celda').mouseout(function(){

	$(this).css("background-color", "#ffffff");

});*/
	









    
   