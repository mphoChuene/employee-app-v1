import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { ContactService } from "../../../services/ContactServices";
import Spinner from "../../spinner/spinner";

const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await ContactService.getAllContacts();
        console.log(response);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          contacts: response.data,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          errorMessage: error.message,
        }));
      }
    };
    fetchData();
  }, []);

  console.log(state);

  const { loading, contacts, errorMessage } = state;

  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Employee App
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"></i>
                    Add
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Id"
                    />
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="contact-list">
            <div className="container">
              <div className="row">
                {contacts.length > 0 &&
                  contacts.map((contact) => {
                    return (
                      <div className="col-md-6" key={contact.id}>
                        <div className="card my-2">
                          <div className="card-body">
                            <div className="row align-item-center d-flex justify-content-around">
                              <div className="col-md-4">
                                <img
                                  src={contact.photo}
                                  className="img-fluid contact-img"
                                  alt=""
                                />
                              </div>
                              <div className="col-md-7">
                                <ul className="list-group">
                                  <li className="list-group-item list-group-item-action">
                                    Name :{" "}
                                    <span className="fw-bold">
                                      {contact.name}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Phone :{" "}
                                    <span className="fw-bold">
                                      {contact.Phone}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Email :
                                    <span className="fw-bold">
                                      {contact.Email}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Position :
                                    <span className="fw-bold">
                                      {contact.position}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    ID :{" "}
                                    <span className="fw-bold">
                                      {contact.id}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-1 d-flex flex-column align-items-center">
                                <Link
                                  to={`/contacts/view/${contact.id}`}
                                  className="btn btn-warning my-1"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                                <Link
                                  to={`/contacts/edit/${contact.id}`}
                                  className="btn btn-primary my-1"
                                >
                                  <i className="fa fa-pen"></i>
                                </Link>
                                <button
                                  className="btn btn-danger my-1"
                                  onClick={() => clickDelete(contact.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                X
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ContactList;
