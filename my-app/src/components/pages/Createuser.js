import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'
import './Contact.css';

const Createuser = () => {
    const [useremail, setuserEmail] = useState("")
    const [userfullname, setUserFullName] = useState("")
    const [userpassword, setuserPsw] = useState("")
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [InvalidPwd, setInvalidPwd] = useState(false)
    const [InvalidEmail, setInvalidEmail] = useState(false)
    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({userfullname, userpassword, useremail})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setFailure(true)
            if (payload.message === "Password must be minimum 8 characters") {
                setInvalidPwd(true)
                setFailure(false)
            } else if (payload.message === "Enter a valid email address") {
                setInvalidEmail(true)
                setFailure(false)
            }
        } else {
            setSuccess(true)
        }
    }

    return (
        <Container>
            <h3>Create New Admin User</h3>
            {success && 
                <Card className="text-white bg-primary my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">User Created Successfully !!!</div></CardText>
                    </CardBody>
                </Card>
            }
            {failure &&
                <Card className="text-white bg-danger my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">Oops! Something Went Wrong</div></CardText>
                    </CardBody>
                </Card>
            }
            {InvalidPwd &&
                <Card className="text-white bg-danger my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">Password must be minimum 8 characters</div></CardText>
                    </CardBody>
                </Card>
            }
            {InvalidEmail &&
                <Card className="text-white bg-danger my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">Enter a valid email address</div></CardText>
                    </CardBody>
                </Card>
            }
            <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="emailEntry" sm={2}>User Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email"  required value={useremail} onChange={e => setuserEmail(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={userfullname} onChange={e => setUserFullName(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="passwordEntry" sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" id="passwordEntry" placeholder="Select a password" required value={userpassword} onChange={e => setuserPsw(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <div className="button"><Button disabled={success || failure || InvalidPwd || InvalidEmail} color="success">Submit</Button></div>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

    export default Createuser