console.log('hello');

document.body.innerText = 'allowha'

const book = 'book', dog = 'dog';

console.log(book, dog);

/**
 *
 * @param {Number} param1
 */
const myFunc = (param1) => {

};



let plusEqual = 3;
plusEqual += 5;

console.log('plusEqual: ', plusEqual);


(() => {
  let two = '2';
  let value = 1 + two;
  console.log( '1 + "2": ', value, typeof value);

  let value2 = 1 + 5 + 'ABC';
  console.log("1 + 5 + 'ABC': ", value2);

  console.log('10 - "abc": ', 10 - "abc");
  console.log('10 - "5": ', 10 - "5");

  console.log('true + 1: ', true + 1);

})();

// / 연산자
(() => {
  console.log('-----------------------------------------');
  console.log('나누기 연산자');
  console.log('-----------------------------------------');

  console.log(' a / 10: ', 'a' / 10);
  console.log(' 0 / 0: ', 0 / 0);
  console.log(' 0 / 10: ', 0 / 10);
  console.log(' 10 / 0: ', 10 / 0 );
})();


//8강
(() => {

  console.log("-------------------------------")
  console.log("!!!unicode")
  console.log('U+2765: ', '\u2765')
  console.log('U+A765: ', '\uA765')
  console.log('U+abcd: ', '\uabcd')
  console.log("-------------------------------")
})();


//9강

(() => {
  console.log("-------------------------------")
  console.log("비교 연산자")
  console.log("스트링 비교는 code point 값을비교. 하나만 스트링인경우 false 반환")
  console.log('\\u0001 > \\u1234: ', '\u0001' > '\u1234');
  console.log(' A > 가: ', 'A' > '가', 'A'.codePointAt(0).toString(16), '가'.codePointAt(0).toString(16));
  console.log(String.fromCodePoint('A'.codePointAt(0)) )
  // console.log(' A > 가: ', 'A' > '가', 'A'.codePointAt(0), parseInt('가'.codePointAt(0), 16));
  console.log(' 1(숫자) > 가: ', 1 > '가');
  console.log("-------------------------------")
})();


//11강

(() => {
  console.log("-------------------------------")
  console.log("콤마, 그룹핑, 논리 연산자. 최초로 true 인 값을 반환. 없을시 마지막 false 값 반환")
  console.log("|| 연산자")
  console.log("0 || 0 || 3: ", 0 || 0 || 3);
  console.log("0 || 0 || A: ", 0 || 0 || 'A');
  console.log('0 || 0', 0 || 0);
  console.log('0 || null: ', 0 || null);
  console.log('0 || undefiend: ', 0 || undefined);
  console.log("0 || '': ", 0 || '');

  console.log(" && 연산자. 전부다 true 일경우 마지막 true 값 반환. false 값 존재시 첫번째로 발견된 false 값 반환");
  console.log('1 && 2 && 3: ', 1 && 2 && 3);
  console.log('1 && 0 && 3: ', 1 && 0 && 3);
  console.log('A && B && C: ', 'A' && 'B' && 'C');
  console.log('1 && false && 3: ', 1 && false && 3);
  console.log('null && 4 && 3: ', null && 4 && 3);
  console.log('undefiend && null && 0: ', undefined && null && 0);

  console.log("-------------------------------")
})();


(() => {
  let total = 0;
  let odd = 0;
  let even = 0;

  for(let i = 1; i<= 50; i++){
    total += i;
    if(i % 2 === 0) {even += i;}
    else {odd += i;}
  }
  console.log("total, even, odd: ", total, even, odd);
})()