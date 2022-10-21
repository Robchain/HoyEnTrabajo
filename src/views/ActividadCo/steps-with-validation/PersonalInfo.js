// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { ListaAlumnos } from '../../../API/Estudiantes'
// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const defaultValues = {
  lastName: '',
  firstName: '',
  country:'',
  language:''
}

const PersonalInfo = ({ stepper, setSegundo }) => {
  // ** Hooks
const [listadoI, setlistadoI] = useState([])
  const listadoInicial =  async () => {
    const data = await ListaAlumnos()
    setlistadoI(data)
  }
  useEffect(() => {
    listadoInicial()
  }, [])
  
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      stepper.next()
      setSegundo(data)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }


  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Seleccion de los participantes</h5>
        <small>Especifique el numero de los integrantes</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='firstName'>
             Grupo 1
            </Label>

          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='language'>
             Listado Estudiantes
            </Label>
            <Controller
              id='language'
              name='language'
              control={control}
              render={({ field }) => <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language`}
              options={listadoI.map(i => { 
                return {
                        label: i.Nombre,
                        value: i._id }
                      })}
              className='react-select'
              classNamePrefix='select'
              name='paisdos'
              {...field}
            />}
            />
            {errors.language && <FormFeedback>{errors.language.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
        <Col md='6' className='mb-1'>
            <Label className='form-label' for='firstName'>
              Grupo 2
            </Label>
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='language2'>
             Listado Estudiantes
            </Label>
            <Controller
              id='language2'
              name='language2'
              control={control}
              render={({ field }) => <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language2`}
              options={listadoI.map(i => { 
                return {
                        label: i.Nombre,
                        value: i._id }
                      })}
              className='react-select'
              classNamePrefix='select'
              name='paisdos'
              {...field}
            />}
            />
            {errors.language && <FormFeedback>{errors.language.message}</FormFeedback>}
          </Col>
        </Row>
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
