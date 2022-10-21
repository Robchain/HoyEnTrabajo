import axios from 'axios'

export const ListaAlumnos = async ()  => {
    const data = await axios.get('http://localhost:3002/api/auth/Ver-Registrados-Activos')
    return data.data
}