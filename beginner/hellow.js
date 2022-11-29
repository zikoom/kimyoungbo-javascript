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