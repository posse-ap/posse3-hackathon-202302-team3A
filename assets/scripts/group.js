'use strict';

// ここからいつき


// モーダルアニメーション


// サイドナビゲーション

const sideNav = document.getElementById('side_nav');
if(screen.width > 768){
  if(!sideNav.classList.contains('active')){
    sideNav.classList.add('active');
  }
} else {
  if(sideNav.classList.contains('active'))
  sideNav.classList.remove('active');
}


$(window).resize(function () {
  const width = $(window).width();
  console.log(width);

  if(width > 768){
    if(!sideNav.classList.contains('active'))
    sideNav.classList.add('active');
  } else {
    if(sideNav.classList.contains('active'))
    sideNav.classList.remove('active');
  }
});


// 検索機能

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchSections);

function searchSections() {
  const searchInput = document.getElementById("searchInput");
  const keyword = searchInput.value.toLowerCase();

  const sections = document.querySelectorAll(".group");
  sections.forEach((section) => {
    const name = section.querySelector(".group_name > div:first-child").textContent.toLowerCase();
    // const addictions = section.querySelectorAll(".group_article> ul:nth-child > li");

    let match = false;

    if (name.includes(keyword) ) {
      match = true;
    }

    // addictions.forEach((addiction) => {
    //   if (addiction.textContent.toLowerCase().includes(keyword)) {
    //     match = true;
    //   }
    // });
    if (match) {
      section.style.display = "grid";
    } else {
      section.style.display = "none";
    }
  });
}

// キャンセルボタンクリックでデフォルトに戻す
function cancelSearch() {
  const sections = document.querySelectorAll(".group");
  
  sections.forEach((section) => {
    section.style.display = "grid";
  })
}
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", cancelSearch);



// ここからこうよう



const group = [
  {
    id: 1,
    name: 'サッカーグループ',
    article: ['仮のテキスト', '仮のテキスト'],
    total: 9,
    image: 'soccer.jpg',
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    id: 2,
    name: 'バスケグループ',
    article: ['仮のテキスト', '仮のテキスト'],
    total: 10,
    image: 'basket.jpg',
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    id: 3,
    name: '野球グループ',
    article: ['仮のテキスト', '仮のテキスト'],
    total: 8,
    image: 'baseball.jpg',
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
]


const groupHtml = document.getElementById('group_wrapper');

for(let i = 0; i < group.length; i++){
  groupHtml.innerHTML +=
  `<section class="group">
  <div class="group_name group_box">
  <div class="group_name_text">`+group[i].name+`</div>
</div>
<div class="group_article group_box">
  <h4 class="group_article_title">`+group[i].name+`の記事</h4>
  <ul class="group_article_body">
    <li>`+group[i].article[0]+`</li>
    <li>`+group[i].article[1]+`</li>
  </ul>
</div>
<div class="group_total group_box">
  <p class="group_total_text">`+group[i].total+`人が参加しています</p>
</div>
<div class="group_box">
  <img class="group_image" src="./assets/images/group_image/`+group[i].image+`" alt="">
</div>
<div class="group_sns_icon group_box">
<a href="`+group[i].line+`">
<img class="group_sns_icon_image sns_icon_image" src="./assets/images/line_logo.png" alt="Lineのロゴ">
</a>
</div>
</section>`
}

