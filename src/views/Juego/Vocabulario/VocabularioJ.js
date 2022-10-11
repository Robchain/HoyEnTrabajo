import {useEffect, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import ReactPlayer from 'react-player'


const VocabularioJ = () => {
const [{FileMuestra}, setVideo] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3002/api/auth/testa')
    .then(res => setVideo(res.data))
  }, [])
  
  return (
    <Container>
   <Row>
    <Col  >
      <ReactPlayer url={FileMuestra}  playing loop controls/>
    </Col>
   </Row>
   </Container>
  )
}

export default VocabularioJ