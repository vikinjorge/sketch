$(document).ready(function()
{

	////comprueba que la cuadricula no sea demasiado pequeña ni demasiado grande
	var compruebaCuadricula = function()
	{
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

		for (var fil=0; fil<numCuadros; fil++)
		{

				$('#container').append('<div id="celdaF'+ fil+'" class="celda"></div>');
				$('.celda').width(ancho);
				$('.celda').height(ancho);
		}
	};

	var colorAlAzar = function (){

			r= Math.floor(Math.random()*255)+1;
			g= Math.floor(Math.random()*255)+1;
			b= Math.floor(Math.random()*255)+1;


	};
	

$('#esMultiColor').prop("checked",true);

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
calculaCuadricula();


$('body').on('mouseenter', '.celda',function()
{
	console.log("has pasado");

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






$('#botonReset').click(function()
{
		$('#container').empty();
		

			if ($('#esMultiColor').is(":checked"))
			{
				multiColor=true;
				console.log("ha entrado en True");
			}
			else
			{
				multiColor=false;
				console.log("ha entrado en false");
			}

		numCuadros=0;
		cuadricula = 400;
		ancho = 0;
		compruebaCuadricula();
		calculaCuadricula();
		console.log("multiColor vale"+multiColor);
});






	


});

	
/*
$('.celda').mouseout(function(){

	$(this).css("background-color", "#ffffff");

});*/
	









    
   