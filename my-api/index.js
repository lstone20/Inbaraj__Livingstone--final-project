import express from 'express'
import * as jwtGenerator from 'jsonwebtoken'
import entryRoutes from './src/entries'
import cors from 'cors'
import {v4 as uuidv4} from 'uuid'
import * as db from './src/dataHandler'
import { validateBody, validateUser, checkValidemail, checkPasswordlength } from "./src/inputValidation";

const app = express()
const PORT = process.env.PORT || 4000
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

app.use(express.json())
app.use(cors())

app.post('/auth', (req, res) => {
    let loginUser = {
        email: req.body.username,
        password: req.body.password
    };
    db.readUsers().then((usersJson) => {
        const index = usersJson.findIndex(user => user.email == req.body.username)
      if (index == -1) {
          return res.status(401).json({message: "incorrect credentials provided"})
          }
      else {
          bcrypt.compare(loginUser.password, usersJson[index].password, function(err, result) {
              if (result == false) {
              return res.status(401).json({message: "incorrect credentials provided"})
              }
              else {
                let token = jwt.sign(loginUser, process.env.JWT_SECRET);
                //return res.status(200).send(`token: "${token}"`);
                console.log(token)
                return res.send({token})
              }
          });
          }
      })
})


app.post("/users", validateUser, checkValidemail, checkPasswordlength, (req, res) => {
    let newUser = {
        id: uuidv4(),
        name: req.body.userfullname,
        password: req.body.userpassword,
        email: req.body.useremail
        
      };
      let user = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      };
      bcrypt.hash(req.body.userpassword, 10, function(err, hash) {
        // Store hash in your password DB.
        newUser.password = hash
        let token = jwt.sign(newUser, process.env.JWT_SECRET);
        db.adduser(newUser)
        return res.send(newUser)
        })
    });


app.use('/contact_form/entries', entryRoutes)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
