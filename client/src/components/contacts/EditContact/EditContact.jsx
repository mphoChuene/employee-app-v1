import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactServices";
import Spinner from "../../spinner/spinner";

const EditContact = () => {
  const { contactId } = useParams();

  const navigate = useNavigate();

  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      id: "",
      photo: "",
      Phone: "",
      Email: "",
      company: "",
      position: "",
    },
    errorMessage: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setState({ ...state, loading: true });
        const response = await ContactService.getContact(contactId);
        setState({
          ...state,
          loading: false,
          contact: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    })();
  }, [contactId]);

  const updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  const { loading, contact, errorMessage } = state;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="add-contact">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="h4 text-light fw-bold">Edit Contact</p>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <form onSubmit={formSubmit}>
                      <div className="mb-2">
                        <input
                          required={true}
                          name="name"
                          value={contact.name}
                          onChange={updateInput}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.photo}
                          type="text"
                          className="form-control"
                          placeholder="photo Url"
                          name="photo"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.Phone}
                          type="number"
                          className="form-control"
                          placeholder="Phone"
                          name="Phone"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.Email}
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="Email"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.company}
                          type="text"
                          className="form-control"
                          placeholder="Company"
                          name="company"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.position}
                          type="text"
                          className="form-control"
                          placeholder="Position"
                          name="position"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          required={true}
                          onChange={updateInput}
                          value={contact.id}
                          type="number"
                          className="form-control"
                          placeholder="id"
                          name="id"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Update"
                        />
                        <Link
                          to={"/contacts/list"}
                          className="btn btn-dark ms-2"
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <img src={contact.photo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EditContact;
