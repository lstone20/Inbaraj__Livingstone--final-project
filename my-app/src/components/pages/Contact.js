import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'
import './Contact.css';


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        if (response.status >= 400) {
            setFailure(true)
        } else {
            setSuccess(true)
        }
    }

    return (
        <Container>
            <h3>Please fill the form and submit. I will respond as soon as possible</h3>
            {success && 
                <Card className="text-white bg-primary my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">Thank you! for submitting your inquiry, I will get back to you ASAP</div></CardText>
                    </CardBody>
                </Card>
            }
            {failure &&
                <Card className="text-white bg-danger my-1 py-1 text-center">
                    <CardBody>
                        <CardText className="text-white m-0"><div className="alert">Oops! something went wrong, try again after sometime</div></CardText>
                    </CardBody>
                </Card>
            }
            <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phoneEntry" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                    <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="messageEntry" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <div className="button"><Button disabled={success || failure} color="success">Submit</Button></div>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

    export default Contact