import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import LogoImg from "../../images/ifhe-logojpg.jpg";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    console.log("validating");
    Validations();
  };

  const Validations = () => {
    if (username.length === 0) {
      setUsernameError("Username should not be empty");
    } else if (username !== "20STUCHH010209") {
      setUsernameError("Unauthorized User");
    } else if (username === "20STUCHH010209") {
      setUsernameError("");
    }
    if (password.length === 0) {
      setPasswordError("Please enter the Password");
    } else if (password !== "krishna") {
      setPasswordError("Please enter the correct Password");
    }
    if (username === "20STUCHH010209" && password === "krishna") {
      redirect("/Sis");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box-container">
        <div className="input-box">
          <img src={LogoImg} alt="No img" className="logoimg" />
          <h1 className="lgn-hdng">Student Login</h1>
          <br />

          <TextField
            type="text"
            variant="filled"
            name="username"
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <span className="alert">{usernameError}</span>
          <TextField
            type="password"
            variant="filled"
            name="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <span className="alert">{passwordError}</span>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
