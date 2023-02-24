
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



// モーダルウィンドウ
window.addEventListener('load', function() {
  if(!localStorage.getItem('disp_popup')) {
      localStorage.setItem('disp_popup', 'on');
      const body = document.querySelector('body');
      const bgPopup = document.querySelector('.bg_onetime_popup');
      const popup = document.querySelector('.onetime_popup');
      const popupTitleClose = document.querySelector('.onetime_popup_title_close');
      body.classList.add('open_popup');

      bgPopup.addEventListener('click', function() {
          closePopup();
      });
      popup.addEventListener('click', function(e) {
          e.stopPropagation();
      });
      popupTitleClose.addEventListener('click', function() {
          closePopup();
      });

      function closePopup() {
          body.classList.remove('open_popup');
      }
  }
}, false);







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
    university: '慶應義塾大学',
    faculity:'理工学部化学科',
    hobby: ['サッカー', 'テニス', 'バスケ'],
    addict: ['サッカー観戦', 'テニス観戦', 'バスケ観戦'],
    message: '仮のテキストです',
    interview: '仮のインタビューです',
    image: 'koyo.jpg',
    line:'https://line.me/ti/p/49ODTV_782',
  },
  {
    id: 2,
    name: '三浦颯人',
    POSSE: '③',
    university: '明治大学',
    faculity:'理工学部電気電子工学科',
    hobby: ['サッカー', 'テニス', 'バスケ'],
    addict: ['サッカー観戦', 'テニス観戦', 'バスケ観戦'],
    message: '仮のテキストです',
    interview: '仮のインタビューです',
    image: 'hayato.jpg',
    line: 'https://line.me/ti/p/49ODTV_782',
  },
  {
    id: 3,
    name: '土屋一貴',
    POSSE: '③',
    university: '慶應義塾大学',
    faculity:'理工学部物理学科',
    hobby: ['エッチ', 'スケッチ', 'ワンタッチ'],
    addict: ['エッチ観戦', 'スケッチ観戦', 'ワンタッチ観戦'],
    message: '仮のテキストです',
    interview: '仮のインタビューです',
    image: 'itsuki.jpg',
    line:'https://line.me/ti/p/49ODTV_782',
  },
]

const statusBox = document.getElementById(`statusBox`);

for(let i = 0 ;i < profile.length; i++){
statusBox.innerHTML +=
`<section class="modal_container">`+
      `<div class="status_box modal_box">`+
        `<div class="status_message_box">`+
          `<div class="modal_prof_picture">`+
            `<img class="modal_prof_picture_image" src="./assets/images/profile_image/`+profile[i].image+`" alt="仮です。profの画像">`+
          `</div>`+
          `<div class="status_message_image">`+
            `<p class="status_message_text">`+
              `仮のテキストです`+
            `</p>`+
          `</div>`+
        `</div>`+
      `</div>`+

      `<div class="modal_prof_box modal_box">`+
        `<div>`+profile[i].name+`</div>`+
        `<div>POSSE`+profile[i].POSSE+`</div>`+
        `<div>`+profile[i].university+`</div>`+
        `<div>`+profile[i].faculity+`</div>`+
        `<ul>趣味`+
          `<li>`+profile[i].hobby[0]+`</li>`+
          `<li>`+profile[i].hobby[1]+`</li>`+
          `<li>`+profile[i].hobby[2]+`</li>`+
        `</ul>`+
        `<ul>最近ハマっていること`+
          `<li>`+profile[i].addict[0]+`</li>`+
          `<li>`+profile[i].addict[1]+`</li>`+
          `<li>`+profile[i].addict[2]+`</li>`+
        `</ul>`+
      `</div>`+

      `<div class="sns_box modal_box">`+
        `<div class="sns_icon">`+
            `<img class="sns_icon_image" src="./assets/images/Instagram_logo.webp" alt="インスタのロゴ">`+
        `</div>`+
        `<div class="sns_icon">`+
        `<a href = "`+profile[i].line+`">`+   
        `<img class="sns_icon_image" src="./assets/images/line_logo.png" alt="Lineのロゴ">`+
        `</a>`+
        `</div>`+
      `</div>`+

      `<div class="interview_box modal_box">`+
        `<p>仮のインタビューです</p>`+
      `</div>`+
    `</section>` 
  
  }