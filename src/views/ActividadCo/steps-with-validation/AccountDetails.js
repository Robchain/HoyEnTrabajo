// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Utils
import { selectThemeColors } from '@utils'

import { todosTeam } from '../../../API/Team'
// ** Third Party Components
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from 'react-select'
import '@styles/react/libs/react-select/_react-select.scss'

// ** Reactstrap Imports
import { Form, Label, Row, Col, Button, FormFeedback } from 'reactstrap'

const defaultValues = {
  country:'',
language:''
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

  const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref(`password`), null], 'Passwords must match')
  })

  // ** Hooks

  const {
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = (data) => {
      if (isObjEmpty(errors)) {
        stepper.next()
        setPrimero(data)
      console.log('ad', data)
      }
  }
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
          <Label className='form-label' for='country'>
              Numero de Grupos
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`country`}
              className='react-select'
              classNamePrefix='select2'
              options={Options}
              defaultValue={Options[0]}
            />
          </Col>
          <Col md='6' className='mb-1'>
          <Label className='form-label' for='language'>
             Nombres de Equipos 
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language`}
              options={tarjetas.map(i => { 
                return {
                        label: i.Nombre,
                        value: i._id }
                      })}
              className='react-select'
              classNamePrefix='select'
              
            />
            {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
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
