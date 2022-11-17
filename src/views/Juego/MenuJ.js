import { Row, Col, Container } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
import Vocabulario from '../../assets/images/AssetsGame/Vocabulario.png'
import Carrera from '../../assets/images/AssetsGame/Carrera.png'
import Oracion from '../../assets/images/AssetsGame/Oraciones.png'
import trofeo from '../../assets/images/AssetsGame/Trofeo.png'

const ActividadCo = () => {
    return (
      <div className="fondoMC">
      <Container   >
      <Row>
      <Col>
      <NavLink  to={'/VocabualarioRompecabezas'}> <input  className="position-relative  start-50  top-0  translate-middle-x" type="image" src={Vocabulario} width='255' ></input></NavLink>
        </Col>
        </Row>
        <Row>
        <Col>
       <input className="position-relative  start-50  translate-middle-x" type="image" src={Oracion} width='255'></input>
        </Col>
        </Row>
        <Row>
        <Col>
        <input   className="position-relative  start-50 translate-middle-x" type="image" src={Carrera} width='255'></input>
        </Col>
        </Row>
        <Row>
        <Col >
        <input   className="position-relative  start-50 bottom-0 translate-middle-x" type="image" src={trofeo} width='255'></input>
        </Col>
        </Row>
        
      </Container>
      </div>
    )
  }
  
  export default ActividadCo