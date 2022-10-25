// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
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

const [listadoI, setlistadoI] = useState([])
  const listadoInicial =  async () => {
    const data = await ListaAlumnos()
    setlistadoI(data)
  }
  console.log(primero.grupos)
  const formulario = () => {
  }
  useEffect(() => {
  
    listadoInicial()
  }, [])
useEffect(() => {
  formulario()
}, [])

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
                        label: i.Nombre,
                        value: i._id }
                      })}
              className='react-select'
              classNamePrefix='select'
              onChange={onChange}
              defaultValue={value}
              {...rest}
            />}
            />
          </Row>
        )}
      </Repeater>
        <div className='d-flex justify-content-between'>
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
