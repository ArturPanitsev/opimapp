const preloader = document.getElementById('preloader');

window.onload = () => {
    preloader.style.animation = 'endLoad 2s';
    setTimeout(()=>{
        preloader.style.display = 'none';
    }, 2000)
}