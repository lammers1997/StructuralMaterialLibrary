import { Nav, Button } from "react-bootstrap";
import "../styles/SideMenu.css";

const SideMenu = ({ onMaterialChange, displayMaterial }) => {
  return (
    <Nav className='flex-column'>
      {/* Option to display different materials */}

      <Button
        className={
          displayMaterial === "concrete" ? "menuButtonActive" : "menuButton"
        }
        onClick={() => onMaterialChange("concrete")}
      >
        Concrete
      </Button>
      <Button
        className={
          displayMaterial === "steel" ? "menuButtonActive" : "menuButton"
        }
        onClick={() => onMaterialChange("steel")}
      >
        Steel
      </Button>
      <Button
        className={
          displayMaterial === "timber" ? "menuButtonActive" : "menuButton"
        }
        onClick={() => onMaterialChange("timber")}
      >
        Timber
      </Button>
    </Nav>
  );
};

export default SideMenu;
