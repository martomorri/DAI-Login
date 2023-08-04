import express from 'express'
import cors from 'cors'
import { login } from './login.js'

const user = {
    username: 'aloteymorro',
    pass: 'dephished'
}

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
    const return_login = await login(req.body, user)
    if (return_login) res.status(200).send({'message': 'authenticated'})
    else res.status(404).send({'message': 'user not found'})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})