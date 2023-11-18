
var canvas = document.querySelector('canvas');

var objetos = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let inicioX = 0;
let inicioY = 200;
let timer = 0;

function GeraCirculo() {   
    timer++;


    if (timer <= 1) {
        inicioX += 2.3;  
        inicioY += 0.3;  
        timer = 0; 
    }
    
    objetos.clearRect(0, 0, canvas.width, canvas.height);  

    objetos.beginPath();
    objetos.arc(inicioX, inicioY, 50, 0, Math.PI * 2, false);
    objetos.fillStyle = 'rgba(0, 256, 256, 1)';
    objetos.fill();

  
    requestAnimationFrame(GeraCirculo);
}

GeraCirculo();