import React, { Component } from 'react'
import { Button, Container, Form, Nav, Navbar, FormControl } from 'react-bootstrap'
import { BrowserRouter as  Router, Link, Route,  Switch, useParams, useRouteMatch } from 'react-router-dom';
import logotip from '../react.png';
// import About from '../pages/About';
// import Contacts from '../pages/Contacts';
// import Blog from '../pages/Blog';
// import Home from '../pages/Home';

export default function Header() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'> 
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logotip}
                                height='50'
                                width='50'
                                className='d-inline-block align-top'
                                alt='fro'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle arial-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className = 'mr-auto'>
                                <Nav.Link href='/'> Home</Nav.Link>
                                <Nav.Link href='/about'>About Us</Nav.Link>
                                <Nav.Link href='/contacts'>Contacts </Nav.Link>
                                <Nav.Link href='/blog'> Blog</Nav.Link>
                                <Nav.Link href='/developer'>Developer</Nav.Link>
                                <Nav.Link href='/topics'>Topics</Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                type='text'
                                placeholder= 'Search'
                                className = 'mr-sm-2'
                                />
                            <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route path='/about'><About/></Route>
                        <Route path='/contacts'><Contacts/></Route>
                        <Route path='/blog'><Blog/></Route>
                        <Route path='/developer'><Developer/></Route>
                        <Route path='/topics'><Topics/></Route>
                        <Route path='/'><Home /></Route>
                        
                    </Switch>
                </Router>
            </>
        );
}

function Home(){
    return <h1> Home</h1>;
}
function Contacts(){
    return <h1> Contacts</h1>;
}
function Blog(){
    return <h1> Blog</h1>;
}
function About(){
    return <h1> About</h1>;
}
function Developer(){
    return <h1> Developer</h1>
}

function Topics(){
    let match = useRouteMatch();
    return(
        <div>
            <h1>Topics</h1>
            <ul>
                <li>
                    <Link href={`${match.url}/components`}> Components</Link>
                </li>
                <li>
                    <Link href={`${match.url}/props-v-state`}>Props v.State</Link>
                </li>
            </ul>


            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <Topic/>
                </Route>
            </Switch>
        </div>
    );
}
function Topic(){
    let {topicId} = useParams();
return <h3> Requested topic ID:{topicId}</h3>
}


