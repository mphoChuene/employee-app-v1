import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactServices";

const ViewContact = () => {
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await ContactService.getContact(contactId);
        setState({
          loading: false,
          contact: response.data,
          errorMessage: "",
        });
      } catch (error) {
        setState({
          loading: false,
          contact: {},
          errorMessage: "Failed to fetch contact.",
        });
      }
    };

    fetchData();
  }, [contactId]);

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

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row" align-item-center>
            <div className="col-md-4">
              <img
                src="https://th.bing.com/th/id/R.e87ab0a15b2b65662020e614f7e05ef1?rik=u%2fLxcTxmswz41A&pid=ImgRaw&r=0"
                alt=""
                className="contact-img"
              />
            </div>

            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">Mpho Chuene</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Phone : <span className="fw-bold">0765432672</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email :<span className="fw-bold">Mpho@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Position :<span className="fw-bold">software developer</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  ID : <span className="fw-bold">123456789</span>
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
    </>
  );
};

export default ViewContact;
