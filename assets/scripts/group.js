'use strict';

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
  }
]

const groupHtml = document.getElementById('group_wrapper');

for(let i = 0; i < group.length; i++){
  groupHtml.innerHTML +=
  `  <div class="group_name">
  <h3 class="group_name_text">`+group[i].name+`</h3>
</div>
<div class="group_article">
  <h4 class="group_article_title">`+group[i].name+`の記事</h4>
  <ul class="group_article_body">
    <li>`+group[i].article[0]+`</li>
    <li>`+group[i].article[1]+`</li>
  </ul>
</div>
<div class="group_total">
  <p>`+group[i].total+`人が参加しています</p>
</div>
<div>
  <img class="group_image" src="./assets/images/group_image/`+group[i].image+`" alt="">
</div>
<div class="group_sns_icon">
<a href="`+group[i].line+`">
<img class="group_sns_icon_image sns_icon_image" src="./assets/images/line_logo.png" alt="Lineのロゴ">
</a>
</div>`
}