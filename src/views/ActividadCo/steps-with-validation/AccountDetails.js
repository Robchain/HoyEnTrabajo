// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Utils
import { selectThemeColors } from '@utils'

import { todosTeam } from '../../../API/Team'
// ** Third Party Components
//import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
//import { yupResolver } from '@hookform/resolvers/yup'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'

// ** Reactstrap Imports
import { Form, Label, Row, Col, Button, FormFeedback } from 'reactstrap'
const defaultValues = {
  grupos: '',
  equipos:[]
}
const AccountDetails = ({ stepper, setPrimero}) => {
  const [tarjetas, setTarjetas] = useState([])
const llenadoInicial = async () => {
  const datu = await todosTeam()
  setTarjetas(datu)
} 
useEffect(() => {
  llenadoInicial()
}, [])
  // ** Hooks
  const {
    handleSubmit,
    control
  } = useForm({
    defaultValues
  })
  const Options = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ]
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Armar Grupos</h5>
        <small className='text-muted'>Especificar el nombre de los integrantes</small>
      </div>
      <Form onSubmit={handleSubmit((data) => { setPrimero(data); stepper.next() })}>
        <Row>
          <Col md='6' className='mb-1'>
          <Label className='form-label' for='grupos'>
              Numero de Grupos
            </Label>
            <Controller
            name='grupos'
            control={control}
            render={ ({field: {onChange, value, ...rest} })  => <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`grupos`}
              className='react-select'
              classNamePrefix='select2'
              options={Options}
              onChange={onChange}
              defaultValue={value}
              {...rest}
            />}
            />
          </Col>
          <Col md='6' className='mb-1'>
          <Label className='form-label' for='equipos'>
             Nombres de Equipos
            </Label>
            <Controller
            name='equipos'
            control={control}
            render={ ({field: {onChange, value, ...rest} })  => <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`equipos`}
              className='react-select'
              classNamePrefix='select'
              options={tarjetas.map(i => { 
                return {
                        label: i.Nombre,
                        value: i._id }
                      })}
              onChange={onChange}
              defaultValue={value}
              {...rest}
            />}
    />
            
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Anterior</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Siguiente</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
