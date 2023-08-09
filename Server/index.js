import express from 'express'
import cors from 'cors'
import { login } from './login.js'
import { register } from './register.js'

const users = [{
    username: 'aloteymorro',
    pass: 'dephished'
}]

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.post('/login', async (req, res) => {
    const return_login = await login(req.body, users)
    if (return_login) res.status(200).send({'message': 'authenticated'})
    else res.status(404).send({'message': 'user not found'})
})

app.post('/register', async (req, res) => {
    const return_register = await register(req.body, users)
    if (return_register) res.status(201).send({'message': 'user created'})
    else res.status(400).send({'message': 'existent user'})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})