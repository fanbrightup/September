function tag(strings, ...values) {
  console.log(strings.raw[0]);
  // "string text line 1 \n string text line 2"
}

tag`string text line 1 \n string text line 2`
