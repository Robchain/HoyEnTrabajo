import { useSkin } from "@hooks/useSkin"
import { Link} from "react-router-dom"
import InputPasswordToggle from "@components/input-password-toggle"
import {
  Row,
  Col,
  CardTitle,
  Form,
  Label,
  Input,
  Button
} from "reactstrap"
import "@styles/react/pages/page-authentication.scss"


const Login = () => {
  const elem = document.documentElement
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem = window.top.document.body //To break out of frame in IE
      elem.msRequestFullscreen()
    }
  }

  const { skin } = useSkin()
  

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "loginI.png",
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner">
        <Col className="d-none d-lg-flex justify-content-start" lg="8" sm="12"  xl='8'>
          <div className="d-none d-lg-flex align-self-start justify-content-center ">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center teste auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
          xl='4'
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12"  style={{backgroundImage:'../../assets/images/login-BlipBla.png'}}>
          <div  className="fondoI">
            <CardTitle tag="h2" className="fw-bold mb-1 text_colorT">
             <b>!BIENVENIDOS!</b>
            </CardTitle>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) =>  e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label  text_color" st for="login-email">
                <small>
                  Correo
                  </small>
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="john@example.com"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                  <small>
                   Contraseña
                   </small>
                  </Label>
                  <Link Link to="/forgot-password">
                    <small  className="texto_colorB">¿Olvidaste la contraseña?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <Button tag={Link} to="/Categoria"  className='Boton_p' style={{background:'#5b2998'}} block onClick={()  => openFullscreen()} >
                Iniciar sesiòn
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25 ">¿No tienes una cuenta?</span>
              <Link to="/register">
                <span className="texto_colorB" >Crea una cuenta</span>
              </Link>
            </p>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
