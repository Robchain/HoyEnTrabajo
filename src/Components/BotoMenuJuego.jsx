import React from 'react'
import { Link } from 'react-router-dom'
import Bloque9 from '../assets/images/AssetsGame/Trofeo.png'
import { Button } from 'reactstrap'
export const BotoMenuJuego = () => {
  return (
    <>
    <input type="image" src={Bloque9} width='250'  style={{display:'inline-block', margin:'auto'}}></input>
    </>
  )
}
