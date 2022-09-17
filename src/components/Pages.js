import React from "react";
import "./Pages.css";
import Logo from "../img/sb-logo.svg";
import { AiOutlineTwitter } from "react-icons/fa";

const pages = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 ">
          <div className="inner-box">
            <img src={Logo} alt="" className="logo" style={{ height: 110, margin: 20 }} />
            <div>
              <h1 className="title" style={{ fontSize: 22, fontWeight: 500, marginBottom: 10 }}>
                Sign up on Start Bootstrap
              </h1>
              <p style={{ fontSize: 20, marginBottom: 10 }}>
                Join our community of designers and developers and manage your purchases, favorite themes and snippets,
                comments, and more!
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "spaceEvenly" }}>
              <button type="button" class="btn btn-primary" style={{ backgroundColor: "#1da1f2" }}>
                <span>Login With Twitter</span>
              </button>
              <button type="button" class="btn btn-secondary" style={{ backgroundColor: "#3b5998" }}>
                <span>Login With Facebook</span>
              </button>
              <button type="button" class="btn btn-success" style={{ backgroundColor: "#ea4335" }}>
                <span>Login With Google</span>
              </button>
              <button type="button" class="btn btn-danger" style={{ backgroundColor: "#333" }}>
                <span>Login With GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pages;
