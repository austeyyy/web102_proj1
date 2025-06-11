import React from 'react'
import { PlayCircleIcon } from 'lucide-react'
import { Music2Icon } from 'lucide-react'



const Card = (props) => {
  return (
    <div className='music-card'>
        <div>
          <img src={props.img} alt="" className='album-image'/>

          <h2 style={{marginBottom:0} }>{props.name}</h2>
          <h3 style={{marginTop:5}}>{props.artist}</h3>
          <h4>{props.genre}</h4>

          <a className='album-button' href='#'>
            <h3 style={{marginRight:7}}>Listen</h3> 
            <PlayCircleIcon/> 
          </a>
        </div>

        

    </div>
  )
}

export default Card
