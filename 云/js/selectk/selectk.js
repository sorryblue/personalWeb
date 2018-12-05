const kuang = folderBox.getElementsByClassName('kuang')[0];
let {duang} = myTools;
let rv = false;
folders.addEventListener('mousedown',function(ev){
    ev.returnValue = rv;
    rv = false;
    if(targetP(ev.target,'file-item'))return;
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    let {left,top} = fBox.getBoundingClientRect();
    let fileItem = folders.getElementsByClassName('file-item');
    let arr = getChild(id);
    for(let i = 0;i < fileItem.length;i++){
        if(arr && arr[i]){
            arr[i].checked = false;
            render(id);
        }
    }
    seleEleArr.length = 0;
    let disX = ev.pageX - left;
    let disY = ev.pageY - top;
    kuang.style.display = 'block';
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';
    let move = function(ev){
        let l = ev.pageX - disX;
        let t = ev.pageY - disY;
        seleEleArr.length = 0;
        kuang.style.width = Math.abs(l - left) + 'px';
        kuang.style.height = Math.abs(t - top) + 'px';
        for(let i = 0,len = fileItem.length;i < len;i++){
            if(duang(kuang,fileItem[i])){
                fileItem[i].classList.add('active');
                fileItem[i].children[3].className = 'checked';
                seleEleArr.push(data[fileItem[i].dataset.id*1]);
                data[fileItem[i].dataset.id*1].checked = true;
            }else{
                fileItem[i].classList.remove('active');
                fileItem[i].children[3].className = '';
                data[fileItem[i].dataset.id*1].checked = false;
            }
        }
        checkall.className = arr.every(e=>e.checked)?'checked':'';  
        kuang.style.left = Math.min(disX,ev.pageX - left) + 'px';
        kuang.style.top = Math.min(disY,ev.pageY - top) + 'px';
    }
    let up = function(){
        kuang.style.width = kuang.style.height = 0;
        kuang.style.display = 'none';
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',up);
    }
    document.addEventListener('mousemove',move);
    document.addEventListener('mouseup',up);
});
checkall.onclick = function(){
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    let arr = getChild(id);
    this.classList.toggle('checked');
    arr && arr.forEach(e=>{
        e.checked = this.classList.contains('checked');
    });
    render(id);
}