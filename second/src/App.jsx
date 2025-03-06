import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './assets/components/Gallery'
import axios from "axios"

function App() {
  const [image, setImage] = useState([
    
  ]);
  const [counter, setCounter] = useState(0);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/random?count=4&client_id=${accessKey}`

  useEffect(() => {
    axios.get(url)
    .then((res) => setImage(prev => [...prev, ...res.data]))
    .catch((error) => console.error("Error fetching images:", error));
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