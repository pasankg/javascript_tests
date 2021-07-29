// Shared function
function getPfizer() {
  return new Promise((resolve, reject) => {
    resolve(`first`)
    reject(`reject`)
  })
}

/************
// Option 1

getPfizer().then((d) => {
  console.log(`Yaii, I got ${d} doze`);
}).catch((e) => {
  console.log(`Noo, I didn't get ${e} dose`);
}).finally(() => {
  console.log(`I run at last after resolve or reject`)
})

// Option 2
async function getStatus() {
  let result = await getPfizer();
  console.log(result)
}

*************/

// Option 3 - also can be written as
async function getStatus() {
  try {
    let result = await getPfizer();
    console.log(result)
  } catch (e) {
    console.log(e)
  }
  // write the final part of the code here
}

// Invoke
// Shared with option 2 and 3
getStatus();