import { useSelector } from "react-redux";
import "../styles/MatCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";

const ConcreteMaterialCard = ({
  name,
  f_ck,
  f_ckcube,
  f_ctm,
  fctk05,
  fctk95,
  Ecm,
  epsilon_c1,
  density,
  thermal_conductivity,
  deleteThis,
  id,
}) => {
  const user = useSelector((state) => state.user.user);

  const isAdmin = user && user.role === "admin";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup>
          <ListGroup.Item>
            f<sub>ck</sub>: {f_ck.value} {f_ck.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>ck,cube</sub>: {f_ckcube.value} {f_ckcube.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>ctm</sub>: {f_ctm.value} {f_ctm.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>ctk,0,5</sub>: {fctk05.value} {fctk05.unit}
          </ListGroup.Item>

          <ListGroup.Item>
            f<sub>ctk,0,95</sub>: {fctk95.value} {fctk95.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            E<sub>cm</sub>: {Ecm.value} {Ecm.unit}
          </ListGroup.Item>

          <ListGroup.Item>
            &#x3B5;<sub>c1</sub>: {epsilon_c1.value} {epsilon_c1.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            &#x3C1;: {density.value} {density.unit}
          </ListGroup.Item>

          <ListGroup.Item>
            &#x3BB;: {thermal_conductivity.value} {thermal_conductivity.unit}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      {isAdmin && (
        <Button onClick={() => deleteThis(id)} variant='danger'>
          Delete
        </Button>
      )}
    </Card>
  );
};
export default ConcreteMaterialCard;
