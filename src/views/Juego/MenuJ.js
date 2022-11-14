import { Button, Row, Col, Container } from "reactstrap"
import { Link } from "react-router-dom"
import NO from  '../../assets/images/NO.jpg'/*'../../assets/images/NO.jpg'*/
import Vocabulario from '../../assets/images/AssetsGame/Vocabulario.png'
import Carrera from '../../assets/images/AssetsGame/Carrera.png'
import Oracion from '../../assets/images/AssetsGame/Oraciones.png'
import { BotoMenuJuego } from "../../Components/BotoMenuJuego"
const ActividadCo = () => {
    return (
      <Container>
      <Row>
      <Col  lg='12' sm='12' xl='12' className="md-auto">
      <input type="image" src={Vocabulario} width='250' ></input>
        </Col>
        </Row>
        <Row>
        <Col  lg='12' sm='12' xl='12' className="md-auto">
        <input type="image" src={Oracion} width='250'></input>
        </Col>
        </Row>
        <Row>
        <Col  >
        <input type="image" src={Carrera} width='250'></input>
        </Col>
        </Row>
        <Row>
        <Col >
        <BotoMenuJuego/>
        </Col>
        </Row>
        
      </Container>
    )
  }
  
  export default ActividadCo