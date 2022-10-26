import axios from 'axios'

export const todosTeam  = async () => {

const data = await axios.get('http://localhost:3002/api/auth/Equipo/mostrartodo')

return data.data
}


export const crearMultiJugador = async (Primero, Segundo, Tercero) => {

    const data = await axios.post('http://localhost:3002/api/auth/MultiJugador', {Primero, Segundo, Tercero})
    return data.data
}