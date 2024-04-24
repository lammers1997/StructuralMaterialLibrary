import MaterialList from '../components/MaterialList'
import SideMenu from '../components/SideMenu'
import Notification from '../components/Notification'

import { useState } from 'react'

const Materials = () => {

  const [displayMaterial, setDisplayMaterial] = useState('concrete')

  //Handle different materialbutton click on sidemenu, to pass info forward
  const handleMaterialChange = (material) => {
    setDisplayMaterial(material);
  };

  return (
    <div>
      <div style={{ display: 'flex', }}>

        {/* SideMenu manages what is wanted to display */}
        <SideMenu onMaterialChange={handleMaterialChange}
          displayMaterial={displayMaterial} />

        {/* Show wanted material */}
        <MaterialList displayMaterial={displayMaterial}/>

      </div>
    </div>

  )
}

export default Materials
