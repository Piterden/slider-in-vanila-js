let index   = 4,
    slide   = document.getElementsByClassName('slide');

    function hide(a) {
        

        if(a > slide.length - 1){
            for(let i = 0; i < slide.length; i++){
                slide[i].style.display = 'none';
            }
            slide[a].style.display = '';
        }else {
            a = 0;
        }
    };






setInterval(()=>{
    index++;
    hide(index);
},1000);

