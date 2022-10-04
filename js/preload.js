const body = document.querySelector('body');
body.style.pointerEvents = 'none';
body.style.overflow = 'hidden';
body.style.userSelect = 'none';


const preloader = document.getElementById('preloader');

window.onload = () => {
    preloader.style.animation = 'endLoad 2s';
    body.style.pointerEvents = 'auto';
    body.style.overflow = 'auto';
    body.style.userSelect = 'text';
    setTimeout(()=>{
        preloader.style.display = 'none';
    }, 2000)
} 
