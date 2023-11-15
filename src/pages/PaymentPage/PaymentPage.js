import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PaymentPage() {
  let { status } = useParams();

  const clearCart = () => {
    var paramsList = new URLSearchParams();
    const user = JSON.parse(localStorage.getItem("user"))?.username;
    paramsList.append("username", user);
    return axios.delete(window.location.origin + `/api/v1/cart/delete`, {
      params: paramsList,
    }).then((res) => res.data);
  };

  const { isFetching } = useQuery({
    queryKey: ["paymentStatus"],
    queryFn: () => clearCart(),
    refetchOnWindowFocus: false,
    enabled: status.localeCompare("success") === 0,
  });

  return (
    <div
      className="container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center"
      style={{ height: "90vh", background: "#F5EEE4" }}
    >
      {isFetching ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <strong className="fs-1 p-4 text-uppercase" role="status">
            Loading ...
          </strong>
          <div className="spinner-border " aria-hidden="true"></div>
        </div>
      ) : (
        <div className="text-center text-capitalize w-100">
          <h1>
            Payment{" "}
            {status.localeCompare("success") === 0
              ? "Successfully Recieved"
              : "Unsuccessful"}
          </h1>
          {status.localeCompare("success") === 0 ? (
            <>
              <p className="pb-0 mb-0">
                Well, we have your money now. You can "expect" your items
                soon...
              </p>
              <p className="pt-0 mt-0">
                Please, shop more if your heart desires!
              </p>

              <div className="row">
                <div className="col">
                  <a href="/mens" className="btn btn-dark fs-6">
                    Mens
                  </a>
                </div>
                <div className="col">
                  <a href="/" className="btn btn-dark fs-6">
                    Home
                  </a>
                </div>
                <div className="col">
                  <a href="/womens" className="btn btn-dark fs-6">
                    Womens
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="pb-0 mb-0">
                Sorry, but there was an error with your payment.
              </p>
              <a className="btn" href="/cart">
                Back to Cart
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
