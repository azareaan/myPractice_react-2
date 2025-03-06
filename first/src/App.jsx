import { useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import List from './assets/components/List'

function App() {
  const [user, setUser] = useState([
    {name: "Leanne Graham", email: "Sincere@april.biz"},
    {name: "Ervin Howell", email: "Shanna@melissa.tv"},
    {name: "Clementine Bauch", email: "Nathan@yesenia.net"}
  ])

  const deleteUser = (name) => {
    setUser(() => user.filter((item) => item.name !== name))
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