// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight, Filter } from 'react-feather'
import { ListaAlumnos } from '../../../API/Estudiantes'
// ** Utils
import { selectThemeColors } from '@utils'
import Repeater from '@components/repeater'
// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const PersonalInfo = ({ stepper, setSegundo, primero }) => {
  // ** Hooks
const Test = [{label: 'Robert', value:'1'}, {label:'Allison', value:'2'}]
const  data = {equipo0:[], equipo1:[], equipo2:[], equipo3:[], equipo4:[], equipo5:[]}
const [randomOn, setRandomOn] = useState(false)
const [listadoI, setlistadoI] = useState([])
  const listadoInicial =  async () => {
    const data = await ListaAlumnos()
    setlistadoI(data)
  }
  const formulario = () => {
  }
  useEffect(() => {
  
    listadoInicial()
  }, [])
useEffect(() => {
  formulario()
}, [])
const AleatorioO = () => {
  setRandomOn(false)
  let j = 0
  let a = 0
  const  data = {equipo0:[], equipo1:[], equipo2:[], equipo3:[], equipo4:[], equipo5:[]}
  listadoI.sort(() => { return Math.random() - 0.5 })
  while (Number(primero.grupos.value) >= j) {
    console.log(`${j}`)
    while (100 >= a) {
      data[`equipo${j}`]  = [{label: listadoI[a].Nombre, value:listadoI[a]._id}]
      console.log(`${a}`)
      console.log(typeof data[`equipo${j}`]) 
      a += 20
    }
    
   
    j++
    a = j + 1
  }
  console.log(data)
  setRandomOn(true)
} 

  const {
    control,
    handleSubmit   
  } = useForm()
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Seleccion de los participantes</h5>
        <small>Especifique los integrantes de los grupos </small>
      </div>
      <Button type='button' color='primary' className='btn-prev mb-1' onClick={AleatorioO}>
            <Filter size={14} className='align-middle me-sm-25 me-0'/>
            <span className='align-middle d-sm-inline-block d-none'>Aleatorio</span>
          </Button>
      <Form onSubmit={handleSubmit((data) => { setSegundo(data); stepper.next() })}>
        <Repeater count={ Number(primero.grupos.value)}>
        {i => (
          <Row><Col md='6' className='mb-1'>
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
              render={({ field: {onChange, value, ...rest} }) => <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`equipo${i}`}
              options={listadoI.map(i => { 
                return {
                        label:`${i.Nombre} ${i.Apellido}`,
                        value: i._id }
                      })}
              className='react-select mb-2'
              classNamePrefix='select'
              onChange={onChange}
              defaultValue={randomOn === true ? data[`equipo${i}`] : value}
              {...rest}
            />}
            />
          </Row>
        )}
      </Repeater>
        <div className='d-flex justify-content-between '>
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
    </Fragment>
  )
}

export default PersonalInfo
