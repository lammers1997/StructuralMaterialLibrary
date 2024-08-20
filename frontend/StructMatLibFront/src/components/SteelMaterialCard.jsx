import { useSelector } from "react-redux";
import "../styles/MatCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";

const SteelMaterialCard = ({ name, f_yk, E, density, deleteThis, id }) => {
  const user = useSelector((state) => state.user.user);

  const isAdmin = user && user.role === "admin";

  return (
    // <div className='MatCard'>
    //     <div className='MatCard-header'>
    //         <div className='MatCard-headerText'>
    //             <h2>{name}</h2>
    //         </div>
    //         {isAdmin && (
    //             <div className='MatCard-delete'>
    //                 <button onClick={() => deleteThis(id)}>Delete</button>
    //             </div>
    //         )}
    //     </div>
    //     <div className='steelContainer'>
    //         <div className='MatCard-text'>
    //             <p>f<sub>yk</sub>: {f_yk.value} {f_yk.unit}</p>
    //             <p>E<sub></sub>: {E.value} {E.unit}</p>
    //             <p>&#x3C1;: {density.value} {density.unit}</p>
    //         </div>
    //     </div>
    // </div>

    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup>
          <ListGroup.Item>
            f<sub>yk</sub>: {f_yk.value} {f_yk.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            E<sub></sub>: {E.value} {E.unit}
          </ListGroup.Item>
          <ListGroup.Item>
            &#x3C1;: {density.value} {density.unit}
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
export default SteelMaterialCard;
