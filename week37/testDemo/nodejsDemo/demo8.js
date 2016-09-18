function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction();
}

execute(say, "Hello");
