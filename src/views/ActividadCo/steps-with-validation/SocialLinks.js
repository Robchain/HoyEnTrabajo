// ** React Imports
import { Fragment } from 'react'
import { crearMultiJugador } from '../../../API/Team'
// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import Repeater from '@components/repeater'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// ** Reactstrap Imports
import { Label, Row, Col, Button, Form } from 'reactstrap'

const defaultValues = {
  primeros: '',
  segundos: '',
  terceros: ''
}

const SocialLinks = ({ stepper, segundo, tercero, primero }) => {
  // ** Hooks
  const MySwal = withReactContent(Swal)
  const {
    handleSubmit
  } = useForm({ defaultValues })
  const onSubmit = ({primeros, segundos, terceros}) => {
    segundos = segundo
    terceros = tercero
    primeros = primero
    crearMultiJugador(primeros, segundos, terceros).then(respuesta => { 
      MySwal.fire({
      title: `${respuesta.titulo}`,
      text: `${respuesta.respuesta}`,
      icon: `${respuesta.type}`,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false}) 
    })
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
         <Label>Jugadores por grupo</Label>
         <Repeater count={ Number(primero.grupos.value) }>
         { i => (
          <Row> <Col md='6' className='mb-1'>
          <Label> grupo {i + 1}</Label>
            {segundo[`equipo${i}`].map(i => (<li  key={i.value}>{i.label}</li>))
          } 
         </Col> </Row>
         )}
         </Repeater>
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
