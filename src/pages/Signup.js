import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputHandlerUsername = (username) => {
    return setUsername(username);
  };

  const inputHandlerEmail = (email) => {
    return setEmail(email);
  };

  const inputHandlerPassword = (pass) => {
    return setPassword(pass);
  };

  const signupBlog = () => {
    axios({
      method: "POST",
      url: `https://ourmoments-api.herokuapp.com/signup/`,
      data: {
        username,
        email,
        password,
      },
    }).then((result) => {
      if (result.data) {
        toast.success("Sign Up Successfully");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <MDBValidation className="row g-3" style={{ marginTop: "100px" }}>
      <p className="fs-2 fw-bold">Register</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={username}
          name="username"
          type="text"
          onChange={(e) => inputHandlerUsername(e.target.value)}
          required
          label="Username"
        />
        <br />
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
          Sudah memiliki akun? <a href="/login">Login disini!</a>
        </p>
        <MDBBtn
          type="submit"
          style={{ marginRight: "10px" }}
          onClick={() => signupBlog()}
        >
          Sign Up
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default Signup;
