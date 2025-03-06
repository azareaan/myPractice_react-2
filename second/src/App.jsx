import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './assets/components/Gallery'

function App() {
  const [image, setImage] = useState([]);
  const [counter, setCounter] = useState(0);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/random?count=4&client_id=${accessKey}`

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setImage(prevImages => [...prevImages, ...data]))
    .catch(error => console.error("Error fetching images:", error));
  }, [counter])  

  return (
    <>
    <h1>gallery</h1>
      <Gallery images={image}/>
      <button onClick={() => {setCounter(counter + 1)}}>more</button>
    </>
  )
}

export default App