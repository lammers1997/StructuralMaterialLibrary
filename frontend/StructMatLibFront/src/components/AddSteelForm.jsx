import { useState } from "react";
import { useDispatch } from "react-redux";
import { appendSteel } from "../reducers/steelReducer";
import { Form, Button } from "react-bootstrap";
import Notification from "./Notification";

import steelService from "../services/steels";

const AddSteelForm = () => {
  const [newName, setNewName] = useState("");
  const [newf_yk, setNewf_yk] = useState("");
  const [newE, setNewE] = useState("");
  const [newdensity, setNewdensity] = useState("");

  const [notificationMessage, setNotificationMessage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSteelMaterial = {
      name: newName,
      f_yk: {
        value: newf_yk,
        unit: "MPa",
      },
      E: {
        value: newE,
        unit: "GPa",
      },
      density: {
        value: newdensity,
        unit: "kg/m^3",
      },
    };

    try {
      //Dispatching not currently necessary, since data is constantly retrieved from server :/
      // Might require some fix for this :P
      dispatch(appendSteel(newSteelMaterial));

      await steelService.addNewMaterial(newSteelMaterial);
      setNotificationMessage(`Material ${newName}, successfully added`);
    } catch (error) {
      window.alert(error.response.data.error);
    }

    setNewName("");
    setNewf_yk("");
    setNewE("");
    setNewdensity("");

    setTimeout(() => {
      setNotificationMessage(null);
    }, 6000);
  };

  return (
    <div>
      <Notification message={notificationMessage} />

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            type='text'
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            f<sub>yk</sub>:
          </Form.Label>
          <Form.Control
            required
            type='number'
            step='0.01'
            value={newf_yk}
            onChange={(event) => setNewf_yk(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            E<sub></sub>:
          </Form.Label>
          <Form.Control
            required
            type='number'
            step='0.01'
            value={newE}
            onChange={(event) => setNewE(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            &#x3C1;<sub>k</sub>:
          </Form.Label>
          <Form.Control
            required
            type='number'
            step='0.01'
            value={newdensity}
            onChange={(event) => setNewdensity(event.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          add
        </Button>
      </Form>
    </div>
  );
};
export default AddSteelForm;
