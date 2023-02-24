'use strict';

// ここから颯人

// $(function () {
//   $('.side_nav').hide();
// if(screen.width > 768) {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 600) {
//       $('.side_nav').fadeIn();
//     } else {
//       $('.side_nav').fadeOut();
//     }
//   }
//   )
// }
// });


// $(window).resize(function () {
//   const width = $(window).width();
//   console.log(width);
//   if(width > 768){
//     if(!sideNav.classList.contains('active'))
//     sideNav.classList.add('active');
//   } else {
//     if(sideNav.classList.contains('active'))
//     sideNav.classList.remove('active');
//   }

  
//   // $(function () {
//     $('.side_nav').hide();
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 600) {
//         $('.side_nav').fadeIn();
//       } else {
//         $('.side_nav').fadeOut();
//       }
//     });
  
//   // });

// });












//ここからいつき


// サイドバー非表示
// $(function () {
//   if (screen.width > 768) {
//     $('.side_nav').hide();
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 800) {
//         $('.side_nav').fadeIn();
//       } else {
//         $('.side_nav').fadeOut();
//       }
//     });
//   } else {
//     $('.side_nav').hide();
//   }
// });

const sideNav = document.querySelector('.side_nav');

if (window.innerWidth >= 768) {
  sideNav.classList.add('side_nav--large');
} else {
  sideNav.classList.add('side_nav--small');
}

window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    sideNav.classList.remove('side_nav--small');
    sideNav.classList.add('side_nav--large');
  } else {
    sideNav.classList.remove('side_nav--large');
    sideNav.classList.add('side_nav--small');
  }
});


// モーダルアニメーション
const modal = document.getElementById("modal");

let opacity = 0;

const animation = setInterval(() => {
  if (opacity >= 1) {
    clearInterval(animation);
  }
  modal.style.opacity = opacity;
  opacity += 0.01;
}, 22);



// ヒーロー画像スライド

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


// ここから検索機能


const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchSections);

function searchSections() {
  const searchInput = document.getElementById("searchInput");
  const keyword = searchInput.value.toLowerCase();

  const sections = document.querySelectorAll(".modal_container");
  sections.forEach((section) => {
    const name = section.querySelector(".modal_prof_box > div:first-child").textContent.toLowerCase();

    const posse = section.querySelector(".modal_prof_box > div:nth-child(1)").textContent.toLowerCase();
    const university = section.querySelector(".modal_prof_box > div:nth-child(2)").textContent.toLowerCase();
    // const faculty = section.querySelector(".modal_prof_box > div:nth-child(3)").textContent.toLowerCase();
    const hobbies = section.querySelectorAll(".modal_prof_box > ul:nth-child(4)");
    const addictions = section.querySelectorAll(".modal_prof_box > ul:nth-child(5)");

    let match = false;

    if (name.includes(keyword) || university.includes(keyword) || posse.includes(keyword)) {
      match = true;
    }

    
    hobbies.forEach((hobby) => {
      if (hobby.textContent.toLowerCase().includes(keyword)) {
        match = true;
      }
    });

    addictions.forEach((addiction) => {
      if (addiction.textContent.toLowerCase().includes(keyword)) {
        match = true;
      }
    });

    if (match) {
      section.style.display = "grid";
    } else {
      section.style.display = "none";
    }
  });
}


function cancelSearch() {

  const sections = document.querySelectorAll(".modal_container");
  sections.forEach((section) => {
    section.style.display = "grid";
  });
}

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", cancelSearch);


// const search = (searchText) => {
//   const filteredData = profile.filter((item) => {
//     return item.name.toLowerCase().includes(searchText.toLowerCase());
//   });
//   return filteredData;
// };

// const showResults = (results) => {
//   const resultContainer = document.getElementById("result-container");
//   resultContainer.innerHTML = "";
  
//   results.forEach((item) => {
//     const itemElement = document.createElement("div");
//     itemElement.innerHTML = item.name
//     resultContainer.appendChild(itemElement);
//   });

// };


// const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", () => {
//   const searchText = document.getElementById("search-box").value;
//   const results = search(searchText);
//   showResults(results);
// });


