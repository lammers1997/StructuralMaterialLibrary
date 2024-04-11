import { useState } from 'react'
import AddConcrete from '../components/AddConcrete'
import AddTimber from '../components/AddTimber';
import AddSteel from '../components/AddSteel';

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
            {concFormVisibility && <AddConcrete />}
            {steelFormVisibility && <AddSteel />}
            {timberFormVisibility && <AddTimber />}
        </div>

    )
}

export default AddNew
