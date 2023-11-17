import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import MILO from "../../assets/images/Products/BAPE_BBMILO.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HandleError } from "../../utils/HandleError";

// const USER_API_BASE_URL = window.location.origin + "/api/v1/products/";

export default function ViewProduct() {
  let { upc } = useParams();
  const [cartStatus, setCartStatus] = useState(false);
  const updateCartStatus = (val) => {
    setCartStatus(val);
  };

  const addToCart = async ({ username, upc }) => {
    console.log(username);
    console.log(upc);
    return await axios.post(window.location.origin + `/api/v1/cart/add/`, {
      username: username,
      productUpc: upc,
      quantity: 1,
    });
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["viewitem"],
    queryFn: () => getProductByUpc(upc),
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: addToCart,
  });

  const handleAddCart = async (user, upc) => {
    try {
      await mutation.mutateAsync({ username: user, upc: upc });
      updateCartStatus(true);
    } catch {
      console.log(mutation?.error);
      console.log("we here");
      updateCartStatus(false);
    }
  };

  if (error) {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ height: "95vh", background: "#F5EEE4" }}
      >
        <p className="text-capitalize">error</p>
        <p>{error?.response?.status}</p>
        <p className="text-capitalize">what're you doing you little rascal</p>
      </div>
    );
  }

  return (
    <div
      className="container-fluid"
      style={{ background: "#F5EEE4", minHeight: "90vh" }}
    >
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center text-uppercase"
          style={{ height: "90vh" }}
        >
          <div className="modal-header w-100 d-flex flex-column justify-content-center align-items-center border-0">
            <p>Getting Item</p>
            <div className="spinner-border" aria-hidden="true"></div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center align-items-center pt-5 text-center h-100">
          <h1 className="col-12 border-bottom border-black">
            {data?.productName}
          </h1>

          <div className="col-12">
            <button
              onClick={() => window.history.back()}
              className="btn text-decoration-none bi bi-arrow-left float-start p-1"
            >
              {` Back`}
            </button>
          </div>

          <img
            className="col-lg-6 col-12"
            style={{
              maxWidth: "100%",
              minHeight: "55vh",
              maxHeight: "70vh",
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
            src={MILO}
            alt={
              data === null || data === undefined
                ? "Loading"
                : data.productDescription
            }
          ></img>

          <div className="col-6">
            <div className="row border-top border-bottom border-dark flex-column justify-content-center py-2 h-100">
              <h6 className="col-12">{data?.productDescription}</h6>
              <div className="col-12">{data?.upc}</div>
              <div className="col-12">
                Brand :{" "}
                {data?.productBrand.name.slice(0, 1).toUpperCase() +
                  data?.productBrand.name
                    .slice(1, data?.productBrand.name.length)
                    .toLowerCase()}
              </div>
              <div className="col-12">Amount Avaliable: {data?.quantity}</div>
              <div className="col-12">Price : ${data?.price.toFixed(2)}</div>
            </div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#addToCartModal"
              className="btn btn-outline-dark my-2 mx-0 w-100"
              onClick={
                () =>
                  handleAddCart(
                    JSON.parse(localStorage.getItem("user"))?.username,
                    data?.upc
                  )
                // addToCart(
                //   JSON.parse(localStorage.getItem("user"))?.username,
                //   data?.upc
                // )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <div
        className="modal fade text-center"
        id="addToCartModal"
        tabIndex={-1}
        aria-labelledby="addToCartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {mutation?.status.localeCompare("pending") === 0 ? (
              <div className="modal-header w-100 d-flex justify-content-center border-0">
                <div className="spinner-border" aria-hidden="true"></div>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h5
                    className="modal-title text-uppercase text-center"
                    id="addToCartModalLabel"
                  >
                    {cartStatus ? "SUCCESS" : "UNSUCCESSFUL"}
                  </h5>
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-capitalize">
                  {cartStatus ? (
                    <p className="m-0 pb-3">Successfully added to cart!</p>
                  ) : (
                    <>
                      <p className="m-0">there was an error adding the item.</p>
                      <p className="m-0 pb-3">
                        {mutation?.error?.response?.data?.status} -{" "}
                        {HandleError(mutation?.error?.response?.data?.status)}
                      </p>
                    </>
                  )}
                  {/* <p className="m-0 pb-3">
                    {cartStatus
                      ? "you successfully added the item!"
                      : `there was an error adding the item. ${<br/>}
                      ${mutation?.error}`
                      
                      }
                  </p> */}
                  <p className="m-0 p-0 fs-6">
                    {" "}
                    {cartStatus
                      ? 'Continue shopping by hitting the "back" button or head to your cart!'
                      : "Please try again."}
                  </p>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  {cartStatus ? (
                    <>
                      <a className="btn btn-secondary" href="/cart">
                        Cart
                      </a>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                      >
                        Back
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                      >
                        Back
                      </button>
                      <a className="btn btn-secondary" href="/login">
                        Login
                      </a>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const getProductByUpc = async (upc) => {
  const res = await axios.get(
    window.location.origin + `/api/v1/products/item/${upc}`
  );
  return res.data;
};
