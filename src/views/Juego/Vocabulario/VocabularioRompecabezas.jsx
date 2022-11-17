import { Col, Container, Row } from "reactstrap"
import RompecabezaIndividualColor from "../../../Components/RompecabezaIndividualColor"

const VocabularioRompecabezas = () => {
  return (
    <div className="fondoMC">
    <Container>
    <Row>
    <Col  className="d-flex justify-content-evenly  mt-5 mb-5">
    <div  className="minicuadrito">
    <div>
      
    </div>
    <RompecabezaIndividualColor numbera={300}/>
    </div>
    <RompecabezaIndividualColor numbera={300}/>
    <RompecabezaIndividualColor numbera={300}/>
    </Col>
    <Col  className="d-flex justify-content-evenly mt-5 mb-5">
    <RompecabezaIndividualColor numbera={300}/>
    <RompecabezaIndividualColor numbera={300}/>
    <RompecabezaIndividualColor numbera={300}/>
    </Col>
    
    </Row>
    </Container>
    </div>
  )
}

export default VocabularioRompecabezas