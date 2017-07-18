function forLoop(array){
  for (var i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push( `I am ${i} strange loops`)
    }
  }
  console.log(array);
  return array
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && (Math.random() >= 0.5));
  return array
}

// var test = [];

// forLoop(test);

// whileLoop(10)
