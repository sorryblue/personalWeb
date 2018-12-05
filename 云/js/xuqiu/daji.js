document.onclick = function(){
    for(let k in data){
        if(data[k].checked){
            let dataId = data[k].id;
            const domChild = folders.getElementsByClassName('file-item');
            for(let i = 0;i < domChild.length;i++){
                let k = domChild[i];
                if(k.dataset.id == dataId){
                    const span = k.getElementsByTagName('span')[0];
                    span.onclick = function(){
                        rename.onclick();
                    }
                }
            }
        }
    }
}