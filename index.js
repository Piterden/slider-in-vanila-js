let slideIbdex 	= 1,
	slide 		= document.getElementsByClassName('slide');


showSlides(slideIbdex);
function showSlides(n) {
	check(n)
    hideSlider()
	slide[slideIbdex - 1].style.display = 'block';
}

function slidesButtons(n) {
	showSlides(slideIbdex += n);	
}
setInterval(function(){
	slidesButtons(1);
},10000);


function check(a){
    if( a > slide.length) {
		slideIbdex = 1;
	}
	if(a < 1) {
		slideIbdex = slide.length;
	}
}


function hideSlider(){
    for (let i = 0 ; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
}
