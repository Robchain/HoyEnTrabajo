import { Row, Button, Col } from "reactstrap"
import Hogar from "../../Components/icons/Hogar"
// ** Demo Components
import WizardHorizontal from './WizardHorizontal'
// ** Custom Components
//import BreadCrumbs from '@components/breadcrumbs'
const ActividadCo = () => {
  return (
    <div>
      <Row>
    <Col  className='p-0 d-flex justify-content-between'>
      <div  className="d-none d-lg-flex ms-4 "><Hogar/>  <span>&nbsp;{'>'}&nbsp;ActividadCo</span></div>
        <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={() => {  setFormModal(!formModal); setEditarMod(false) } }>
          Agregar
        </Button>
      </Col>
    </Row>
   {/* <BreadCrumbs title='Form Wizard' data={[{ title: 'Form' }, { title: 'Form Wizard' }]} />*/}
      <Row>
        <Col>
          <WizardHorizontal />
        </Col>
      </Row>
    </div>
  )
}


export default ActividadCo