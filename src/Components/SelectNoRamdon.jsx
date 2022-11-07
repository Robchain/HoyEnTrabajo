import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Controller, useForm } from 'react-hook-form'


export const SelectNoRamdon = ({listadoI, i = 0}) => {
    const {
        control
      } = useForm()
          
  return (
    <>
              <Controller
              name={`equipo${i}`}
              control={control}
              render={ ({field: {onChange, value, ...rest} })  => <Select
              placeholder='seleccione'
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`equipos`}
              className='react-select'
              classNamePrefix='select'
              options={listadoI.map(i => {
                return {
                        label:`${i.Nombre} ${i.Apellido}`,
                        value: i._id }
                      })}
              onChange={onChange}
            value={value}
              {...rest}
            />
            } 
             
    />
        
    </>
  )
}