// モーダルウィンドウ
// window.addEventListener('load', function() {
//   if(!localStorage.getItem('disp_popup')) {
//       localStorage.setItem('disp_popup', 'on');
//       const body = document.querySelector('body');
//       const bgPopup = document.querySelector('.bg_onetime_popup');
//       const popup = document.querySelector('.onetime_popup');
//       const popupTitleClose = document.querySelector('.onetime_popup_title_close');
//       body.classList.add('open_popup');

//       bgPopup.addEventListener('click', function() {
//           closePopup();
//       });
//       popup.addEventListener('click', function(e) {
//           e.stopPropagation();
//       });
//       popupTitleClose.addEventListener('click', function() {
//           closePopup();
//       });

//       function closePopup() {
//           body.classList.remove('open_popup');
//       }
//   }
// }, false);

// モーダルを取得する



var span = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
  menu.classList.add("menu_active")
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    menu.classList.add("menu_active")
  }
}


// リロード時にページ最上部に移動
// window.onload = function() {
//   setTimeout(function() {
//     scrollTo(0,0);
//   }, 0);
// }
// ここからこうよう
const profile = [
  {
    id: 1,
    name: '飯田紅葉',
    POSSE: '③',
    university: '慶應義塾大学',
    faculty:'理工学部化学科',
    hobby: ['サッカー', 'テニス', 'バスケ'],
    addict: ['サッカー観戦', 'テニス観戦', 'バスケ観戦'],
    message: 'こう見えて心は乙女です',
    interview: '三味線のサークルとPOSSEを両立しててすごい！',
    image: 'koyo.jpg',
    line:'https://line.me/ti/p/49ODTV_782',
  },
  {
    id: 2,
    name: '三浦颯人',
    POSSE: '③',
    university: '明治大学',
    faculty:'理工学部電気電子生命学科',
    hobby: ['漫画', 'アニメ', 'バスケ'],
    addict: ['音楽を聴く', 'イチゴを食べる', 'バスケ観戦'],
    message: '女しか頭にありません',
    interview: '明日からスノボに行くんだ！！楽しみだあなぁ',
    image: 'hayato.jpg',
    line: 'https://line.me/ti/p/49ODTV_782',
  },
  {
    id: 3,
    name: '土屋一貴',
    POSSE: '③',
    university: '慶應義塾大学',
    faculty:'理工学部物理学科',
    hobby: ['F1', 'M1', '日本庭園巡り'],
    addict: ['F1観戦', 'M1観戦', 'geogessuer'],
    message: '良い出会いないかなぁ',
    interview: 'ハッカソン中落とした財布見つけられたよかった！',
    image: 'itsuki.jpg',
    line:'https://line.me/ti/p/49ODTV_782',
  },
  {
    id: 4,
    name: '猪瀬雄大',
    POSSE:'①',
    university :'慶應義塾大学',
    faculty:'環境情報学部',
    hobby: ['散財', '変なものを集める事', 'おしゃれ'],
    addict: ['switch', 'マリカー', 'harbors'],
    message: '最近はswitcにハマってるよ♪',
    interview: 'match POSSE で良い出会い見つけたいなぁぁぁ♫',
    image: 'yudai.jpg',
  }
]

const statusBox = document.getElementById(`statusBox`);

for(let i = 0; i < profile.length; i++){
  
statusBox.innerHTML +=
`<section class="modal_container">`+
      `<div class="status_box modal_box">`+
        `<div class="status_message_box">`+
          `<div class="modal_prof_picture">`+
            `<img class="modal_prof_picture_image" src="./assets/images/profile_image/`+profile[i].image+`" alt="仮です。profの画像">`+
          `</div>`+
          `<div class="status_message_image">`+
            `<p class="status_message_text">`+
              profile[i].message+
            `</p>`+
          `</div>`+
        `</div>`+
      `</div>`+

      `<div class="modal_prof_box modal_box">`+
        `<div class="prof_name"><h2 class="prof_name_text">`+profile[i].name+`</h2></div>
        <div>`+
        `<div class="prof_text">POSSE`+profile[i].POSSE+`</div>`+
        `<div class="prof_text">`+profile[i].university+`</div>`+
        `<div class="prof_text prof_text_faculty">`+profile[i].faculty+`</div>
        </div>`+
        `<ul id="modal_hobby"><h2>趣味</h2>`+  //for文書けたら嬉しい
          `<li class="prof_text">`+profile[i].hobby[0]+`</li>`+
          `<li class="prof_text">`+profile[i].hobby[1]+`</li>`+
          `<li class="prof_text">`+profile[i].hobby[2]+`</li>`+
        `</ul>`+
        `<ul><h2>最近ハマっていること</h2>`+
          `<li class="prof_text">`+profile[i].addict[0]+`</li>`+
          `<li class="prof_text">`+profile[i].addict[1]+`</li>`+
          `<li class="prof_text">`+profile[i].addict[2]+`</li>`+
        `</ul>`+
      `</div>`+

      `<div class="sns_box modal_box">`+
        `<div class="sns_icon">`+
        `<a href = "https://www.instagram.com/t.itsuki0724/">`+
        `<img class="sns_icon_image" src="./assets/images/Instagram_logo.webp" alt="インスタのロゴ">`+
        `</a>`+
        `</div>`+
        `<div class="sns_icon">`+
        `<a href = "`+profile[i].line+`">`+   
        `<img class="sns_icon_image" src="./assets/images/line_logo.png" alt="Lineのロゴ">`+
        `</a>`+
        `</div>`+
      `</div>`+

      `<div class="interview_box modal_box">`+
        `<p>`+profile[i].interview+`</p>`+
      `</div>`+
    `</section>` 
  
  }











