import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container style={{ marginLeft: "0px" }}>
      <h2>About this website:</h2>
      <p>
        This page provides a complete material library for materials needed in
        structural engineering
      </p>
      <p>Each material has information on its properties</p>
      <p>Note that only as admin you can delete content from the website</p>
    </Container>
  );
};

export default Home;
