import { Button, Row, Col, Container } from "reactstrap"
import { Link } from "react-router-dom"
import NO from  '../../assets/images/NO.jpg'/*'../../assets/images/NO.jpg'*/
const ActividadCo = () => {
    return (
      <Container>
      <Row>
      <Col  xl="12" lg='12' md='12'  sm="12">
        <Button size="lg" block   color="primary" className="botonJuegoM" tag={Link} to="/VocabualarioRompecabezas" outline style={{margin:10}}>Vocabulario<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col    xl="12" lg='12' md='12'  sm="12">
        <Button size="lg"   block color="success"  outline className=" botonJuegoM" style={{margin:10}}>Oracion<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col    xl="12" lg='12' md='12'  sm="12"  >
        <Button size="lg"    block color="secondary" outline  className="botonJuegoM"  style={{margin:10}}>Carrera<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
        <Row>
        <Col xl="12" lg='12' md='12'  sm="12"   >
        <Button size="lg"   block color="primary" outline className="botonJuegoM"  style={{margin:10}}>Trofeo<img width={100} src={NO} alt="tres"/></Button>
        </Col>
        </Row>
      </Container>
    )
  }
  
  export default ActividadCo