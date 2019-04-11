let slideIbdex 	= 1,
		leftBtn 		= document.querySelector('.left_btn'),
		rightBtn 		= document.querySelector('.right_btn'),
		dot				= document.getElementsByClassName('dot'),
		dots				= document.querySelector('.dots'),	
		slide 			= document.getElementsByClassName('slide');
 
showSlides(slideIbdex);
// this function show slide n (n - number slides)
function showSlides(n) {
	check(n)
	hideSlider()
	slide[slideIbdex - 1].style.display = 'block';
	checkDots()
	showDots()
}

// this function hides everything and shows one next slide
function slidesButtons(n) {
	showSlides(slideIbdex += n);	
}

// Timer, him turn on function slidesButtons(n) every 10 seconds
setInterval(function(){
	slidesButtons(1);
},10000);

// this function watching the slides
function check(a){
    if( a > slide.length) {
		slideIbdex = 1;
	}
	if(a < 1) {
		slideIbdex = slide.length;
	}
}

// this function hide all slides
function hideSlider(){
    for (let i = 0 ; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
}

// click in button Left_btn function hides everything and shows one next slide
leftBtn.addEventListener('click', ()=> {
	showSlides(slideIbdex -= 1);
} );

// click in button Left_btn function hides everything and shows one prev slide
rightBtn.addEventListener('click', ()=> {
	showSlides(slideIbdex += 1);
} );

function checkDots(b) {
	for (let i = 0; i < slide.length; i++) {
		dot[i].classList.remove('active');
	}
}

function showDots(b) {
	dot[slideIbdex - 1].classList.add('active');
}

function slidesDots(n) {
	showSlides(slideIbdex = n);	
}

dots.addEventListener('click', function(event) {
	for(let i = 0; i < dot.length +1; i++){
		if(event.target.classList.contains('dot') && event.target == dot[i-1]){
			slidesDots(i);
		};
	};
});