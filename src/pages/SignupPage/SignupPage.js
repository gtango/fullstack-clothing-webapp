import { DatePicker } from "@mui/x-date-pickers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function SignupPage() {
  const initialFormValues = {
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: null,
    email: "",
    password: "",
    addresses: {
      streetAddressOne: "",
      streetAddressTwo: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      type: "",
    },
  };
  const initialErrorValues = {
    username: [],
    firstName: [],
    middleName: [],
    lastName: [],
    dob: null,
    email: [],
    password: [],
    addresses: {
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      type: "",
    },
  };
  const [submit, setSubmit] = useState(false);
  const [noErrorsExist, setErrorsExist] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialErrorValues);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // setSubmit(false);
    const addyFields = [
      "streetAddressOne",
      "streetAddressTwo",
      "city",
      "state",
      "zipcode",
      "country",
      "type",
    ];
    if (addyFields.includes(id)) {
      setFormValues({
        ...formValues,
        addresses: { ...formValues.addresses, [id]: value },
      });
    } else {
      setFormValues({ ...formValues, [id]: value });
    }
  };

  const handleDate = (val) => {
    setFormValues({ ...formValues, dob: val });
  };

  const updateSubmit = (val) => {
    setSubmit(val);
  };

  const updateErrorsExist = (val) => {
    setErrorsExist(val);
  };

  const handleError = () => {
    console.log("submitted");
    const errors = {
      username: [],
      firstName: [],
      middleName: [],
      lastName: [],
      dob: [],
      email: [],
      password: [],
    };

    const nameReg = new RegExp("[\\W+0-9]");
    const usernameReg = new RegExp("^([a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*)$");
    const lowercaseReg = new RegExp("(?=.*?[a-z])");
    const uppercaseReg = new RegExp("(?=.*?[A-Z])");
    const digitReg = new RegExp("(?=.*?[0-9])");
    const specialReg = new RegExp("(?=.*?[#?!@$%^&*-])");
    const minChar = new RegExp(".{8,20}$");

    if (!usernameReg.test(formValues.username)) {
      errors.username.push(
        "invalid. no special characters & atleast one letter"
      );
      updateErrorsExist(false);
    }

    if (nameReg.test(formValues.firstName)) {
      errors.firstName.push("invalid characters found");
      updateErrorsExist(false);
    }

    if (nameReg.test(formValues.middleName)) {
      errors.middleName.push("invalid characters found");
      updateErrorsExist(false);
    }

    if (nameReg.test(formValues.lastName)) {
      errors.lastName.push("invalid characters found");
      updateErrorsExist(false);
    }

    if (!lowercaseReg.test(formValues.password)) {
      errors.password.push("missing lowercase");
      updateErrorsExist(false);
    }

    if (!uppercaseReg.test(formValues.password)) {
      errors.password.push("missing uppercase");
      updateErrorsExist(false);
    }

    if (!digitReg.test(formValues.password)) {
      errors.password.push("missing number");
      updateErrorsExist(false);
    }

    if (!specialReg.test(formValues.password)) {
      errors.password.push(
        "missing special character or contains invalid character"
      );
      updateErrorsExist(false);
    }

    if (!minChar.test(formValues.password)) {
      errors.password.push("password needs to be between 8-32");
      updateErrorsExist(false);
    }

    console.log(errors);
    setErrorValues(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubmit(true);
    handleError();
  };

  const togglePassword = () => {
    const form = document.getElementById("password");
    if (form.type === "password") {
      form.type = "text";
    } else {
      form.type = "password";
    }
  };

  const signup = async (
    username,
    first,
    middle,
    last,
    dob,
    email,
    password,
    addresses,
  ) => {
    const user = {
      username: username,
      first_name: first,
      middle_name: middle,
      last_name: last,
      dob: dob,
      email: email,
      password: password,
      addresses: [],
    };

    const res = await axios.post(
      window.location.origin + "/api/v1/auth/signup",
      user,
      { withCredentials: true }
    );
    return res.data;
  };

  const { error, isError, isFetching } = useQuery({
    queryKey: ["signupQuery", submit],
    queryFn: () =>
      signup(
        formValues.username,
        formValues.firstName,
        formValues.middleName,
        formValues.lastName,
        formValues.dob,
        formValues.email,
        formValues.password,
        formValues.addresses,
      ),
    enabled: !!submit && !!noErrorsExist,
    retry: false,
    throwOnError: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ height: "90vh", background: "#F5EEE4" }}
      >
        <strong className="fs-1 p-4 text-uppercase" role="status">
          Sending your request...
        </strong>
        <div className="spinner-border " aria-hidden="true"></div>
      </div>
    );
  }

  console.log(!!submit)
  console.log(noErrorsExist)
  console.log(!noErrorsExist)
  console.log(!!submit && noErrorsExist)


  if (isError) {
    <div
      className={
        error === null
          ? // error === null || formErrors.password.length > 0 || formErrors.username.length > 0
            "card border-dark bg-danger col-8 p-0 mb-4 d-none"
          : "card border-dark bg-danger col-8 p-0 mb-4"
      }
    >
      <h6 className="card-header border-dark text-uppercase">error occured</h6>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="text-capitalize p-0 m-0">
          {error?.response.status} {error?.response.statusText}
        </p>
        <p className="text-capitalize p-0 m-0">
          {error?.response.data.message}
        </p>
        <p className="text-capitalize p-0 m-0">please try again!</p>
      </div>
    </div>;
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center my-2"
      style={{ minHeight: "90vh", background: "#F5EEE4" }}
    >
      <div className="row justify-content-center align-items-center text-center g-2">
        <div
          className="card border-dark col-8 p-0 w-100"
          style={{ background: "#F5EEE4" }}
        >
          <h1 className="card-header border-dark text-uppercase">Signup</h1>

          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(formValues);
                updateSubmit(true);
                handleSubmit(e);
              }}
              className="row"
            >
              {/* username */}
              <div className="col-12">
                <label
                  htmlFor="username"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  Username
                </label>
                <input
                  required
                  type="text"
                  id="username"
                  autoComplete='on'
                  // pattern="[a-zA-Z]{1,}"
                  placeholder="Enter Username"
                  onChange={handleChange}
                  value={formValues.username}
                  style={{ background: "#F5EEE4" }}
                  className="form-control border-dark mb-2 p-2"
                />
                {errorValues.username.map((msg) => {
                  return (
                    <p
                      key={msg}
                      className="text-capitalize text-start text-danger p-0 m-0"
                      style={{
                        display:
                          errorValues.username.length <= 0 ? "none" : "block",
                      }}
                    >
                      {msg}
                    </p>
                  );
                })}
              </div>

              {/* first name */}
              <div className="col-12 col-md-4">
                <label
                  htmlFor="firstName"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  First Name
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  // pattern="[a-zA-Z]{1,}"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  value={formValues.firstName}
                  style={{ background: "#F5EEE4" }}
                  className="form-control border-dark mb-2 p-2"
                />
                {errorValues.firstName.map((msg) => {
                  return (
                    <p
                      key={msg}
                      className="text-capitalize text-start text-danger p-0 m-0"
                      style={{
                        display:
                          errorValues.firstName.length <= 0 ? "none" : "block",
                      }}
                    >
                      {msg}
                    </p>
                  );
                })}
              </div>

              {/* middle name */}
              <div className="col-12 col-md-4">
                <label
                  htmlFor="middleName"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  id="middleName"
                  // pattern="[a-zA-Z]{1,}"
                  placeholder="Enter Middle Name"
                  onChange={handleChange}
                  value={formValues.middleName}
                  style={{ background: "#F5EEE4" }}
                  className="form-control border-dark mb-2 p-2"
                />
                {errorValues.middleName.map((msg) => {
                  return (
                    <p
                      key={msg}
                      className="text-capitalize text-start text-danger p-0 m-0"
                      style={{
                        display:
                          errorValues.middleName.length <= 0 ? "none" : "block",
                      }}
                    >
                      {msg}
                    </p>
                  );
                })}
              </div>

              {/* last name */}
              <div className="col-12 col-md-4">
                <label
                  htmlFor="lastName"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  // pattern="[a-zA-Z]{1,}"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  value={formValues.lastName}
                  style={{ background: "#F5EEE4" }}
                  className="form-control border-dark mb-2 p-2"
                />
                {errorValues.lastName.map((msg) => {
                  return (
                    <p
                      key={msg}
                      className="text-capitalize text-start text-danger p-0 m-0"
                      style={{
                        display:
                          errorValues.lastName.length <= 0 ? "none" : "block",
                      }}
                    >
                      {msg}
                    </p>
                  );
                })}
              </div>

              {/* date of birth */}
              <div className="col-12">
                <p
                  className="card-title form-label text-capitalize text-start fs-4 m-0 w-100"
                >
                  Birthday (Optional)
                </p>
                <DatePicker
                  id="dob"
                  className="float-start w-100 mb-1"
                  onChange={(date) =>
                    handleDate(date.toISOString().split("T")[0])
                  }
                />
              </div>

              {/* email */}
              <div className="col-12">
                <label
                  htmlFor="email"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  autoComplete="on"
                  // pattern="[a-zA-Z]{1,}"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={formValues.email}
                  style={{ background: "#F5EEE4" }}
                  className="form-control border-dark mb-2 p-2"
                />
              </div>

              {/* password */}
              <div className="col-12">
                <label
                  htmlFor="password"
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  password
                </label>
                <div className="d-flex flex-column justify-content-center align-items-center">
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
                    className="form-control border-dark p-2 w-100"
                  />
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex flex-column">
                      {errorValues.password.map((msg) => (
                        <p
                          key={msg}
                          className="text-capitalize text-start text-danger p-0 m-0"
                          style={{
                            display:
                              errorValues.password.length <= 0
                                ? "none"
                                : "block",
                          }}
                        >
                          {msg}
                        </p>
                      ))}
                    </div>

                    <p className="text-capitalize text-nowrap ps-2 m-0">
                      <input
                        id='showPassword'
                        type="checkbox"
                        className="mx-2"
                        onClick={() => togglePassword()}
                      />
                      show password
                    </p>
                  </div>
                </div>
              </div>

              {/* address */}
              <div className="col-12 mb-1">
                <p
                  className="card-title form-label text-capitalize text-start fs-4 w-100"
                >
                  Address (Optional)
                </p>
                <div
                  id="addressAccordion"
                  className="accordion"
                  style={{ background: "#F5EEE4" }}
                >
                  <div
                    className="accordion-item border-0"
                    style={{ background: "#F5EEE4" }}
                  >
                    <h4 className="accordion-header border border-dark rounded">
                      <button
                        className="accordion-button p-2 collapsed rounded"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#addressCollapse"
                        style={{ background: "#F5EEE4" }}
                      >
                        Add Address
                      </button>
                    </h4>

                    <div
                      id="addressCollapse"
                      className="accordion-collapse collapse"
                      data-bs-parent="#addressAccordion"
                    >
                      <div className="accordion-body border  border-dark rounded">
                        {/* Street 1 */}
                        <label
                          htmlFor="streetAddressOne"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          Street Address 1
                        </label>
                        <input
                          type="text"
                          id="streetAddressOne"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter Street Address 1"
                          onChange={handleChange}
                          value={formValues.addresses.streetAddressOne}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />

                        {/* Street 2 */}
                        <label
                          htmlFor="streetAddressTwo"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          Street Address 2
                        </label>
                        <input
                          type="text"
                          id="streetAddressTwo"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter Street Address 2"
                          onChange={handleChange}
                          value={formValues.addresses.streetAddressTwo}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />

                        {/* City */}
                        <label
                          htmlFor="city"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter City"
                          onChange={handleChange}
                          value={formValues.addresses.city}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />

                        {/* State */}
                        <label
                          htmlFor="state"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          state
                        </label>
                        <input
                          type="text"
                          id="state"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter State"
                          onChange={handleChange}
                          value={formValues.addresses.state}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />

                        {/* zipcode */}
                        <label
                          htmlFor="zipcode"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          zipcode
                        </label>
                        <input
                          type="number"
                          id="zipcode"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter Zipcode"
                          onChange={handleChange}
                          value={formValues.addresses.zipcode}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />

                        {/* type */}
                        <label
                          htmlFor="type"
                          className="card-title form-label text-capitalize text-start fs-4 w-100"
                        >
                          Type
                        </label>
                        {/* <select className="form-select border border-dark" onChange={(e) => console.log(e)} style={{ background: "#F5EEE4" }} id='addressType'>
                          <option value={'billing'}>Billing</option>
                          <option value={'mailing'}>Mailing</option>
                          <option value={'both'}>Both</option>
                        </select> */}
                        <input
                          type="text"
                          id="type"
                          // pattern="[a-zA-Z]{1,}"
                          placeholder="Enter Type"
                          onChange={handleChange}
                          value={formValues.addresses.type}
                          style={{ background: "#F5EEE4" }}
                          className="form-control border-dark mb-2 p-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between pt-2">
                <button
                  type="button"
                  className="btn btn-outline-dark text-capitalize"
                  onClick={() => setFormValues(initialFormValues)}
                >
                  clear
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-dark text-capitalize"
                >
                  submit
                </button>
              </div>
            </form>
          </div>

          <div className="card-footer d-flex flex-wrap justify-content-end">
            <p className="card-text text-capitalize mx-1 my-0 m-lg-0">
              not new? welcome back!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
