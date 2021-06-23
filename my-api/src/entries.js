import express from 'express'
import jwt from 'express-jwt'
import * as db from './dataHandler'
import {v4 as uuidv4} from 'uuid'

const router = express.Router()

const validateEntries = (req, res, next) => {
    const body = req.body
    const invalid = []
    console.log(body)
    for (var property in body) {
        console.log(property)
        if (body[property] == null || body[property].length === 0) {
            invalid.push(property)
        }
    }
    const requiredProperties = ["name", "email", "phoneNumber", "content"]
    requiredProperties.filter(prop => !body.hasOwnProperty(prop)).forEach(key => invalid.push(key))
    if (invalid.length > 0) {
        return res.status(400).send({message: "validation error", invalid})
    }
    next()
}

router.post('/', validateEntries, async (req, res) => {
    const body = req.body
    const newEntry = {id: uuidv4(), ...body}
    console.log(newEntry, req.body)
    await db.add(newEntry)
    return res.send(newEntry)
})

router.use(jwt({secret: process.env.JWT_SECRET}))

router.get('/', async (req, res) => {
    res.send(await db.getAll())
})

export default router
