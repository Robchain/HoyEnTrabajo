// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const defaultValues = {
  google: '',
  twitter: '',
  facebook: '',
  linkedin: ''
}

const SocialLinks = ({ stepper, primero }) => {
  // ** Hooks
  const {
    handleSubmit,
    formState: {  }
  } = useForm({ defaultValues })
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      alert('submitted')
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key} url`
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Confirmacion de la Informacion</h5>
        <small>Resumen de los datos</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='twitter'>
            Informacion
            </Label>
           
          </Col>
          <Col md='6' className='mb-1'>
          {JSON.stringify(primero)}
          </Col>
        </Row>
        <Row>
        
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Anterior</span>
          </Button>
          <Button type='submit' color='success' className='btn-submit'>
            Crear Actividad
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}
export default SocialLinks
