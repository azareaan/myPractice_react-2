import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import List from './assets/components/List'

function App() {
  const [user, setUser] = useState([])

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  },[])

  const deleteUser = (id) => {
    setUser(() => user.filter((item) => item.id !== id))
  }

  // const addUser = (name, email) => {}

  return (
    <>
      <h1>Users</h1>
      <Form />
      <List user={user} onclick={deleteUser} />
    </>
  )
}

export default App