import { Button, Row, Col, Container } from "reactstrap"
import { Link } from "react-router-dom"
import NO from  '../../assets/images/NO.jpg'/*'../../assets/images/NO.jpg'*/
import { BotoMenuJuego } from "../../Components/BotoMenuJuego"
const ActividadCo = () => {
    return (
      <Container>
      <Row>
      <Col  >

        <Button size="lg" block   color="primary" className="botonJuegoM" tag={Link} to="/VocabualarioRompecabezas" outline style={{margin:10}}>Vocabulario<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col    >
        <Button size="lg"   block color="success"  outline className=" botonJuegoM" style={{margin:10}}>Oracion<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col    >
        <Button size="lg"    block color="secondary" outline  className="botonJuegoM"  style={{margin:10}}>Carrera<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col>
        <BotoMenuJuego  Nombre={'Trofeo'}/>
        </Col>
        </Row>
        
      </Container>
    )
  }
  
  export default ActividadCo