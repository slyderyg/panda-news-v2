import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";
import { observer } from 'mobx-react-lite';
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
    .then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    })
    .catch(error => {})
    .finally(() => setLoading(false))
  
  
  }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }


  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
