const $link = document.getElementById('navigation').querySelectorAll('a');
const $page = document.getElementById('page');
const pages = ['kodu.html', 'prog.html', 'it1.html', 'it2.html', 'digi.html'];

let pageSwitch = () => {
    const page = document.location.hash.replace('#', '');
    const pageIndex = pages.indexOf(page);

    if(pageIndex != -1){
        $page.src = './pages/' + pages[pageIndex];

        $link.forEach((l) => {
            l.classList.remove('selected');
        })

        $link[pageIndex].classList.add('selected');
    }

}
pageSwitch();

$link.forEach((e, id) => {
    e.addEventListener('click', () => {

        $link.forEach((l) => {
            l.classList.remove('selected');
        })

        e.classList.add('selected');

        location.hash = pages[id];
        pageSwitch();
    })
})

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