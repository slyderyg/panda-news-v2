import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Stack } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BLOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite';
import { Context } from '..'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      history(BLOG_ROUTE)
    } catch (error) {
        alert(error.response.data.message)
    }

  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card className='mt-5 auth'> 
        <Card.Body>
            <Card.Title className='text-secondary'>
              {isLogin? 'Login' : 'Registration'}
            </Card.Title>

            <Form className='mt-1'>
              <Form.Control className='mt-3' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
              <Form.Control className='mt-3' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </Form>

            {isLogin?
             <Stack className='align-items-baseline' direction='horizontal' gap={3}>
              <NavLink className='ms-1' to={REGISTRATION_ROUTE}>Create an account</NavLink>
              <Button variant='outline-secondary mt-4 ms-auto' onClick={click}>Login</Button>
             </Stack>
             :
             <Stack className='align-items-baseline' direction='horizontal' gap={3}>
              <NavLink className='ms-1' to={LOGIN_ROUTE}>Have an account?</NavLink>
              <Button variant='outline-secondary mt-4 ms-auto' onClick={click}>Create account</Button>
            </Stack>          
          
          }

        </Card.Body>
      </Card>
    </Container>
  )
})

export default Auth