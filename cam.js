"use strict";

const video = document.querySelector(".video");
const canvas = document.querySelector(".canvas");

const button = document.querySelector(".start-btn");

const photo = document.querySelector(".photo");

const constraints = {
	video: {width:420, height:340},
	audio: false,
};

const getVideo = async () => {
	try{
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		handleSucces(stream);
		console.log(stream);
	} catch (error){
		console.log(error);
	}
};

const handleSucces = (stream) => {
	video.srcObject = stream;
	video.play();
};

getVideo();

button.addEventListener("click", () => {
	const context = canvas.getContext("2d");
	context.drawImage(video,0,0,420,340);
	const data2 = canvas.toDataURL("image/png");
	var datos = []
	photo.setAttribute("src",data2);	
	console.log(typeof data2);
	console.log(data2);
        var fecha = document.getElementById('date');
	var origen = document.getElementById('Lug'),
        	value = select.value,
		text = select.options[select.selectedIndex].innerText;
	var evento = document.getElementById('ev'),
		value = select.value,
		text = select.options[select.selectedIndex].innerText; 
	datos.push(fecha);
        datos.push(origen);
        datos.push(evento);
        console.log(datos);
	$.ajax({
		type: 'POST',
		dataType: "json",
		data: {'array': JSON.stringify(data2)},
		url: 'https://10.111.112.4/app1/registro'
	}).then(function(response){
		
		console.log(response);
	});	
});
 
