const tanbox = document.getElementById('tanbox');
const aa = tanbox.getElementsByTagName('a');
const del = document.getElementById('del');
const huiShouSql = [];
del.onclick = function(){
    if(seleEleArr.length){
        tanbox.style.display = 'block';
        aa[0].onclick = function(){
            seleEleArr.forEach(e => {
                if('create' in data[e.id]){
                    delete data[data[e.id].pid].num[data[e.id].create];
                }
                delete data[e.id];
            });
            huiShouSql.push(...seleEleArr);
            render(breadNav.getElementsByTagName('span')[0].dataset.id*1);
            treeMenu.appendChild(renderTree(-1,-1));
            tanbox.style.display = 'none';
        }
        aa[1].onclick = function(){
            tanbox.style.display = 'none';
        }
    }else{
        alert('没有选')
    }
}