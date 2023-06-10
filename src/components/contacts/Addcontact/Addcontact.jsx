import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactServices";

const Addcontact = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      Phone: "",
      Email: "",
      company: "",
      position: "",
    },
    errorMessage: " ",
  });

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();

    try {
      let response = await ContactService.createContact(state.contact);
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate("/contacts/add", { replace: false });
    }
  };

  let { loading, contact, errorMessage } = state;

  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-light fw-bold">Create Contact</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={submitForm}>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="name"
                      value={contact.name}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Full-name"
                    />
                  </div>

                  <div className="mb-2">
                    <input
                      required={true}
                      name="id"
                      value={contact.id}
                      onChange={updateInput}
                      type="number"
                      className="form-control"
                      placeholder="id"
                    />
                  </div>

                  <div className="mb-2">
                    <input
                      required={true}
                      name="photo"
                      value={contact.photo}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="photo Url"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="Phone"
                      value={contact.Phone}
                      onChange={updateInput}
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="Email"
                      value={contact.Email}
                      onChange={updateInput}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="company"
                      value={contact.company}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Company"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="position"
                      value={contact.position}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Position"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Create"
                    />
                    <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addcontact;
