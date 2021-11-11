import {useEffect, useState, useRef} from 'react';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import TabContent from 'react-bootstrap/TabContent'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Post from './Post'

/*
    Should fetch users then display them in table on webpage.

    If selected, should display all posts from that user.

*/

const Table = props => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {
            return response.json()
        }).then((json) => {
            setUsers(json)
        })
    }, [])

    const renderUsers = () => {
        if (users !== []) {
            const output = users.map((user) => {
                return (
                    <Nav.Item>
                        <Nav.Link eventKey={String(user.id)}>{user.name}</Nav.Link>
                    </Nav.Item>
                )
            })      
            return <Nav variant="pills" className="flex-column">{output}</Nav>             
        }
        return "Loading..."
    }

    const renderPosts = () => {
        if (users !== []) {
            const output = users.map((user)=> {
                return  (
                    <Tab.Pane eventKey={String(user.id)}>
                        <Post userId={user.id}/>
                    </Tab.Pane>
                )  
            })
            return <Tab.Content>{output}</Tab.Content>
        }
        return "Loading..."
    }

    return (
        <Tab.Container id="left-tabs-example">
            <Row>
                <Col sm={3}>
                    {renderUsers()}
                </Col>
                <Col sm={9}>
                    {renderPosts()}
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Table;