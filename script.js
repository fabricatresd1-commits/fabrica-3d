const animal = new URLSearchParams(window.location.search).get("animal") || "gorila";

const video=document.getElementById("video");
const audio=document.getElementById("audio");

const intro=
document.getElementById("intro");

const pantalla=
document.getElementById("pantallaCarga");

const boton=
document.getElementById("sonido");

video.src=
"VIDEOS/"+animal+".mp4";

audio.src=
"SONIDOS/"+animal+".mp3";

video.onloadeddata=()=>{

pantalla.style.opacity="0";

setTimeout(()=>{

pantalla.style.display="none";


// ESPERA EXTRA
setTimeout(()=>{

video.style.opacity="1";

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},1500);

},2000);


},1000);

};

boton.onclick=()=>{

audio.play();

};