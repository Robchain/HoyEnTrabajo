import axios from 'axios'

export const LlamadaEstudianteActivos = async ()=>{
    const data = await axios.get('http://localhost:3002/api/auth/Ver-Registrados-Activos')
return data.data;
}









//equipos de estudiantes
