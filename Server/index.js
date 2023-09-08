import express from 'express'
import cors from 'cors'
import { login } from './login.js'
import { register } from './register.js'
import sql from 'mssql'
import config from './dbconfig.js'

let pool = await sql.connect(config)

let users = await getUsers()

async function getUsers() {
    let result = await pool.request().execute('getUsers')
    console.log(result.recordsets[0])
    return result.recordsets[0]
}

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.post('/login', async (req, res) => {
    const return_login = await login(req.body, users)
    if (return_login) res.status(200).send({ 'message': 'authenticated' })
    else res.status(404).send({ 'message': 'user not found' })
})

app.post('/register', async (req, res) => {
    const return_register = await register(req.body, users)
    if (return_register) {
        console.log(req.body)
        const { username, pass } = req.body
        const request = new sql.Request(pool)
        request
            .input('username', sql.NVarChar(50), username)
            .input('pass', sql.NVarChar(50), pass)
            .execute('insertUser');
        res.status(201).send({ 'message': 'user created' })
        users = await getUsers()
    }
    else res.status(400).send({ 'message': 'existent user' })
})

app.post('/createProfile', async (req, res) => {
    console.log(req.body)
    const { nombre, apellido } = req.body
    const request = new sql.Request(pool)
    request
        .input('nombre', sql.NVarChar(50), nombre)
        .input('apellido', sql.NVarChar(50), apellido)
        .execute('createProfile');
    res.status(201).send({ 'message': 'profile created' })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})