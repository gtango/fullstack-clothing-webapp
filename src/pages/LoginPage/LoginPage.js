import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const intialFormValues = { username: "", password: "" };
  // const intialErrorValues = { username: [], password: [] };
  const [formValues, setFormValues] = useState(intialFormValues);
  // const [formErrors, setFormErrors] = useState(intialErrorValues);
  const [submit, setSubmit] = useState(false);

  function saveUser(username, userId, expire, hours) {
    const user = {
      username: username,
      userId: userId,
      expire: expire + (hours * (60 * 60000)),
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login/success");
  }

  const login = async (user, password) => {
    const result = await axios.post(
      `${window.location.origin}/api/v1/auth/signin`,
      { username: user, password: password },
      { withCredentials: "true" }
    );

    saveUser(result.data.username, result.data.id, Date.now(), 24);
    return result.data;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSubmit(false);
    setFormValues({ ...formValues, [id]: value });
  };

  const { error, isFetching } = useQuery({
    queryKey: ["loginQuery", submit],
    queryFn: () =>
      login(formValues.username.toString(), formValues.password.toString()),
    // enabled: !!submit && formErrors.password.length === 0 && formErrors.username.length === 0,
    enabled: !!submit,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ height: "95vh", background: "#F5EEE4" }}
      >
        <strong className="fs-1 p-4 text-uppercase" role="status">
          Getting profile...
        </strong>
        <div className="spinner-border " aria-hidden="true"></div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{ minHeight: "90vh", background: "#F5EEE4" }}
    >
      <div className="row justify-content-center align-items-center text-center g-2 w-100">
        <div
          className="card border-dark col-8 p-0"
          style={{ background: "#F5EEE4" }}
        >
          <h1 className="card-header border-dark text-uppercase">Login</h1>
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handleSubmit(e);
                setSubmit(true);
              }}
            >
              <label
                htmlFor="username"
                className="card-title form-label text-capitalize text-start fs-4 w-100"
              >
                username
              </label>
              <input
                required
                type="text"
                id="username"
                pattern="[a-zA-Z0-9]{5,20}"
                placeholder="Enter Username (Case Sensitive)"
                onChange={handleChange}
                value={formValues.username}
                style={{ background: "#F5EEE4" }}
                className="form-control border-dark mb-2 p-2"
              />
              {/* <p
                className="err-msg"
                style={{ display: formErrors ? "none" : "block" }}
              >
                {formErrors.username[0]}
              </p> */}

              <label
                htmlFor="password"
                className="card-title form-label text-capitalize text-start fs-4 w-100"
              >
                password
              </label>
              <input
                required
                id="password"
                minLength={8}
                type="password"
                autoComplete="on"
                onChange={handleChange}
                value={formValues.password}
                placeholder="Enter Password"
                style={{ background: "#F5EEE4" }}
                // pattern="[a-zA-Z0-9]{8,20}"
                className="form-control border-dark mb-2 p-2"
              />
              {/* {formErrors.password.map((msg) => (
                <p
                  key={msg}
                  className="text-capitalize text-start text-danger p-0 m-0"
                  style={{
                    display: formErrors.password.length <= 0 ? "none" : "block",
                  }}
                >
                  {msg}
                </p>
              ))} */}

              <div className="d-flex justify-content-between pt-2">
                <a href="/signup" className="btn btn-outline-dark">
                  Signup
                </a>
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="card-footer d-flex flex-wrap justify-content-md-between justify-content-center">
            <p className="card-text text-capitalize mx-1 my-0 m-lg-0">
              new? make sure to hit 'Signup!'
            </p>
            <p className="card-text text-capitalize mx-1 my-0 m-lg-0">
              not new? welcome back!
            </p>
          </div>
        </div>

        <div
          className={
            error === null
              ? // error === null || formErrors.password.length > 0 || formErrors.username.length > 0
                "card border-dark bg-danger col-8 p-0 mb-4 d-none"
              : "card border-dark bg-danger col-8 p-0 mb-4"
          }
        >
          <h6 className="card-header border-dark text-uppercase">
            error occured
          </h6>
          <div className="card-body d-flex flex-column justify-content-between">
            <p className="text-capitalize p-0 m-0">
              {error?.response.status} {error?.response.statusText}
            </p>
            <p className="text-capitalize p-0 m-0">
              {error?.response.data.message}
            </p>
            <p className="text-capitalize p-0 m-0">please try again!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
