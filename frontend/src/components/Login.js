import React from "react";
import { GoogleLogin } from "react-google-login";

import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const clientId =
    "Your id";

  const onLoginSuccess = (res) => {
    console.log(res);
    toast.success("successfully Login !!!");

    localStorage.setItem("login", JSON.stringify(res.profileObj));
    window.location = "/todo";
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failure", res);
    toast.error("error", res);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <div>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <span
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login"
            >
              <i className="fab fa-google"></i> Login{" "}
            </span>
          )}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
}
