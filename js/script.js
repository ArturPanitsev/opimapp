let page = document.location.hash;
const $link = document.getElementById('navigation').querySelectorAll('a');

$link.forEach((e) => {
    e.addEventListener('click', () => {

        $link.forEach((l) => {
            l.classList.remove('selected');
        })

        e.classList.add('selected')

    })
})