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
    name: 'サッカーグループ 猪突猛進',
    article: ['毎週土曜日に多摩川の河川敷でサッカーをしてます！', 'サッカーが大好きなposse生が集まって<br>サッカーを見たりしてるよ。','サッカーが大好きなposse生沢山集まれ！！'],
    total: 9,
    image: ['1.jpg','2.jpg','3.jpg','4.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    id: 2,
    name: 'バスケグループ slumdank',
    article: ['毎週木・日曜日に日吉の体育館で練習してます！', 'みんな優しくてとてもアットホームな雰囲気！','バスケ初心者大歓迎！みんなおいで〜'],
    total: 3,
    image: ['5.jpg','6.jpg','7.jpg','8.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    id: 3,
    name: '野球グループ 読買ジャイアンズ',
    article: ['野球好きのposse生集まれ！毎日東京ドームで試合してるよ！', 'ガチで野球やりたい人集まれ！','どうだ？君も野球をやらないか？？'],
    total: 15,
    image: ['9.jpg','10.jpg','11.jpg','12.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    id: 4,
    name: 'サッカーグループ 表参道・D・ハバズ',
    article: ['こんにちは！サッカーサークル　表参道・D・マンモス　です。', 'リーグ戦優勝目指して毎日18時間練習頑張ってます。','サッカー初心者非大歓迎！'],
    total: 27,
    image: ['13.jpg','14.jpg','15.jpg','16.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR',
  },
  {
    id: 5,
    name: 'バスケグループ 鴎バス',
    article: ['こんにちは！バスケットボールサークル 鴎バス です。', '世界一目指して、毎月第1、第3日曜日に代々木公園で練習してます','バスケ初心者非大歓迎！みんなおいで！！'],
    total: 87,
    image: ['17.jpg','18.jpg','19.jpg','20.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR',
  },
  {
    id: 6,
    name: 'インカレテニスグループ ラリー',
    article: ['こんにちは！インカレテニスグループ ラリー です。', '現在では10個の大学から総勢100名が集まり、日々交流を深めています。','テニス初心者非大歓迎！みんなおいで！！'],
    total: 87,
    image: ['21.jpg','11.jpg','5.jpg','15.jpg'],
    line: 'https://line.me/ti/g/6KnjMtpfyR',
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
    <li>`+group[i].article[2]+`</li>

  </ul>
</div>
<div class="group_total group_box">
  <p class="group_total_text">`+group[i].total+`人が参加しています</p> <div class="line_img_box"> <a href = "https://line.me/ti/g/RRhtWiy0y0"><img class="line_img" src=./assets/images/line_logo.png></a></div>
</div>
<div class="group_img_box group_box">
  <div class ="group_img_box_top">
  <img class="group_image" src="./assets/images/group_image/`+group[i].image[0]+`" alt="">
  <img class="group_image" src="./assets/images/group_image/`+group[i].image[1]+`" alt="">
  </div>
  <div class ="group_img_box_top">
  <img class="group_image" src="./assets/images/group_image/`+group[i].image[2]+`" alt="">
  <img class="group_image" src="./assets/images/group_image/`+group[i].image[3]+`" alt="">
  </div>

</div>


</section>`
}


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