const start = document.getElementById('start');
let bgList = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(bgList);

let i = 0;

let changeBg = () => {
    start.style.setProperty('--bgImg', "url('../assets/img/bg/" + bgList[i] + "') no-repeat")
}
changeBg();

setInterval(() => {
    if(i >= bgList.length-1){
        i=0;
    }
    else{
        i++;
    }
    changeBg();
}, 30000)