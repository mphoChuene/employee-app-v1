import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactServices";
import Spinner from "../../spinner/spinner";

const ViewContact = () => {
  const { contactId } = useParams();

  const [state, setStateFn] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStateFn({ ...state, loading: true });
        const response = await ContactService.getContact(contactId);
        setStateFn({
          loading: false,
          contact: response.data,
          errorMessage: "",
        });
      } catch (error) {
        setStateFn({
          loading: false,
          contact: {},
          errorMessage: "Failed to fetch contact.",
        });
      }
    };

    fetchData();
  }, [contactId]);

  const { loading, contact, errorMessage } = state;

  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">View contact</p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {errorMessage && <p>{errorMessage}</p>}
          {Object.keys(contact).length > 0 && (
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img src={contact.photo} alt="" className="contact-img" />
                  </div>

                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name: <span className="fw-bold">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Phone: <span className="fw-bold">{contact.Phone}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Email: <span className="fw-bold">{contact.Email}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Position:{" "}
                        <span className="fw-bold">{contact.position}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        ID: <span className="fw-bold">{contact.id}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Link to={"/contacts/list"} className="btn btn-warning">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default ViewContact;
