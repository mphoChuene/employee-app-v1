import "./App.css";
import React from "react";
import { Routers, Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ContactList from "./components/contacts/ContactList/ContactList";
import Addcontact from "./components/contacts/Addcontact/Addcontact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import EditContact from "./components/contacts/EditContact/EditContact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<Addcontact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </>
  );
};

export default App;
