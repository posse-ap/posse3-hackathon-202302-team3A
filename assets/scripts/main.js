
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
    const university = section.querySelector(".modal_prof_box > div:nth-child(3)").textContent.toLowerCase();
    const faculity = section.querySelector(".modal_prof_box > div:nth-child(4)").textContent.toLowerCase();
    const hobbies = section.querySelectorAll(".modal_prof_box > ul:first-child > li");
    const addictions = section.querySelectorAll(".modal_prof_box > ul:nth-child(2) > li");

    let match = false;

    if (name.includes(keyword) || university.includes(keyword) || faculity.includes(keyword)) {
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
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}


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