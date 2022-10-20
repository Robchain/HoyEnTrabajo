// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps-with-validation/Address'
import SocialLinks from './steps-with-validation/SocialLinks.js'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const WizardModern = () => {
  // ** Ref
  const ref = useRef(null)
  const [primero, setPrimero] = useState({})
  const [segundo, setSegundo] = useState({})
  const [tercero, setTercero] = useState({})
  // ** State
  const [stepper, setStepper] = useState(null)


  const steps = [
    {
      id: 'armar-grupos',
      title: 'Armar Grupos',
      subtitle: '',
      icon: <FileText size={18} />,
      content: <AccountDetails stepper={stepper} type='wizard-modern' setPrimero={setPrimero} />
    },
    {
      id: 'seleccion-participante',
      title: 'Seleccion de los Participantes',
      subtitle: '',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='wizard-modern' setSegundo={setSegundo} />
    },
    {
      id: 'step-address',
      title: 'Fechas',
      subtitle: '',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='wizard-modern' setTercero={setTercero}/>
    },
    {
      id: 'social-links',
      title: 'Confirmacion ',
      subtitle: 'Add Social Links',
      icon: <Link size={18} />,
      content: <SocialLinks stepper={stepper} type='wizard-modern' primero={primero} segundo={segundo} tercero={tercero}/>
    }
  ]

  return (
    <div className='modern-horizontal-wizard'>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModern