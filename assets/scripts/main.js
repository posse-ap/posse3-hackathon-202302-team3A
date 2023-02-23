
// ここから颯人
$(function () {
  $('.side_nav').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.side_nav').fadeIn();
    } else {
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
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}







// ここからこうよう
const profile = [
  {
    id: 1,
    name: '飯田紅葉',
    POSSE: '③',
    university: '慶應義塾',
    hobby: ['サッカー', 'テニス', 'バスケ'],
    addict: ['サッカー観戦', 'テニス観戦', 'バスケ観戦'],
    message: '仮のテキストです',
    interview: '仮のインタビューです',
    image: 'koyo.jpg'
  },
  {
    id: 2,
    name: '三浦颯人',
    POSSE: '③',
    university: '明治',
    hobby: ['サッカー', 'テニス', 'バスケ'],
    addict: ['サッカー観戦', 'テニス観戦', 'バスケ観戦'],
    message: '仮のテキストです',
    interview: '仮のインタビューです',
    image: 'hayato.jpg'
  }
]

const statusBox = document.querySelectorAll('.status_box');