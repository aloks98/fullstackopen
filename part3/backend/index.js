const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('combined'))

function generateId() {
  return Math.floor(Math.random() * Math.floor(9999999));
}

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    res.json(person);
  } else {
    res.status(404).send(`<p>Not Found</p>`)
  }

});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
});

app.post("/api/persons", (req, res) => {
  const body = req.body
  if (!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  }

  const name = persons.find(p => p.name === body.name)
  if(name) {
    return res.status(400).json({
      error: "Name must be unique"
    })
  }

  if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  res.status(201).json(person)

})

app.get("/api/info", (req, res) => {
  let totalPersons = persons.length;
  let currentTime = new Date();
  res.send(
    `<p>Phonebook has info for ${totalPersons} people</p> <p>${currentTime}</p>`
  );
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
