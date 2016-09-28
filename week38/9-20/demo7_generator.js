function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i+'ss';
  yield* anotherGenerator(i);
  yield ++i;
  yield ++i;
}

var gen = generator(10);

console.log(gen.next()); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value);
console.log(gen.next().value); // 20
