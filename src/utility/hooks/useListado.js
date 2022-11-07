import { useState, useEffect } from "react"
import { ListaAlumnos } from '../../API/Estudiantes'


export const useListado = () => {
    const [listadoI, setlistadoI] = useState([])
    const listadoInicial =  async () => {
        const data = await ListaAlumnos()
        setlistadoI(data)
      }
      useEffect(() => {
        listadoInicial()
      }, [])

  return {
    listadoI
  }
}
