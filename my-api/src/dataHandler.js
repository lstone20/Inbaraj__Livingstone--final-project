import { promises as fs } from 'fs'
import path from 'path'
import { isArray } from 'util'

const file = path.resolve('./data/db.json')
const users = path.resolve('./data/users.json')

// private function for the module
const write = async (data) => {
    await fs.writeFile(file, JSON.stringify(data))
}

const writeuser = async (data) => {
    await fs.writeFile(users, JSON.stringify(data))
}

const readUsers = async () => {
    const json = await fs.readFile(users)
    return JSON.parse(json)
}

const add = async (data) => {
    try {
        let content = await getAll()
        content.push(data)
        write(content)
        console.log("file written")
    } catch (err) {
        console.error(err)
        throw err
    }

}

const adduser = async (data) => {
    try {
        let content = await getAllUsers()
        content.push(data)
        writeuser(content)
        console.log("user written")
    } catch (err) {
        console.error(err)
        throw err
    }

}

const getAll = async () => {
    try {
        let content = await fs.readFile(file)
        return JSON.parse(content)
    } catch (err) {
        console.error(err)
        throw err
    }
}

const getAllUsers = async () => {
    try {
        let content = await fs.readFile(users)
        return JSON.parse(content)
    } catch (err) {
        console.error(err)
        throw err
    }
}

const update = async (id, data) => {
    let content = await getAll()
    if (!isArray(content)) {
        throw new Error("No data found")
    }

    const itemLocation = content.findIndex(item => item.id=== id)
    console.log(id)
    if (itemLocation != -1) {
        content[itemLocation] = data
    } else {
        throw new Error(`ID: ${id} not found`)
    }

    // let's write it back to the file now
    write(content)
}

export {
    add,
    adduser,
    getAll,
    update,
    readUsers
}
