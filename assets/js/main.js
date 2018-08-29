//Automatic Slider
var slideIndex =1;

showImage(slideIndex);

function plusIndex(n){
	slideIndex = slideIndex + n;
	showImage(slideIndex);
}

function currentSlide(n){
	showImage(slideIndex = n);
}


function showImage(n){
	var slide = $(".slide");
	var dots = document.getElementsByClassName("dots");

	if(n> slide.length){
		slideIndex=1
	}

	if(n<1){
		slideIndex = slide.length
	}

	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};
	slide[slideIndex-1].style.display = "block";

	for(var i=0; i <dots.length; i++){
		dots[i].className = dots[i].className.replace(" active","");
	}

	dots[slideIndex-1].className += " active";
}




autoSlide();
function autoSlide(){
	var slide = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dots");
	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};


	if(slideIndex> slide.length){slideIndex=1};
	slide[slideIndex-1].style.display = "block";
	slideIndex++;
	setTimeout(autoSlide,9000);


}



// Form Validation
var $formSubmit =$('#newsLetterSubmit');
var message1 = $('#formCheck');
var message2 = $('#formMessage');


function validateForm(){
	var name = $('#name').val();
	var email = $('#email').val();

	if(name==='' || email===''){
		message1.html('<p>Both fields must be completed!</p>');
	}else{
		$formSubmit.fadeOut(1000,function(){
			var submitted = message2.html('<p>Thank you!</p>');
			submitted.fadeIn(2000);
		});
		
	}

}

$formSubmit.on('submit',function(e){
	e.preventDefault();
	validateForm();
})


//On focusout validate each text field.
var email = $('#email');
var nameCheck = $('#nameCheck');
var emailCheck = $('#emailCheck');


$('#name').on('focusout',function(){
	var nameInput = $('#name').val();
	if(nameInput ===''){
		nameCheck.html('<p>Field is required !</p>');
	}	
})


email.on('focusout',function(){
	var emailInput = $('#email').val();
	if(emailInput ===''){
		emailCheck.html('<p>Field is required !</p>');
	}
})













// Pause Play Button
var button = $('#pausePlay');
 button.click(function(){
 	$(this).toggleClass('play pause');
 });


 var audio = document.getElementById('audio');
 var isPlaying = false;
 function togglePlay(){
 	if(isPlaying){
 		audio.pause();
 	}else{
 		audio.play();
 	}
 };
 audio.onplaying = function(){
 	isPlaying = true;
 };
 audio.onpause = function(){
 	isPlaying = false;
 };
button.on('click',togglePlay);




//ON PAGE LOAD NAME FIELD WITH BE FOCUSED
// var autoFocus = document.getElementById('name');

// function initSetup(){
// 	autoFocus.focus();
// }

// window.addEventListener('load',initSetup,false);






