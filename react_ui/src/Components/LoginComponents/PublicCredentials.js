import React from "react";

const PublicCredentials = () => {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Demo :- Admin Credentials
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
          style={{ borderLeft: "50%" }}
        >
          Demo :- Manager Credentials
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Email Id: admin@user.com <br />
              password: AutoAdmin <br />
              <small>Full Access to Hotel Data</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              Email ID: manager@user.com <br />
              password: Manager <br />
              <small>Limited Access to Hotel Data</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicCredentials;
