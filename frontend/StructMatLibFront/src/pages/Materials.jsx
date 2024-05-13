import MaterialList from '../components/MaterialList'
import SideMenu from '../components/SideMenu'
import Notification from '../components/Notification'

import { setConcretes } from '../reducers/concreteReducer'
import { setSteel } from '../reducers/steelReducer'

import concreteService from '../services/concretes'
import steelService from '../services/steels'
import timberService from '../services/timbers'


import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTimber } from '../reducers/timberReducer'

import '../styles/MaterialList.css'


const Materials = () => {

  const [displayMaterial, setDisplayMaterial] = useState('concrete')

  const dispatch = useDispatch()


  concreteService
    .getAll().then(concretes => dispatch(setConcretes(concretes)))

  steelService
    .getAll().then(steels => dispatch(setSteel(steels)))

  timberService
    .getAll().then(timbers => dispatch(setTimber(timbers)))

  //Handle different materialbutton click on sidemenu, to pass info forward
  const handleMaterialChange = (material) => {
    setDisplayMaterial(material);
  };

  return (
    <div>
      <div className='material-content'>

        {/* SideMenu manages what is wanted to display */}
        <SideMenu onMaterialChange={handleMaterialChange}
          displayMaterial={displayMaterial} />

        {/* Show wanted material */}
        <MaterialList displayMaterial={displayMaterial} />

      </div>
    </div>

  )
}

export default Materials
