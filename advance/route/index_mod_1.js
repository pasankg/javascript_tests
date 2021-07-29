const express = require('express')
const app = express()

// This is a middleware function
// This methord retunrs a middleware function.
// It reads the request and if there is a json object in the body of the request, 
// It will parse the body to a JSON object and set req.body
app.use(express.json())

const courses = [
 { id: 1, name: 'course 1' },
 { id: 2, name: 'course 2' },
 { id: 3, name: 'course 3' },
 { id: 4, name: 'course 4' }
]

// This is a route handler middleware function
app.get('/', (req, res) => {
 res.send('hello 2')
})

app.get('/api/courses', (req, res) => {
 res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {

 // Arrow function
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