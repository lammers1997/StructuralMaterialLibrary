import { useState } from 'react'
import AddConcreteForm from '../components/AddConcreteForm'
import AddTimberForm from '../components/AddTimberForm';
import AddSteelForm from '../components/AddSteelForm';

import '../styles/AddNew.css'

const AddNew = () => {

    const [concFormVisibility, setConcFormVisiblity] = useState(false);
    const [steelFormVisibility, setSteelFormVisiblity] = useState(false);
    const [timberFormVisibility, setTimberFormVisiblity] = useState(false);

    const [addMaterial, setAddMaterial] = useState('')

    const handleConcreteClick = () => {
        setAddMaterial('concrete')
        setConcFormVisiblity(!concFormVisibility);
        setSteelFormVisiblity(false);
        setTimberFormVisiblity(false);
    }
    const handleSteelClick = () => {
        setAddMaterial('steel')
        setConcFormVisiblity(false);
        setSteelFormVisiblity(!steelFormVisibility);
        setTimberFormVisiblity(false);
    }
    const handleTimberClick = () => {
        setAddMaterial('timber')
        setConcFormVisiblity(false);
        setSteelFormVisiblity(false);
        setTimberFormVisiblity(!timberFormVisibility);
    }


    
    return (
        <div>
            <p>Select what material you would like to add</p>
            <button className={addMaterial === 'concrete' ? 'addButtonActive' : 'addButton'} onClick={handleConcreteClick}>Concrete</button>
            <button className={addMaterial === 'steel' ? 'addButtonActive' : 'addButton'} onClick={handleSteelClick}>Steel</button>
            <button className={addMaterial === 'timber' ? 'addButtonActive' : 'addButton'} onClick={handleTimberClick}>Timber</button>
            {concFormVisibility && <AddConcreteForm/>}
            {steelFormVisibility && <AddSteelForm />}
            {timberFormVisibility && <AddTimberForm />}
        </div>

    )
}

export default AddNew
