
$(document).ready(function(){
	
	$(".contenido").each(function(indice,valor){
		if(indice>1)
			{$(valor).hide();
			$(valor).css({zIndex:indice
				,position:'absolute'
				,top:'120px'
				,height:'auto'
				});
			}
		
	});


	// accion al prescionar menu iz 
	$(".menu_iz_elmenetos").each(function(indice,valor){
		//cada elemento
		$(valor).click(function(){
			// CSS DEL boton
			$(".menu_iz_elmenetos").removeClass('quitar');

			$(this).addClass('quitar');
			
			// muestra el contenido
			$(".contenido").each(function(indiceCont,valorCont){
				indiceCont--;
				if(indiceCont==indice){
				
					$(valorCont).fadeIn(1700);
					
				}
				else
					if(indiceCont>=0 && indiceCont!=indice){

						$(valorCont).fadeOut(1000);
					}


			});// fin de array contenido

			return false;
		});// fin del click 

	});

});
