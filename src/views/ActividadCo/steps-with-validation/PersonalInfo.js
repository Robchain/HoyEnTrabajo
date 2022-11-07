// ** React Imports
import { Fragment} from 'react'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight, Filter } from 'react-feather'
import { SelectRamdon } from '../../../Components/SelectRamdon'
import { SelectNoRamdon } from '../../../Components/SelectNoRamdon'
// ** Utils

import Repeater from '@components/repeater'
import { useListado } from '../../../utility/hooks/useListado'
import { useRamdon } from '../../../utility/hooks/useRamdon'
import { selectThemeColors } from '@utils'
// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, setSegundo, primero }) => {
  // ** Hooks
  const {listadoI} = useListado()
  const {AleatorioO} = useRamdon(listadoI, primero) 

  const {
    control,
    handleSubmit   
  } = useForm()
  

  const manejoData = (data) => {
    if (data.equipo0 === undefined) {
     setSegundo((oldvalue)  => oldvalue)
    } else {
      setSegundo(data) 
    }
  }
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Seleccion de los participantes</h5>
        <small>Especifique los integrantes de los grupos </small>
      </div>
      <Button type='button' color='primary' className='btn-prev mb-1' onClick={ () => AleatorioO()}>
            <Filter size={14} className='align-middle me-sm-25 me-0'/>
            <span className='align-middle d-sm-inline-block d-none'>Aleatorio</span>
          </Button>
      <Form onSubmit={handleSubmit((data) => {  manejoData(data); stepper.next() })}>
        <Repeater count={ Number(primero.grupos.value)}>
        {i =>  (<Row>
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
              options={listadoI.map(i => {
                return {
                        label:`${i.Nombre} ${i.Apellido}`,
                        value: i._id }
                      })}
              onChange={onChange}
            value={value}
              {...rest}
            />
            } 
    />
    </Row>)  
        }
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
    </Fragment>
  )
}

export default PersonalInfo