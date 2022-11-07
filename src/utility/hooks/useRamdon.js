import { useEffect, useState } from "react"


export const useRamdon = (listadoI = {}, primero = {integrantes:{undefined}}, value = false) => {
    
const [first, setFirst] = useState()

    const AleatorioO = () => {
      const  dato = {equipo0:[{label: '', value:''}], equipo1:[{label: '', value:''}], equipo2:[{label: '', value:''}], equipo3:[{label: '', value:''}], equipo4:[{label: '', value:''}], equipo5:[{label: '', value:''}]}
        let j = 0
        let  a = 0
        let b = 0
        let f
        listadoI.sort(() => { return Math.random() - 0.5 })
          for (j = 0; Number(primero.grupos.value) > j; j++)  {        
              for (f = 0; f < Number(primero.integrantes.value); f++) {
                dato[`equipo${j}`][b] = {label:`${listadoI[a].Nombre} ${listadoI[a].Apellido}`, value:listadoI[a]._id}
                a++
                b++
              }
              b = 0
          }
          return dato
      }
      
      useEffect(() => {
        setFirst(AleatorioO())
      }, [value])
      

  return {
    first,
    AleatorioO
  }
}
