import { Col, Container, Row } from "reactstrap"
import { BackButton } from "../../../Components/BackButton"
import { RompecabaSolitaria } from "../../../Components/RompecabaSolitaria"
import RompecabezaIndividualColor from "../../../Components/RompecabezaIndividualColor"


const OracionRompecabezas = () => {
  //visible
  return (
    <div className="fondoMC img-fluid vh-100">
    <Container>
    <Row>
    <Col  className="d-flex justify-content-evenly">
      <h1 style={{color:'#000', fontWeight:'bold' }}>ORACION</h1>
    </Col>
    <Col  className="d-flex justify-content-evenly  mt-2 mb-5">
    <RompecabaSolitaria a={'hidden'} d={'hidden'}  /> 
    <RompecabaSolitaria/>
    <RompecabaSolitaria/>
    </Col>
    <Col  className="d-flex justify-content-evenly mt-2">
    <RompecabaSolitaria a={'hidden'} c={'hidden'}/>
    <RompecabaSolitaria d={'hidden'}/>
    <RompecabaSolitaria a={'hidden'} d={'hidden'}/>
    </Col>
    <Col>
    <BackButton/>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default OracionRompecabezas
