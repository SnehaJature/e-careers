import React from "react";
import { NavBar, Header, Container } from "./components";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function UserIndex() {
  return (
    <>
      <Header />
      <hr />
      <Container>
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
}

export default UserIndex;
