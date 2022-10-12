import { useEffect, useState} from "react"
import { Table, DropdownItem, DropdownMenu,  UncontrolledDropdown, DropdownToggle, Modal, Button, ModalHeader, Label, Input, ModalBody, ModalFooter, Row, Col, Form} from 'reactstrap'
import { Edit, Trash, MoreVertical, Clipboard} from 'react-feather'
import axios from 'axios'
import {subidaIPerfil} from "../firebase/config"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Hogar from "../Components/icons/Hogar"
const Estudiante = () => {
  const MySwal = withReactContent(Swal)
  const [state, dispatch] = useState(0) //forzar un actualizacion aun cuando no haya cambios no recomendable
  const [file, setFile] = useState(null)
  const [modDetalle, setModDetalle] = useState(false)
  const [tabla, setTabla] = useState([])
  const [detalle, setDetalle] = useState({})
  const [formModal, setFormModal] = useState(false)
  const [FormValue, setFormValue] = useState({
        Nombre: '',
        Apellido:   '',
        Identificacion:'',
        Email:'',
        Usuario:'',
        Password:'',
        TipoUsuario:'ESTUDIANTE',
        FotoPerfil:'',
        Estado:'ACTIVO'
  })
  const [selecion, setSelecion] = useState({
        _id:"",   
        Nombre: '',
        Apellido:   '',
        Identificacion:'',
        Email:'',
        Usuario:'',
        Password:'',
        TipoUsuario:'ESTUDIANTE',
        FotoPerfil:'',
        Estado:'ACTIVO'
  })
  const [editarMod, setEditarMod] = useState(false)
  
  const   handleChange    =   (event)  => {
    const   {name, value} = event.target // el "name" debe ser generico y no ser igual a los valores que dan en el name del hook o el name del jsx
    setFormValue({...FormValue,    [name]:value.toUpperCase()})     
}
  useEffect(() => {
      axios.get('http://localhost:3002/api/auth/verRegistrados').then(response =>  { setTabla(response.data); setDetalle(response.data) })
  }, [state])
  const handleAgregar =  ()  =>  {
    const postUsuario = async ()  =>  {
      const ulr = await subidaIPerfil(file)
     try {
      axios({
        url:"http://localhost:3002/api/auth/signup",
        method:'POST',
        data: {
              Nombre: FormValue.Nombre,
               Apellido: FormValue.Apellido,
                Identificacion: FormValue.Identificacion,
                Email: FormValue.Email,
                Usuario: FormValue.Usuario,
                Password: FormValue.Password,
                TipoUsuario: FormValue.TipoUsuario,
                FotoPerfil: ulr,
                Estado: FormValue.Estado
          }
      }).then(respuesta  => { 
        MySwal.fire({
        title: `${respuesta.data.titulo}`,
        text: `${respuesta.data.respuesta}`,
        icon: `${respuesta.data.type}`,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false}) 
      }).catch(
        MySwal.fire({
        title: 'Error!',
        text: "Falto un campo",
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      })).then(dispatch(state  + 1))
 
     } catch (error) {
      console.log(error)
     }
    }
    postUsuario()
    setFormModal(!formModal)
    setFormValue({
        Nombre: '',
        Apellido:   '',
        Identificacion:'',
        Email:'',
        Usuario:'',
        Password:'',
        TipoUsuario:'ESTUDIANTE',
        FotoPerfil:'',
        Estado:'ACTIVO'
    })
  }
  const Eliminar = (Nombr,  e)   => {
    e.preventDefault()
    axios.delete('http://localhost:3002/api/auth/BorrarUsario', {data: {Identificacion: Nombr }}).then(respuesta =>  {
      MySwal.fire({
        title: `${respuesta.data.titulo}`,
        text: `${respuesta.data.respuesta}`,
        icon: `${respuesta.data.type}`,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false})
    }).then(dispatch(state  + 1))
    console.log("a")
  }
  const abrirDetalle  = (Nombre, e)  =>  {
    e.preventDefault()
   setModDetalle(!modDetalle)
   setDetalle(Nombre)
  }
  const Editar = (Nombre, e) =>  {
    e.preventDefault()
    setFormModal(!formModal)
    setSelecion(Nombre)
    setEditarMod(true)
  }
  const handlerFalse  = (e) =>  {
    const {name, value} = e.target
    setSelecion({...selecion, [name]:value.toUpperCase()})
  }
  const handlEditar = async ()  =>  {
        const nurl =  ""
        try {
          if  (file) {
            nurl  =  await subidaIPerfil(file)
            }
        } catch (error) {
          console.log("a")
        }
        
      await axios({
      url:"http://localhost:3002/api/auth/EditarUsuario",
      method:"POST",
      data:{
        _id:selecion._id,   
        Nombre: selecion.Nombre,
        Apellido:   selecion.Apellido,
        Identificacion:selecion.Identificacion,
        Email:selecion.Email,
        Usuario:selecion.Usuario,
        Password:selecion.Password,
        TipoUsuario:'ESTUDIANTE',
        FotoPerfil:nurl,
        Estado:'ACTIVO'
      }
      }).then(respuesta  => { 
        MySwal.fire({
        title: `${respuesta.data.titulo}`,
        text: `${respuesta.data.respuesta}`,
        icon: `${respuesta.data.type}`,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false}) 
      }).then(dispatch(state  + 1))
      //window.location.reload(false)
      setFormModal(!formModal) 
      console.log(state)
  }
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px', display:'none' }}
      onClick={() => setFormModal(!formModal)}
    >
      &times;
    </button>
  )
  return (
    <div>
     <div>
     <Row >
      <Col  className='p-0 d-flex justify-content-between'>
      <div  className="d-none d-lg-flex ms-4 "><Hogar/>  <span>&nbsp;&nbsp;{'>'}&nbsp;&nbsp;Estudiante</span></div>
        <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={() => {  setFormModal(!formModal); setEditarMod(false) }}>
          Agregar
        </Button>
        </Col>
        </Row>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered modal-lg' external={externalCloseBtn}>
          <ModalHeader toggle={() => setFormModal(!formModal)}><span><b>Agregar Usuario</b></span></ModalHeader> 
          <ModalBody>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Nombre
              </Label>
              <Input type='text' name="Nombre" id='nameMulti' placeholder='Nombre' onChange={editarMod  === false ? handleChange  : handlerFalse}  value={editarMod  === false ? FormValue.Nombre  : selecion.Nombre}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Apellido
              </Label>
              <Input type='text' name='Apellido' id='lastNameMulti' placeholder='Apellido' onChange={editarMod  === false ? handleChange  : handlerFalse}  value={  editarMod === false ? FormValue.Apellido  : selecion.Apellido}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Identificacion
              </Label>
              <Input type='text' name='Identificacion' id='cityMulti' placeholder='Identificacion' onChange={editarMod  === false ? handleChange  : handlerFalse} value={editarMod  === false ? FormValue.Identificacion  : selecion.Identificacion} />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Correo Electronico
              </Label>
              <Input type='text' name='Email' id='CountryMulti' placeholder='Correo Electronico'  onChange={editarMod === false ? handleChange  : handlerFalse} value={editarMod  === false ? FormValue.Email : selecion.Email}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
                Usuario
              </Label>
              <Input type='text' name='Usuario' id='CompanyMulti' placeholder='Usuario' onChange={editarMod === false ? handleChange  : handlerFalse} value={  editarMod  === false ? FormValue.Usuario  : selecion.Usuario}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                Contraseña
              </Label>
              <Input type='password' name='Password' id='EmailMulti' placeholder='Contraseña'  onChange={editarMod === false ? handleChange  : handlerFalse} value={editarMod === false ? FormValue.Password  : selecion.Password}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label' for='inputFile'>
              Foto de perfil
            </Label>
            <Input type='file' id='inputFile' name='FotoPerfil' onChange={e =>  setFile(e.target.files[0])} />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label' for='EmailMulti'>
                Tipo Usuario
              </Label><br/>
            <Label><Input 
            type='radio'
            name="TipoUsuario"
            value="ESTUDIANTE"
            checked={editarMod  === false ? FormValue.TipoUsuario === "ESTUDIANTE"  : selecion.TipoUsuario  === "ESTUDIANTE"}
            onChange={editarMod === false ? handleChange  : handlerFalse}
        />Estudiante</Label><br/>
        <Label>
        <Input  
            type='radio'
            name="TipoUsuario"
            value="MAESTRO"
            checked={ editarMod === false ? FormValue.TipoUsuario === "MAESTRO" : selecion.TipoUsuario  === "MAESTRO"}
            onChange={ editarMod  === false ? handleChange  : handlerFalse}
        />Maestro
        </Label>
            </Col>
          
          <Col md='6' sm='12' className='mb-1'>
            <div className='mb-2'>
            <Label className='form-label' for='EmailMulti'>
                Estado
              </Label><br/>
        <Label> <Input  
            type='radio'
            name="Estado"
            value="ACTIVO"
            checked={ editarMod === false ? FormValue.Estado ===  "ACTIVO"  : selecion.Estado === "ACTIVO"}
            onChange={ editarMod  === false ? handleChange  : handlerFalse}
        />Activo</Label> <br/>
        <Label>
        <Input  
            type='radio'
            name="Estado"
            value="INACTIVO"
            checked={editarMod  === false ?  FormValue.Estado === "INACTIVO"  : selecion.Estado === "INACTIVO"}
            onChange={editarMod === false ? handleChange  : handlerFalse}
        />Inactivo
        </Label>
            </div>
            </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          <Button outline onClick={() => setFormModal(!formModal)}  style={{color:'#592a98'}}> Cancelar </Button>
            { editarMod === false ? <Button style={{background:'#5b2998', color:'#fff'}} outline  onClick={()  =>  { handleAgregar(); dispatch(state  + 2) }}> Agregar</Button>  : <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={handlEditar}  >Editar</Button>}
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Modal  isOpen={modDetalle} toggle={() => setModDetalle(!modDetalle)} className='modal-dialog-centered modal-lg'>
          <ModalHeader  toggle={() => setModDetalle(!modDetalle)}>
              Detalle
          </ModalHeader>
          <ModalBody>
            <Row>
            <Col  md='6' sm='12' className='mb-1'>
              <img  width={250} src={detalle.FotoPerfil}  alt="foto perfil"></img>
            </Col>
            <Col  md='6' sm='12' className='mb-1'>
            <ul>
              <li><b  style={{color:'#8cc5b0'}}>Nombre:</b> {detalle.Nombre}</li>
              <li><b  style={{color:'#8cc5b0'}}>Apellido: </b>{detalle.Apellido}</li>
              <li><b  style={{color:'#8cc5b0'}}>Identificacion:</b> {detalle.Identificacion}</li>
              <li><b  style={{color:'#8cc5b0'}}>Correo Electronico:</b> {detalle.Email}  </li>
              <li><b  style={{color:'#8cc5b0'}}>Usuario:</b> {detalle.TipoUsuario}</li>
              <li><b  style={{color:'#8cc5b0'}}>Tipo de Usuario:</b>  {detalle.TipoUsuario}</li>
              <li><b  style={{color:'#8cc5b0'}}>Estado:</b> {detalle.Estado}</li>
            </ul>
            </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          <Button outline onClick={() => setModDetalle(!modDetalle)}  style={{background:'#5b2998', color:'#fff'}} > Cerrar </Button>
          </ModalFooter>
        </Modal>
      </div>
      <br/>
    <Table striped >
      <thead>
        <tr style={{color:'#592a98'}}>
          <th style={{ backgroundColor:'#e7dff1'}}>Nombre</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Apellido</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Email</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Tipo de Usuario</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Estado</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {tabla.map(i  =>  (
              <tr key={i._id}>
              <td>{i.Nombre}</td>
                <td>{i.Apellido}</td>
                <td>{i.Email}</td>
                <td>{i.TipoUsuario}</td>
                <td>{i.Estado}</td>
                <td>
                <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem href='/' onClick={e =>  abrirDetalle(i, e)}>
                  <Clipboard  className='me-50' size={15}/> <span className='align-middle'>Detalle</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => Editar(i, e)}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Editar</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e =>  Eliminar(i.Identificacion, e)}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Borrar</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              </td>
            </tr>))}
      </tbody>
      </Table>
      </div>
  )
}
export default Estudiante