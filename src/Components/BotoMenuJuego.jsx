import React from 'react'
import { Link } from 'react-router-dom'
import Bloque9 from '../assets/images/AssetsGame/Bloque9.png'
import { Button } from 'reactstrap'
export const BotoMenuJuego = ({Nombre}) => {
  return (
    <>
<input type="image" src={Bloque9}/> 
{Nombre}
    </>
  )
}
