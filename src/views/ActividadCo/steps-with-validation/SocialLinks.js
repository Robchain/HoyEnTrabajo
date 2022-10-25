// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form } from 'reactstrap'

const defaultValues = {
  primero: '',
  segundo: '',
  tercero: ''
}

const SocialLinks = ({ stepper, segundo, tercero, primero }) => {
  // ** Hooks
  const {
    handleSubmit
  } = useForm({ defaultValues })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Confirmacion de la Informacion</h5>
        <small>Resumen de la Actividad</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
          <Label>Grupos de trabajo</Label>
          <p>{primero.grupos.label}</p>
          <Label>Tarjetas De Actividades</Label>
          {
            primero.equipos.map(i => (<p>{i.label}</p>))
          }            
          </Col>
          <Col md='6' className='mb-1'>
          {JSON.stringify(segundo)}
          {console.log(segundo)}
          {console.log(segundo.equipo0)}
          </Col>
          <Col md='6' className='mb-1'>
          <Label>Fecha de la Actividad</Label>
          <p>{}</p>
          {JSON.stringify(tercero)}
          </Col>
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
