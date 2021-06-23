import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import { useHistory } from "react-router-dom";


const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('IsAuth')
        history.push("/login")
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])
    return (
        <Container>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                      listing.map(entry => <tr><td>{entry.name}</td><td>{entry.phoneNumber}</td><td>{entry.email}</td><td>{entry.content}</td></tr>)
                    }
                </tbody>
            </Table>
        <Row className="my-5">
            <Button onClick={logout} color="primary">Logout</Button>
        </Row>
        </Container>
    )
}

export default Listings