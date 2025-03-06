import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import List from './assets/components/List'

function App() {
  const [user, setUser] = useState([])
  const [newUser, setNewUser] = useState ({name: "", email:""})

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  },[])

  const handleChange = (e, key) => {
    setNewUser((prev) => ({...prev, [key]: e.target.value}));
  }

  const deleteUser = (id) => {
    setUser(() => user.filter((item) => item.id !== id))
  }

  const addUser = () => {
    setUser((prev) => ([...prev, { ...newUser, id: prev.length + 1 }]))
    setNewUser({ name: "", email: "" })
  }

  return (
    <>
      <h1>Users</h1>
      <Form 
        onClick={addUser} 
        valueName={newUser.name} 
        valueEmail={newUser.email} 
        onChangeName={(e) => handleChange(e, "name")} 
        onChangeEmail={(e) => handleChange(e, "email")} 
      />
      <List user={user} onclick={deleteUser} />
    </>
  )
}

export default App