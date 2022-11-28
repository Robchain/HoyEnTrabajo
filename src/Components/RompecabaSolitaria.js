import React from 'react'
import RompecabezaIndividualColor from './RompecabezaIndividualColor'

export const RompecabaSolitaria = ({a, b, c, d}) => {

  return (
    <>
   <div  className="minicuadrito">
   <div className='encima'> 
   <div    className='a'  style={{visibility:a }}>
    </div>
    <div    className='b'   style={{visibility:b }}>
      </div>
      <div  className='c'  style={{visibility:c }}>
      </div>
       <div className='d' style={{visibility:d }}>
    </div></div>
    <RompecabezaIndividualColor numbera={300}/>
    </div> 
    </>
  )
}
