import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Controller, useForm } from 'react-hook-form'
import { Label, Row, Col, Button, Form } from 'reactstrap'
import Repeater from '@components/repeater'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { ListaAlumnos } from '../API/Estudiantes'
import { useState, useEffect } from 'react'
export const SelectRamdon = ({ primero, setSegundo, stepper}) => {
  const  dato = {equipo0:[{label: 'a', value:'a'}], equipo1:[{label: '', value:''}], equipo2:[{label: '', value:''}], equipo3:[{label: '', value:''}], equipo4:[{label: '', value:''}], equipo5:[{label: '', value:''}]}
  const [listadoI, setlistadoI] = useState([])
  const [first, setFirst] = useState([dato])
  const [randomOn, setRandomOn] = useState(false)
  const listadoInicial =  async () => {
    const data = await ListaAlumnos()
    setlistadoI(data)
  }
  const AleatorioO = () => {
    let j = 0
    let  a = 0
    let b = 0
    let f
    setFirst(dato)
    listadoI.sort(() => { return Math.random() - 0.5 })
      for (j = 0; Number(primero.grupos.value) > j; j++)  {        
          for (f = 0; f < Number(primero.integrantes.value); f++) {
            dato[`equipo${j}`][b] = {label:`${listadoI[a].Nombre} ${listadoI[a].Apellido}`, value:listadoI[a]._id}
            a++
            b++
          }
          b = 0
      }
      console.log(dato)
      console.log(first)
    console.log(randomOn)
  }
  useEffect(() => {
    listadoInicial()
  }, [])
  useEffect(() => {
    AleatorioO()
}, [randomOn])

  const {
    control,
    handleSubmit
  } = useForm()
  const selects = (i)  => {
   
    if (dato[`equipo${i}`].length > 0 && randomOn === true) {
      return (
        <Row>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='firstName'>
           Grupo {i + 1}
          </Label>
        </Col>
          <Label className='form-label' for={`equipo${i}`}  >
           Listado Estudiantes
            </Label>
            <Controller
            name={`equipo${i}`}
            control={control}
            render={ ({field: {onChange, value, ...rest} })  => <Select
            placeholder='seleccione'
            isMulti
            isClearable={false}
            theme={selectThemeColors}
            id={`equipos`}
            className='react-select'
            classNamePrefix='select'
            defaultValue={first[`equipo${i}`].map(i => { 
            return {
            label:`${i.label}`,
            value: i.value }
          })}
            options={listadoI.map(i => {
              return {
                      label:`${i.Nombre} ${i.Apellido}`,
                      value: i._id }
                    })}
            onChange={onChange}
          value={value}
            {...rest}
          />}
  />
  </Row>
      )
    }
}
  const manejoData = (data) => {
    if (data.equipo0 === undefined) {
     setSegundo((oldvalue)  => oldvalue)
    } else {
      setSegundo(data) 
    }
  }
  return (
    <>
            <Button onClick={() => setRandomOn(!randomOn)}> de nuevo</Button>
             <Form onSubmit={handleSubmit((data) => {  manejoData(data); stepper.next() })}>
        <Repeater count={ Number(primero.grupos.value)}>
        {i => (selects(i))}
      </Repeater>
        <div className='d-flex justify-content-between mt-1'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </>
  )
}
