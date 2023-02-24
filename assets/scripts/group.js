'use strict';

// ここからこうよう

const group = [
  {
    name: 'サッカーグループ',
    article: ['', ''],
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  },
  {
    name: 'バスケグループ',
    article: ['', ''],
    line: 'https://line.me/ti/g/6KnjMtpfyR'
  }
]

const groupHtml = document.getElementById('group_wrapper');
const groupNameText = document.getElementById('group_name_text');
const groupArticleTitle = document.getElementById('group_article_title');
const groupArticleBody = document.getElementById('group_article_body');

for(let i = 0; i < group.length; i++){
  groupNameText.innerHTML = group[i].name;
  groupArticleTitle.innerHTML = group[i].name + 'の記事';
  for(let j = 0; j < group.article.length; j++){

  }
}