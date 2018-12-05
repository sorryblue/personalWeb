const section = document.getElementById('section');
const head = document.getElementById('head');
let iH = window.innerHeight;
const headH = head.offsetHeight;
section.style.height = iH - headH + 'px';

window.onresize = function(){
    iH = window.innerHeight;
    section.style.height = iH - headH + 'px';
}