import { useState } from "react";
import AddConcreteForm from "../components/AddConcreteForm";
import AddTimberForm from "../components/AddTimberForm";
import AddSteelForm from "../components/AddSteelForm";

import "../styles/AddNew.css";
import { Container, Button } from "react-bootstrap";

const AddNew = () => {
  const [concFormVisibility, setConcFormVisiblity] = useState(false);
  const [steelFormVisibility, setSteelFormVisiblity] = useState(false);
  const [timberFormVisibility, setTimberFormVisiblity] = useState(false);

  const [addMaterial, setAddMaterial] = useState("");

  const handleConcreteClick = () => {
    setAddMaterial("concrete");
    setConcFormVisiblity(!concFormVisibility);
    setSteelFormVisiblity(false);
    setTimberFormVisiblity(false);
  };
  const handleSteelClick = () => {
    setAddMaterial("steel");
    setConcFormVisiblity(false);
    setSteelFormVisiblity(!steelFormVisibility);
    setTimberFormVisiblity(false);
  };
  const handleTimberClick = () => {
    setAddMaterial("timber");
    setConcFormVisiblity(false);
    setSteelFormVisiblity(false);
    setTimberFormVisiblity(!timberFormVisibility);
  };

  return (
    <Container className='justify-content-center' style={{ width: "24rem" }}>
      <p>Select what material you would like to add</p>
      <Button
        className={addMaterial === "concrete" ? "addButtonActive" : "addButton"}
        onClick={handleConcreteClick}
      >
        Concrete
      </Button>
      <Button
        className={addMaterial === "steel" ? "addButtonActive" : "addButton"}
        onClick={handleSteelClick}
      >
        Steel
      </Button>
      <Button
        className={addMaterial === "timber" ? "addButtonActive" : "addButton"}
        onClick={handleTimberClick}
      >
        Timber
      </Button>
      {concFormVisibility && <AddConcreteForm />}
      {steelFormVisibility && <AddSteelForm />}
      {timberFormVisibility && <AddTimberForm />}
    </Container>
  );
};

export default AddNew;