// モダールランダムプロフィール
// shuffle関数の定義

// const  shuffle = array => {
//   for (let i = array.length; i >= 0; i--) {
//     const randomIndex = Math.floor(Math.random() *(i+1));
//     [array[i], array[randomIndex],array[i]]; 
//   }
//   return array
// }
// const profArray = shuffle(profile)

const randomIndex = Math.floor(Math.random() *(profile.length));

const randomBox = document.getElementById(`modal_random_box`);

const randomProfPickUp = (index) =>  { 
  randomBox.innerHTML +=
`<section class="modal_container first_modal_container">`+
      `<div class="status_box modal_box">`+
        `<div class="status_message_box">`+
          `<div class="modal_prof_picture">`+
            `<img class="modal_prof_picture_image" src="./assets/images/profile_image/`+profile[index].image+`" alt="仮です。profの画像">`+
          `</div>`+
          `<div class="status_message_image">`+
            `<p class="status_message_text">`+
              profile[index].message+
            `</p>`+
          `</div>`+
        `</div>`+
      `</div>`+

      `<div class="modal_prof_box modal_box">`+
        `<div class="prof_name"><h2 class="prof_name_text">`+profile[index].name+`</h2></div>
        <div>`+
        `<div class="prof_text">POSSE`+profile[index].POSSE+`</div>`+
        `<div class="prof_text">`+profile[index].university+`</div>`+
        `<div class="prof_text">`+profile[index].faculty+`</div>
        </div>`+
        `<ul id="modal_hobby"><h2>趣味</h2>`+  //for文書けたら嬉しい
          `<li class="prof_text">`+profile[index].hobby[0]+`</li>`+
          `<li class="prof_text">`+profile[index].hobby[1]+`</li>`+
          `<li class="prof_text">`+profile[index].hobby[2]+`</li>`+
        `</ul>`+
        `<ul><h2>最近ハマっていること</h2>`+
          `<li class="prof_text">`+profile[index].addict[0]+`</li>`+
          `<li class="prof_text">`+profile[index].addict[1]+`</li>`+
          `<li class="prof_text">`+profile[index].addict[2]+`</li>`+
        `</ul>`+
      `</div>`+

      `<div class="sns_box modal_box">`+
        `<div class="sns_icon">`+
        `<a href = "https://www.instagram.com/t.itsuki0724/">`+    
        `<img class="sns_icon_image" src="./assets/images/Instagram_logo.webp" alt="インスタのロゴ">`+
        `</a>`+
        `</div>`+
        `<div class="sns_icon">`+
        `<a href = "`+profile[index].line+`">`+   
        `<img class="sns_icon_image" src="./assets/images/line_logo.png" alt="Lineのロゴ">`+
        `</a>`+
        `</div>`+
      `</div>`+

      `<div class="interview_box modal_box">`+
        `<p>`+profile[index].interview+`</p>`+
      `</div>`+
    `</section>` 
  

  }

  randomProfPickUp(randomIndex);


  // ここからメニュー
  const menu = document.getElementById('menu');
  menu.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    if(sideNav.classList.contain('active')){
      $('.side_nav').fadeOut();
    } else {
      $('.side_nav').fadeIn();
    }
  })