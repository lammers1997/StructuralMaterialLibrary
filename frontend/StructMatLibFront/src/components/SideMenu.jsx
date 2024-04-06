import { setMaterials } from '../reducers/materialReducer'
import concreteService from '../services/concretes'

import '../styles/SideMenu.css'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const SideMenu = ({onMaterialChange, displayMaterial}) => {

    const dispatch = useDispatch()

    //Fetch correct materialdata from backend
    useEffect(() => {
        switch (displayMaterial) {
            case 'concrete':
                concreteService
                    .getAll().then(concretes => dispatch(setMaterials(concretes)))
                break;
            case 'steel':
                dispatch(setMaterials([])); //ToDo: fetch steel data from backend
                break;
            case 'timber':
                dispatch(setMaterials([])); //ToDo: fetch timber data from backend
                break;
        }
    })

    return (
        <div className='sideMenu'>
            <p>Displaying: {displayMaterial}</p>

            {/* Option to display different materials */}
            <button className='menuButton' onClick={() => onMaterialChange('concrete')}>
                Concrete
            </button>
            <button className='menuButton' onClick={() => onMaterialChange('steel')}>
                Steel
            </button>
            <button className='menuButton' onClick={() => onMaterialChange('timber')}>
                Timber
            </button>
            
        </div>
    );
};

export default SideMenu;
