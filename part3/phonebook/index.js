require('dotenv').config()

var morgan = require('morgan')
const express = require('express')
const app = express()

const API_ENDPOINT = process.env.API_ENDPOINT
const PORT = process.env.PORT

let persons = require('./data/persons.json')

app.use(express.json())

morgan.token('content', function (request, response) { 
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
    return ' '
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

const generateId = () => {
    let id
    do {
        id = Math.floor(Math.random() * 100)
    } while (persons.find(person => person.id === id))
    return id
}

// Pages
app.get('/info', (request, response) => {
    pageHtml = (`
<p>Phonebook has info for ${persons.length} people</p>
<p>${new Date}</p>
        `)
    response.send(pageHtml)
})

// API RESTful
app.get(API_ENDPOINT, (request, response) => {
    response.json(persons)
})

app.get(`${API_ENDPOINT}/:id`, (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    person
        ? response.json(person)
        : response.status(404).end()
})

app.post(API_ENDPOINT, (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const newPerson = {
        id: generateId(),
        name: body.name,
        number:body.number
    }

    persons = persons.concat(newPerson)

    response.json(newPerson)
})

app.delete(`${API_ENDPOINT}/:id`, (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (!person) {return response.status(404).end()}

    persons = persons.filter(person => person.id !== id)

    response.json(person)
})

app.listen(PORT)