/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import "../Home.css";
import "./Chef.css";
import DisplayItems from "./DisplayChefItems/displayItems";
import { UserContext } from "../../../GlobalContext/GlobalData";

const Chef = () => {
  const [user, setUser] = useContext(UserContext);

  const [data, setData] = useState();
  const [name, setName] = useState();
  const [cuisineType, setCuisineType] = useState();
  const [description, setDescription] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [status, setStatus] = useState();

  const utc = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "/");

  const getData = async () => {
    const items = await fetch("http://localhost:5000/api/cuisines", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    });
    const itemData = await items.json();
    setData(itemData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getDate = e => {
    document.getElementById("expDateId").value = utc;
    setExpirationDate(utc);
  };

  const addCuisine = async () => {
    const cuisineBody = {
      name: name,
      cuisineType: cuisineType,
      description: description,
      details: {
        chefName: user.firstName,
        preparedOn: utc,
        expirationDate: expirationDate
      }
    };
    const jsonBody = JSON.stringify(cuisineBody);
    console.log(jsonBody);
    try {
      const addedItem = await fetch(process.env.HOST_URL + "/api/cuisines", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: jsonBody
      });
      if (addedItem.status === 200) {
        setStatus("Data added successfully");
        getData();
      } else {
        setStatus("Wrong data.. Data Not added");
      }
    } catch (error) {
      setStatus("Wrong data.. Data Not added");
    }
  };

  let displ;
  if (data === undefined) {
    displ = <></>;
  } else {
    displ = data
      .sort((a, b) => a.details.preparedOn - b.details.preparedOn)
      .map(r => <DisplayItems key={r._id} data={r} />);
  }

  let addDataButton;
  if (["chef"].includes(user.roles[0])) {
    addDataButton = (
      <button
        type="button"
        onClick={addCuisine}
        className="btn btn-outline-success btn-wid"
      >
        Add Cuisine
      </button>
    );
  } else {
    addDataButton = (
      <button
        type="button"
        className="btn btn-outline-success btn-wid disabled"
      >
        Only Chef can update Menu
      </button>
    );
  }

  return (
    <div className="main">
      <div className="chef">
        <button
          className="btn btn-primary btn-wid"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          + Add Item +
        </button>
        <div className="collapse btn-wid" id="collapseExample">
          <div className="card card-body">
            <input
              type="text"
              onChange={e => {
                setName(e.target.value);
              }}
              aria-label="First name"
              className="form-control dishname"
              placeholder="Dish Name"
            />
            <input
              type="text"
              onChange={e => {
                setCuisineType(e.target.value);
              }}
              aria-label="Last name"
              className="form-control dishtype"
              placeholder="Dish Type"
            />
            <textarea
              onChange={e => {
                setDescription(e.target.value);
              }}
              className="form-control dishdesc"
              placeholder="Dish Description"
              aria-label="With textarea"
            ></textarea>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={e => {
                  setExpirationDate(e.target.value);
                }}
                id="expDateId"
                className="form-control"
                placeholder="Expiration Date"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  id="basic-addon2"
                  onClick={getDate}
                >
                  Today Date
                </button>
              </div>
              {status}
            </div>
            {/* <div className="name inp-wid">
              <input className="form-control" placeholder={utc} />
            </div> */}
            {addDataButton}
          </div>
        </div>
      </div>
      {displ}
    </div>
  );
};

export default Chef;
