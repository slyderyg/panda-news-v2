import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BLOG_ROUTE, LOGIN_ROUTE } from '../utils/consts';




const Navigation = observer( () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }
 
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Panda News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user.isAuth?
            <Nav className="ms-auto gap-3">
              <Button variant='outline-secondary' onClick={() => navigate(BLOG_ROUTE)}>Home</Button>
              <Button variant='outline-secondary' onClick={() => navigate(ADMIN_ROUTE)}>Dashboard</Button>
              <Button variant='outline-secondary' onClick={logOut}>Logout</Button>
            </Nav>
            :
            <Nav className="ms-auto">
              <Button variant='outline-secondary' onClick={() => navigate(LOGIN_ROUTE)}>Auth</Button>
            </Nav>            
        }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
});

export default Navigation