'use strict';
const userNameInput = document.getElementById('user-name') ;
const assessmentButton = document.getElementById('assessment');
const resultDividet =document.getElementById('result-area');
const tweetDividet = document.getElementById('tweet-area');
/*指定したHTML要素の子要素をすべて削除する。
*@{HTMLElement}erement　HTMLの要素
**/

function removeALLChirdren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
        assessmentButton.onclick;
    }
    } 

userNameInput.onkeydown= (Event) => {
if(Event.key==='Enter'){
    assessmentButton.onclick();
}}

assessmentButton.onclick = () => {
    const userName =userNameInput.value
  if(userName.length===0){
        return;
    }
    removeALLChirdren(resultDividet);
  console.log(userName);
  const header = document.createElement('h3');
  header.innerText ='診断結果';
  resultDividet.appendChild(header);
  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText= result;
  resultDividet.appendChild(paragraph);
//ツイートエリアの作成
  removeALLChirdren(tweetDividet);
  const anchor = document.createElement('a');
  const hrefvalue ='https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href',hrefvalue);
  anchor.className='twitter-hashtag-button';
  anchor.setAttribute('data-text',result);
  anchor.innerText='Tweet あなたのいいところ';
  tweetDividet.appendChild(anchor);
  twttr.widgets.load();
};



/**
 * 回答内容の変数一覧
 */

const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
    '{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{storing}usernameユーザーの名前
 * @return｛storing｝診断結果
 */
function assessment(userName){
    //
    let sumofcharCode = 0;
    for(let i=0 ;i < userName.length;i++){
        sumofcharCode = sumofcharCode+userName.charCodeAt(i);
    }
        const index = sumofcharCode % answers.length;
        let result = answers[index];
        result = result.replace(/\{userName\}/g,userName);
        return result;

    }
    console.log(assessment('さとみ'));
    console.log(assessment('ようへい'));
    console.log(assessment('まい'));
