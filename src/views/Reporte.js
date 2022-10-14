import { Row, Button, Col } from "reactstrap"
import Hogar from "../Components/icons/Hogar"

const Reporte = () => {
  return (
    <div>
      <Row>
    <Col  className='p-0 d-flex justify-content-between'>
      <div  className="d-none d-lg-flex ms-4 "><Hogar/>  <span>&nbsp;{'>'}&nbsp;Reporte</span></div>
        <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={() => {  setFormModal(!formModal); setEditarMod(false) } }>
          Agregar
        </Button>
      </Col>
    </Row>
    </div>
  )
}

export default Reporte