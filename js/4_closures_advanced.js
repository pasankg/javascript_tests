function populateArr() { 
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(() => {
      console.log(i);
    });
  }
  return arr;
}

let values = populateArr();

values.map((fn) => {
  fn(); // <--- result 0,1,2
});