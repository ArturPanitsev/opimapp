const $goDown = document.getElementById('goDown');
const $navigation = document.getElementById('navigation'); 

$goDown.addEventListener('click', () => {

    $navigation.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

})

const $goUp = document.getElementById('goUp');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 1000){
        $goUp.style.display = 'block';
    } else{
        $goUp.style.display = 'none';
    }
})

const $start = document.getElementById('start');

$goUp.addEventListener('click', () => {
    $start.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})