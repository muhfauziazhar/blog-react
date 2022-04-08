import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputHandlerEmail = (email) => {
    return setEmail(email);
  };

  const inputHandlerPassword = (pass) => {
    return setPassword(pass);
  };

  const loginBlog = () => {
    axios({
      method: "POST",
      url: `https://ourmoments-api.herokuapp.com/login/`,
      data: {
        email,
        password,
      },
    }).then((result) => {
      if (result.data) {
        toast.success("Login Successfully");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <MDBValidation className="row g-3" style={{ marginTop: "100px" }}>
      <p className="fs-2 fw-bold">Login</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={email}
          name="email"
          type="text"
          onChange={(e) => inputHandlerEmail(e.target.value)}
          required
          label="Email"
        />
        <br />
        <MDBInput
          value={password}
          name="password"
          type="password"
          onChange={(e) => inputHandlerPassword(e.target.value)}
          required
          label="Password"
        />
        <br />
        <p>
          Belum memiliki akun? <a href="/signup">Daftar disini!</a>
        </p>
        <MDBBtn
          type="submit"
          style={{ marginRight: "10px" }}
          onClick={() => loginBlog()}
        >
          Login
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default Login;
