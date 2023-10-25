import "./App.css";
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ContactList from "./components/contacts/ContactList/ContactList";
import Addcontact from "./components/contacts/Addcontact/Addcontact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import EditContact from "./components/contacts/EditContact/EditContact";
// import Spinner from "./components/spinner/spinner";
import RegisterForm from "./components/Auth/Register";
import LoginForm from "./components/Auth/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/login"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<Addcontact />} />
        <Route path={"/registration"} element={<RegisterForm />} />
        <Route path={"/login"} element={<LoginForm />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </>
  );
};

export default App;
