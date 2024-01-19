import React from "react";
import { NavBar, Header, Container,Carousel } from "./components";

function UserIndex() {
  return (
    <>
      <Header />
      <hr />
      <Container>
        <NavBar />
        <Carousel/>
      </Container>
    </>
  );
}

export default UserIndex;
