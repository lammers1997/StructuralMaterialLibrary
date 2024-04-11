import { useState } from 'react'
import AddConcreteForm from '../components/AddConcreteForm'
import AddTimberForm from '../components/AddTimberForm';
import AddSteelForm from '../components/AddSteelForm';

const AddNew = () => {

    const [concFormVisibility, setConcFormVisiblity] = useState(false);
    const [steelFormVisibility, setSteelFormVisiblity] = useState(false);
    const [timberFormVisibility, setTimberFormVisiblity] = useState(false);


    const handleConcreteClick = () => {
        setConcFormVisiblity(!concFormVisibility);
        setSteelFormVisiblity(false);
        setTimberFormVisiblity(false);
    }
    const handleSteelClick = () => {
        setConcFormVisiblity(false);
        setSteelFormVisiblity(!steelFormVisibility);
        setTimberFormVisiblity(false);
    }
    const handleTimberClick = () => {
        setConcFormVisiblity(false);
        setSteelFormVisiblity(false);
        setTimberFormVisiblity(!timberFormVisibility);
    }

    return (
        <div>
            <p>Select what material you would like to add</p>
            <button onClick={handleConcreteClick}>Concrete</button>
            <button onClick={handleSteelClick}>Steel</button>
            <button onClick={handleTimberClick}>Timber</button>
            {concFormVisibility && <AddConcreteForm />}
            {steelFormVisibility && <AddSteelForm />}
            {timberFormVisibility && <AddTimberForm />}
        </div>

    )
}

export default AddNew
