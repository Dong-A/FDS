
console.log( 0 == "0");


var condition = 'gogo';

condition === 'gigi' ? console.log('gigi') : console.log('chacha');

function getSomeMoney(money) {
  // money = money || 100;

    if (money !== 0) {
      money = money || 100;
    }


  return "너가 필요한 돈은 " + money + "원이구나! 내가 줄거 같아?";
}

var result_money = getSomeMoney(0);
console.log(result_money);

var condition = true;
var excuteFn = function() { console.log('condition is treu') }

condition && excuteFn();
// 위에 꺼랑 아래꺼랑 같다.
if(condition) {
  excuteFn();
}

condition || excuteFn();
// 위에 꺼랑 아래꺼랑 같다.
if(!condition) {
  excuteFn();
}



var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// 위에 꺼랑 아래꺼랑 같다.
var viewport_width;
if (window.innerWidth) {
  viewport_width = window.innerWidth;
} else if (document.documentElement.clientWidth) {
  viewport_width = document.documentElement.clientWidth;
} else {
  viewport_width = document.body.clientWidth;
}

var member = ['헐크', '아이언맨', '캡틴아메리카', '토르'];

switch (member[1]) {
  case '헐크' :
    console.log('헐크');
  break;
  case '아이언맨' :
    console.log('아이언맨');
  break;
  case '캡틴아메리카' :
    console.log('캡틴아메리카');
  break;
  case '토르' :
    console.log('토르');
  break;
}
