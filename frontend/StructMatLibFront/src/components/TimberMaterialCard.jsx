import { useSelector } from "react-redux";
// import "../styles/MatCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";

const TimberMaterialCard = ({
  name,
  f_mk,
  f_t0k,
  f_t90k,
  f_c0k,
  f_c90k,
  E_0mean,
  E_005,
  E_90mean,
  G_mean,
  G_005,
  density_k,
  density_mean,
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
            f<sub>mk</sub>: {f_mk.value} {f_mk.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>t,0,k</sub>: {f_t0k.value} {f_t0k.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>t,90,k</sub>: {f_t90k.value} {f_t90k.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>c,0,k</sub>: {f_c0k.value} {f_c0k.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            f<sub>c,90,k</sub>: {f_c90k.value} {f_c90k.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            E<sub>0,mean</sub>: {E_0mean.value} {E_0mean.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            E<sub>0,05</sub>: {E_005.value} {E_005.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            E<sub>90,mean</sub>: {E_90mean.value} {E_90mean.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            G<sub>mean</sub>: {G_mean.value} {G_mean.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            G<sub>0,05</sub>: {G_005.value} {G_005.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            &#x3C1;<sub>k</sub>: {density_k.value} {density_k.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            &#x3C1;<sub>mean</sub>: {density_mean.value} {density_mean.unit}
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
export default TimberMaterialCard;
