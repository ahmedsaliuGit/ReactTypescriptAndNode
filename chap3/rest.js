function doSomething(a, ...others) {
  console.log(a, others, others[others.length - 1]);
}

doSomething(1, 1, 2, 8, 4, 5, 6, 7);
