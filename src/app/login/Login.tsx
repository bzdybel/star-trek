import React, { useState } from "react";

export const Login = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitLogin = () => {
    localStorage.setItem("token", login + password);
  };

  return (
    <main className="container-element container-fluid p-0 m-0 d-flex">
      <div className="img-wrapper p-0 m-0">
        <img
          className="img-login img-fluid w-100 p-0 m-0 h-100"
          src="https://i.pinimg.com/originals/93/4e/86/934e865b9af33aca5f4e381c827e5bd7.jpg"
          alt=""
        />
      </div>
      <div className="form-wrapper container-fluid m-0">
        <div className="d-flex justify-content-center login-wrapper">
          <form className="form align-self-center">
            <legend className="h1 mb-5 font-weight-bold login-title login-name">
              Login
            </legend>
            <label className="h5 mb-1 login-title" htmlFor="username">
              Username
            </label>
            <div className="input-group">
              <input
                data-cy="search"
                type="text"
                className="border-right-0 form-control  h-100 input-login"
                onChange={(event) => setLogin(event.target.value)}
              />
            </div>
            <label className="h5 mb-1 login-title" htmlFor="password">
              Password
            </label>
            <div className="input-group">
              <input
                data-cy="search"
                type="password"
                className="border-right-0 form-control  h-100 input-login"
                aria-describedby="basic-addon2"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-login active w-100  mb-3 mt-5 input-login"
              onClick={() => submitLogin()}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
