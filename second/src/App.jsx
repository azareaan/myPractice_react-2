import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './assets/components/Gallery'

function App() {
  const [image, setImage] = useState([
      "./src/assets/image/image1.jpg",
      "./src/assets/image/image2.jpg",
      "./src/assets/image/image3.jpg",
      "./src/assets/image/image4.jpg",
      "./src/assets/image/image5.jpg",
      "./src/assets/image/image6.jpg",
      "./src/assets/image/image7.jpg",
      "./src/assets/image/image8.jpg",
      "./src/assets/image/image9.jpg",
      "./src/assets/image/image10.jpg",
      "./src/assets/image/image11.jpg",
      "./src/assets/image/image12.jpg"
    ]);  

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => { setImage(data)})
    .catch(error => console.error("Error fetching images:", error));
  }, [])

  return (
    <>
    <h1>gallery</h1>
      <Gallery images={image}/>
    </>
  )
}

export default App
