import React from 'react'
import './Vidio.css'
import PlayVidio from '../../Components/PlayVidio/PlayVidio'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'



const Vidio = () => {
  const {vidioId,categoryId}=useParams()
  // console.log('useParams',vidioId);
  return (
    <div className='play-container'>
      <PlayVidio vidioId={vidioId} categoryId={categoryId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Vidio