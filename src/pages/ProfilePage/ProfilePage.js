import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState();
  const [address, setAddresses] = useState([]);

  const loadUserProfile = async (id) => {
    const result = await axios.get(
      `${window.location.origin}/api/v1/web/${id}`,
      { withCredentials: "true" }
    );
    setUser(result.data);
    setAddresses(result.data.addresses);
    return result.data;
  };

  const { error, isLoading } = useQuery({
    queryKey: ["profilePage"],
    queryFn: () =>
      loadUserProfile(JSON.parse(localStorage.getItem("user"))?.userId),
    refetchOnWindowFocus: false,
  });

  if (error !== null && !isLoading) {
    return (
      <div
        className="container-fluid d-flex justify-content-center align-items-center text-center"
        style={{ height: "90vh" }}
      >
        <div className="d-flex flex-column text-capitalize">
          <h1>error occured</h1>
          {
            user === undefined ?
            <p>stop messing around here. you need to sign in first dummy</p>
            :
            <>
                <p>
                    {error?.response?.status} {error?.response?.statusText}
                </p>
                <p>{error?.response?.data.message}</p>
            </>
          }
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      {isLoading ? (
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center"
          style={{ height: "95vh", background: "#F5EEE4" }}
        >
          <strong className="fs-1 p-4 text-uppercase" role="status">
            Getting profile...
          </strong>
          <div className="spinner-border " aria-hidden="true"></div>
        </div>
      ) : (
        <div className="row text-capitalize">
          <div className="col-12 py-5">
            <h1 className="border-bottom border-dark">
              {user?.user_name + "'s"} profile
            </h1>
          </div>

          <h3 className="text-decoration-underline">
            {user?.user_name + "'s"} info
          </h3>

          <div className="col-4 border-end">
            <h4>name</h4>
          </div>
          <div className="col-8 ">
            <h4>
              {user?.firstName} {user?.middleName} {user?.lastName}
            </h4>
          </div>

          <div className="col-4 border-end">
            <h4>Username</h4>
          </div>
          <div className="col-8">
            <h4>{user?.user_name}</h4>
          </div>

          <div className="col-4 border-end">
            <h4>Email</h4>
          </div>
          <div className="col-8">
            <h4>{user?.email}</h4>
          </div>

          <div className="col-4 border-end">
            <h4>Phone Number</h4>
          </div>

          <div className="col-8">
            <h4>
              {user?.phoneNumber.slice(0, 3)} {user?.phoneNumber.slice(3, 6)}{" "}
              {user?.phoneNumber.slice(6)}
            </h4>
          </div>

          <div className="col-4 border-end">
            <h4>Date of Birth</h4>
          </div>
          <div className="col-8">
            <h4>{user?.dob ?? "N/A"}</h4>
          </div>

          <div className="row py-4">
            <h3 className="col-12 text-capitalize text-decoration-underline">
              {user?.user_name} Addresses
            </h3>

            {address.length <= 0 ? (
              <div></div>
            ) : (
              <div className="row justify-content-ceneter">
                {address.map((addy, index) => (
                  <div className="col-lg-6 col-12" key={index}>
                    <div className="row">
                      <h4 className="m-0 py-4 text-uppercase">
                        + Address {index + 1}
                      </h4>

                      <div className="col-6 border-end">
                        <h4>Street Address 1</h4>
                      </div>
                      <div className="col-6" key={addy.id}>
                        <h4>{addy.streetAddress1}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>Street Address 2</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.streetAddress2}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>City</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.city}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>State</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.state}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>Country</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.country}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>Zipcode</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.zipcode}</h4>
                      </div>

                      <div className="col-6 border-end">
                        <h4>Type</h4>
                      </div>
                      <div className="col-6 text-capitalize">
                        <h4>{addy.type}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
