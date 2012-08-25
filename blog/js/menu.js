	var colorwe="Black";
	var coloryou="Grey";
	var colorit="White"
	var escala=0.5;

	//Menu Blog
	var c=document.getElementById("iconblog");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorit);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*30,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	//Menu Producto

	var c=document.getElementById("iconproducto");
	var cxt=c.getContext("2d");

	
	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*30,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,Math.PI,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	

	//Menu Nosotros
	var c=document.getElementById("iconnosotros");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	
	//Menu Contactenos
	var c=document.getElementById("iconcontactenos");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(coloryou);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(coloryou);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorwe);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	
