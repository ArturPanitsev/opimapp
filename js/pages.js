const $link = document.getElementById('navigation').querySelectorAll('a');
const $main = document.getElementById('main');
const pages = ['kodu', 'prog', 'it1', 'it2', 'digi'];

let pageSwitch = () => {
    const page = document.location.hash.replace('#', '');
    const pageIndex = pages.indexOf(page);

    if(pageIndex != -1){

        $link.forEach((l) => {
            l.classList.remove('selected');
        })
        $link[pageIndex].classList.add('selected');

        if(pageLinks[pages[pageIndex]] == undefined){
            $main.innerHTML = '<div class="unknownPage"><h1>Ошибка, страница не найдена!</h1></div>'
        } else{
            $main.innerHTML = pageLinks[pages[pageIndex]];
        }
    } else{
        location.hash = pages[0];
        pageSwitch();
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