import React from "react";

import "./DisplayItems.css";

const DisplayItems = props => {
  const datatarg = "#a" + String(props.data._id);
  const difid = "a" + String(props.data._id);

  return (
    <div>
      <button
        className="btn btn-outline-secondary btn-wid"
        type="button"
        data-toggle="collapse"
        data-target={datatarg}
        aria-expanded="false"
        aria-controls={props.data._id}
        draggable="true"
      >
        {props.data.name} | {props.data.cuisineType}
      </button>

      <div className="collapse" id={difid}>
        <div className="card card-body body-flex">
          <div className="newflex">
            <div className="name txtare">
              Chef Name:{" "}
              <input
                className="form-control"
                placeholder={props.data.details.chefName}
                readOnly
              />
            </div>
            <div className="name inp-wid">
              Name:{" "}
              <input
                className="form-control"
                placeholder={props.data.name}
                readOnly
              />
            </div>
            <div className="name inp-wid">
              Cuisine Type:{" "}
              <input
                className="form-control"
                placeholder={props.data.cuisineType}
                readOnly
              />
            </div>
            <div className="name txtare">
              Description:{" "}
              <textarea
                className="form-control"
                placeholder={props.data.description}
                readOnly
              />
            </div>
            <div className="name inp-wid">
              Mfg. Date:{" "}
              <input
                className="form-control"
                placeholder={props.data.details.preparedOn.substring(0, 10)}
                readOnly
              />
            </div>
            <div className="name inp-wid">
              Exp. Date:{" "}
              <input
                className="form-control"
                placeholder={props.data.details.expirationDate.substring(0, 10)}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItems;
