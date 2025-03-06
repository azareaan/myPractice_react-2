import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './assets/components/Gallery'

function App() {
  const [image, setImage] = useState([])


  useEffect(() => {
      fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=nature&orientation=landscape`)
      .then(response => response.json())
      .then(data => setImage(data))
  }, [])

  return (
    <>
      {/* <Gallery images={image} /> */}
    </>
  )
}

export default App
