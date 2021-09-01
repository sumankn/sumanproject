// name : Userinfo //
// author : Suman //
// Date  :  22/08/2021 //

import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const UserInfo = () => {
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();
  const history = useHistory();
  const singleUser = users.find((item) => item.id === Number(id));
  return (
    <div style={{ marginTop: "100px" }}>
      <div
       className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">User Detail</p>
        <hr />
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6 fw-bold">Name:</p>
        <p className="col-md-6">{singleUser.name}</p>
        <p className="col-md-6 fw-bold">City:</p>
        <p className="col-md-6">{singleUser.city}</p>
        <p className="col-md-6 fw-bold">age:</p>
        <p className="col-md-6">{singleUser.age}</p>
        <p className="col-md-6 fw-bold">status:</p>
        <p className="col-md-6">{singleUser.status}</p>
      </div>
      <MDBBtn onClick={() => history.push("/")} color="danger">
        Go Back
      </MDBBtn>
    </div>
  );
};


export default UserInfo;
