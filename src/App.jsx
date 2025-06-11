import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { MusicIcon } from 'lucide-react'

const albums = [
  {
      img: "./images/allforyou.jpg",
      name: "All For You",
      artist: "Amaria" ,
      genre: "R&B",
  },
  {
    img: "./images/mamasgun.jpg",
    name: "Mama's Gun",
    artist: "Erykah Badu" ,
    genre: "Neo Soul",
  },
  {
    img: "./images/anti.jpg",
    name: "ANTI",
    artist: "Rihanna" ,
    genre: "Pop",
  },
  {
    img: "./images/doomsday.jpg",
    name: "Doomsday",
    artist: "MF DOOM" ,
    genre: "Rap",
  },
  {
    img: "./images/awaken.jpg",
    name: "Awaken, My Love!",
    artist: "Childish Gambino" ,
    genre: "R&B",
  },
  {
    img: "./images/hivemind'.jpg",
    name: "Hive Mind",
    artist: "The Internet" ,
    genre: "R&B/Soul",
  },
  {
    img: "./images/inrainbows.png",
    name: "In Rainbows",
    artist: "Radiohead" ,
    genre: "Alternative/Indie",
  },
  {
    img: "./images/egodeath.jpg",
    name: "Ego Death",
    artist: "The Internet" ,
    genre: "Neo Soul",
  },
  {
    img: "./images/roseinthedark.jpg",
    name: "Rose in the Dark",
    artist: "Cleo Sol" ,
    genre: "Neo Soul",
  },
  {
    img: "./images/untitled.jpg",
    name: "Untitled Unmastered",
    artist: "Kendrick Lamar" ,
    genre: "Hip-Hop/Rap",
  },

  ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div style={{display: 'flex', flex: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <MusicIcon/>
        <h1 style={{margin: 12}}>Album Listening Club</h1>
        <MusicIcon/>
      </div>
      
      <div className='album-container'>

        {albums.map((item,index) => (

          <Card key={index}
          img={item.img}
          name={item.name} 
          artist={item.artist}
          genre={item.genre}
          />
        ))}
        
      </div>
      
    </div>
  )
}

export default App
