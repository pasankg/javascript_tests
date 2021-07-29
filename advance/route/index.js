const express = require('express')
const app = express()

const courses = [
 { id: 1, name: 'course1' },
 { id: 2, name: 'course2' }
]

app.get('/', (req, res) => {
 res.send('hello 2')
})

app.get('/api/courses', (req, res) => {
 res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {

 // arrow function
 // https://www.w3schools.com/Js/js_arrow_function.asp
 const course = courses.find(
  (element) => {
   console.log(element)
   return element.id === parseInt(req.params.id)
  }
 )

 console.log(course)
 if (!course) res.status(404).send('not found')
 res.send(course)
})




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`))