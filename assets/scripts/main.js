
// ここから颯人
$(function () {
    $('.side_nav').hide();

    $(window).scroll(function () { 
        if ($(this).scrollTop()> 700) {
            $('.side_nav').fadeIn();
        }else{
            $('.side_nav').fadeOut();
        }
    });
});












//ここからいつき
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("hero_images");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}
