import React from "react";
import { Link } from "react-router-dom";

const Addcontact = () => {
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
                <form>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="photo Url"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                    />
                  </div>
                  <div className="mb-2">
                    <input
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