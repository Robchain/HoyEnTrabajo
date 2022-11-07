// ** React Imports
import { Fragment } from 'react'
import Flatpickr from 'react-flatpickr'
// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form } from 'reactstrap'

const defaultValues = {
  DateGameM: new Date()
}

const Address = ({ stepper, setTercero  }) => {
  // ** Hooks
  const {
    control,
    handleSubmit
  } = useForm({ defaultValues })
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Tiempo de la Actividad</h5>
        <small></small>
      </div>
      <Form onSubmit={handleSubmit((data) =>  { setTercero(data); stepper.next() })}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='DateGameM'>
            Rango de Fecha
            </Label>
          <Controller
            control={control}
            name='DateGameM'
            render={({field:{onChange, value, ...rest}}) => <Flatpickr
        value={value}
        id='DateGameM'
        className='form-control'
        onChange={onChange}
        options={{
          mode: 'range',
          defaultDate: ['2022-11-30', '2022-10-21']
        }}
        {...rest}
      />}
          />
          </Col>
        </Row>
        <Row>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default Address
