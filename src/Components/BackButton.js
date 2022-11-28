import React from 'react'
import Bloque9 from '../assets/images/AssetsGame/BackButton.png'
import { useNavigate } from 'react-router-dom'
export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <>
    <input type="image" src={Bloque9} width='100'  style={{display:'inline-block', margin:'auto'}}  onClick={() => navigate(-1)} ></input>
    </>
  )
}
