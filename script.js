
const video = document.getElementById('videin');
const playPause = document.getElementById('play-pause');

function reproducir() {
    if(video.paused) {
        video.play();
        playPause.src='https://img.icons8.com/android/24/000000/pause.png'
    }else{
        video.pause();
        playPause.src='https://img.icons8.com/android/24/000000/play.png'
    }

}

function detener() {
    video.pause();
    video.currentTime= 0;
    playPause.src='https://img.icons8.com/android/24/000000/play.png';
};

function saltar(fotogramas) {
    video.currentTime += fotogramas
};




//Canvas

var radianes=Math.PI/180*45;
var espacioDibujo = document.getElementById("canvas");
var ctx = espacioDibujo.getContext("2d");

//Pie 1
ctx.beginPath();
ctx.ellipse(250, 285, 50, 30, Math.PI * 0.25, 0, 2 * Math.PI);
ctx.fillStyle='#9F001E';
ctx.fill();
ctx.closePath();

//Pie 2
ctx.beginPath();
ctx.ellipse(150, 285, 50, 30, Math.PI * 0.75, 0, 2 * Math.PI);
ctx.fillStyle='#9F001E';
ctx.fill();
ctx.closePath();

//Cuerpo
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fillStyle='#F79CB1';
ctx.fill();
ctx.closePath();


//Mano 1
ctx.beginPath();
ctx.ellipse(120, 150, 50, 30, Math.PI * .25, 0, 2 * Math.PI);
ctx.fillStyle='#F79CB1';
ctx.fill();
ctx.closePath();

//Mano 2

ctx.beginPath();
ctx.ellipse(285, 200, 50, 30, Math.PI * .25, 0, 2 * Math.PI);
ctx.fillStyle='#F79CB1';
ctx.fill();
ctx.closePath();


//ojo 1
ctx.beginPath();
ctx.ellipse(175, 170, 30, 10, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = '#191919';
ctx.fill();
ctx.closePath();
//parte blanca del ojo
ctx.beginPath();
ctx.ellipse(175, 152, 8, 5, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

//ojo 2
ctx.beginPath();
ctx.ellipse(225, 170, 30, 10, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = '#191919';
ctx.fill();
ctx.closePath();
//parte blanca del ojo 2
ctx.beginPath();
ctx.ellipse(225, 152, 8, 5, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();


//cachetes
//1
ctx.beginPath();
ctx.ellipse(250,205, 20, 10, Math.PI / 1, 0, 2 * Math.PI);
ctx.fillStyle = '#F55C69';
ctx.fill();
ctx.closePath();

//2
ctx.beginPath();
ctx.ellipse(150, 205, 20, 10, Math.PI / 1, 0, 2 * Math.PI);
ctx.fillStyle = '#F55C69';
ctx.fill();
ctx.closePath();


//boca
ctx.beginPath();
ctx.ellipse(200,207, 18, 11, Math.PI * .0, 0, Math.PI);
ctx.lineWidth = 0.8;
ctx.stroke();
ctx.closePath;


