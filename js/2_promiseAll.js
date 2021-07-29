
function getPfizer() {
	return new Promise((resolve, reject) => {
   resolve(`Got Pfizer`)
 })
}

function getAstraZeneca() {
	return new Promise((resolve, reject) => {
   resolve(`Got AstraZeneca`)
 })
}

function getSinopharm() {
	return new Promise((resolve, reject) => {
   resolve(`Got Sinopharm`)
 })
}

// Promise.all() passes only if all functions resolves.
Promise.all([getPfizer(), getAstraZeneca(), getSinopharm()]).then((data) => {
 console.log(data)
})