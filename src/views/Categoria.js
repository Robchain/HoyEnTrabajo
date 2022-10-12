import { useEffect, useState} from "react"
import { Table, DropdownItem, DropdownMenu,  UncontrolledDropdown, DropdownToggle, Modal, Button, ModalHeader, Label, Input, ModalBody, ModalFooter, Row, Col } from 'reactstrap'
import { Edit, Trash, MoreVertical} from 'react-feather'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Hogar from "../Components/icons/Hogar"

const Categoria = () => {
  const MySwal = withReactContent(Swal)
  const [state, dispatch] = useState(0)  //forzar un actualizacion aun cuando no haya cambios no recomendable
  const [tabla, setTabla] = useState([])
  const [formModal, setFormModal] = useState(false) //modal cerrado
  const [editarMod, setEditarMod] = useState(false) // modo editar desactivado
  const [selecinado, setSelecinado] = useState(   // seleccionado de dato eligido
    {
      _id:'',
      NombreCategoria:'',
      Estado:'ACTIVO'
    }
  )
  const [FormValue, setFormValue] = useState({  //estado incial de los datos en el formulario inical
    NombreCategoria:'',
    Estado:'ACTIVO'
  })
  const handlechange  =   (event)  => { // manejo de cambios en el formulario de agregar
    const {name, value} =  event.target

setFormValue({...FormValue, [name]:value.toUpperCase()})

}
  useEffect(() => { // useefect que se ejecutara al arrancar el componente 
      axios.get('http://localhost:3002/api/auth/Categoria/mostrartodo').then(response =>  setTabla(response.data))
  }, [state])

  const handleAgregar = ()  =>  {
    
    const postCategoria    =   async ()    => {
      /*try {
      await axios({
              url:"http://localhost:3002/api/auth/Categoria",
              method:'POST',
              data: FormValue
          })
        } catch (e) {
          console.log(e)
      } */
      axios.post("http://localhost:3002/api/auth/Categoria", FormValue).then(MySwal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      }))
  }
  postCategoria()
  setFormModal(!formModal) 
  dispatch(state + 1)
  setFormValue({
    NombreCategoria:'',
    Estado:'ACTIVO'
  })  
 // window.location.reload(false) //actualiza la pagina automaticamente
  }
  const Eliminar = (Nombr,  e)   => {
    setEditarMod(editarMod === false)
    e.preventDefault()
    axios.delete('http://localhost:3002/api/auth/Categoria/borrar', {data: {NombreCategoria: Nombr }})
    dispatch(state + 1)
   // window.location.reload(false)
  }
  const Editar  = (Data, e) => {  
    e.preventDefault()
    setFormModal(!formModal)
    setSelecinado(Data)
    setEditarMod(true)
    
}
  const handlerFalse  = (e)  => {
      const {name, value} = e.target
      setSelecinado({...selecinado, [name]:value.toUpperCase()})
  }
 const handlEditar = async  ()  => {
  
  await axios({
    url:"http://localhost:3002/api/auth/Categoria/Editar",
    method:'POST',
    data: selecinado
})
    /*axios.post("http://localhost:3002/api/auth/Categoria/Editar", {data:{_id:selecinado._id, NombreCategoria:selecinado.NombreCategoria, Estado: selecinado.Estado}})*/
    setFormModal(!formModal) 
    dispatch(state + 1)
    //window.location.reload(false)
  }
  return (
    <div>
     <div>
     <Row>
     <Col  className='p-0 d-flex justify-content-between'>
     <div  className="d-none d-lg-flex ms-4 "><Hogar/>  <span>&nbsp;&nbsp;{'>'}&nbsp;&nbsp;Categoria</span></div>
        <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={() => { setFormModal(!formModal); setEditarMod(false) }}>
          Agregar
        </Button>
        </Col></Row>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}  style={{backgroundColor:'#e6dff0'}}><span  style={{color:'#592a98'}}><b>Agregar Categoria</b></span></ModalHeader>
          <ModalBody>
            <div className='mb-2'> 
              <Label className='form-label ' for='categoria' style={{color:'#8b8b8c'}}><b>Categoria</b></Label>
              <Input type='text' id='categoria' name="NombreCategoria" placeholder='Categoria' value={editarMod === false ? FormValue.NombreCategoria : selecinado.NombreCategoria}  onChange={editarMod  === false ? handlechange : handlerFalse}/>
            </div>
            <div className='mb-2'>
            <Label  className='form-label'  style={{color:'#8b8b8c'}}><b>Estado</b></Label><br/>
         <Input
         style={{color:'#8b8b8c'}}
              id='Activo'
            type='radio'
            name="Estado"
            value="ACTIVO"
            checked={FormValue.Estado ===  "ACTIVO"}
            onChange={ editarMod  === false ? handlechange : handlerFalse}
        /><Label  for='Activo'>Activo</Label> <br/>
        
        <Input
        style={{color:'#8b8b8c'}}
            id='Inactivo'
            type='radio'
            name="Estado"
            value="INACTIVO"
            checked={FormValue.Estado === "INACTIVO"}
            onChange={editarMod  === false ? handlechange : handlerFalse}
        />
        <Label for='Inactivo'>Inactivo </Label>
            </div>
          </ModalBody>
          <ModalFooter>
          <Button outline onClick={() => setFormModal(!formModal)}  style={{color:'#592a98'}}> Cancelar </Button>
          { 
            editarMod === false ? <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={handleAgregar}> Agregar</Button> : <Button style={{background:'#5b2998', color:'#fff'}} outline onClick={handlEditar} > Editar</Button>
          }
          </ModalFooter>
        </Modal>
      </div>
      <br/>
    <Table  striped >
      <thead  >
        <tr style={{color:'#592a98'}} className='fondo'>
          <th style={{ backgroundColor:'#e7dff1'}}>Nombre</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Estatus</th>
          <th style={{ backgroundColor:'#e7dff1'}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {tabla.map(i  =>  (
              <tr key={i._id}>
                <td>{i.NombreCategoria}</td>
                <td>{i.Estado}</td>
                <td>
                <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => Editar(i, e)}>
                  <Edit className='me-50'  size={15} /> <span className='align-middle'>Editar</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e =>  Eliminar(i.NombreCategoria, e)}>
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

export default Categoria