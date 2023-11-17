import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import milo from "../../assets/images/Products/BAPE_BBMILO.jpg";
import PreselectedDropdown from "./PreselectedDropdown";
import Summary from "./Summary";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState();
  const queryClient = useQueryClient();
  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  const getCart = async (name) => {
    let paramList = new URLSearchParams();
    paramList.append("username", name);
    const result = await axios.get(`${window.location.origin}/api/v1/cart`, {
      params: paramList,
    });
    updateTotalPrice(result.data.totalCost);
    return result.data;
  };

  const updateCart = async (a, upc, quantity) => {
    const result = await axios.post(
      `${window.location.origin}/api/v1/cart/update`,
      {
        username: a,
        productUpc: upc,
        quantity: quantity,
      }
    );
    return result.data;
  };

  const {
    data,
    error: getCartErr,
    isError: getCartErrSignal,
    isLoading,
  } = useQuery({
    queryKey: ["navbarCart"],
    queryFn: () => getCart(JSON.parse(localStorage.getItem("user"))?.username),
    enabled: !!JSON.parse(localStorage.getItem("user"))?.username,
    refetchOnWindowFocus: false,
  });

  const {
    error: updateCartErr,
    isError: updateCartErrSignal,
    isLoading: loading,
    mutateAsync: updateTotalPriceMutation,
  } = useMutation({
    mutationFn: (values) =>
      updateCart(values.user, values.upc, values.quantity),
    onSuccess: (data) => queryClient.invalidateQueries(["navbarCart"]),
    onError: (e) => console.log(e),
  });

  const removeItem = async (user, item) => {
    const result = updateTotalPriceMutation({user: user, upc: item, quantity: 0 })
    return result
  }

  if (localStorage.length < 0) {
    return (
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="col-12 text-center">
          <h1>Oops. Sorry!</h1>
          <h3>please sign-in to start purchasing</h3>
          <h5>don't have an account? signup!</h5>
          <a className="btn" href="/login">
            Login
          </a>
          <a className="btn" href="/signup">
            signup
          </a>
        </div>
      </div>
    );
  }

  if (updateCartErrSignal || getCartErrSignal) {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ height: "90vh", background: "#F5EEE4" }}
      >
        <p className="text-capitalize">error</p>
        <p>{getCartErr?.response.status ?? updateCartErr?.response.status}</p>
        <p className="text-capitalize">
          well ... research the error and you know what happened
        </p>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ minHeight: "90vh" }}>
      {isLoading || loading ? (
        <div className="row justify-content-center align-items-center h-100">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "60vh" }}
          >
            <strong className="fs-1 p-4 text-uppercase" role="status">
              Getting your items...
            </strong>
            <div className="spinner-border " aria-hidden="true"></div>
          </div>
        </div>
      ) : (
        <div className="row gy-2 px-2 h-100">
          <div className="d-flex justify-content-between border-bottom border-dark pt-4">
            <h1 className="text-capitalize mb-0">your cart</h1>
            <h6
              className={`text-capitalize fw-lighter mt-auto mb-0 ${
                data?.cartItems.length > 0 ? "" : "d-none"
              }`}
            >
              {data?.totalItems} items
            </h6>
          </div>

          {data?.totalItems <= 2 && data?.totalItems > 0 ? (
            <p className="text-capitalize text-center">
              Purchase {3 - data?.totalItems} More Items For Free Shipping
            </p>
          ) : (
            <></>
          )}

          {data?.totalItems > 0 ? (
            <>
              <div className="col-lg-9 order-1">
                {data?.cartItems.map((item, index) => {
                  return (
                    <div
                      className="row justify-content-center align-items-center pb-2"
                      key={`${item.product.productName}${index}`}
                    >
                      <div className="col col-lg-5 py-1 text-center">
                        <img
                          src={item.imageUrl ?? milo}
                          alt={item.product.productDescription}
                          style={{
                            maxHeight: "40vh",
                            mixBlendMode: "multiply",
                          }}
                        ></img>
                      </div>

                      <div className="col col-lg-7 d-flex flex-row flex-wrap text-capitalize">
                        <div className="d-flex justify-content-between align-items-end border-bottom border-dark text-center text-sm-start w-100">
                          <h1 className="fs-5">
                            {item.product.productName}
                          </h1>
                          <h6 className="p-0 mb-1">
                            <button 
                              className="btn btn-link checkoutRemove text-decoration-none text-capitalize m-0 p-0"
                              onClick={() => removeItem(
                                JSON.parse(localStorage.getItem("user")).username,
                                item.product.upc)
                              }  
                            >
                              remove
                            </button>
                          </h6>
                        </div>

                        {/* upc */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">upc: </p>
                          <p className="m-0">{item.product.upc}</p>
                        </div>

                        {/* gender */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">gender: </p>
                          <p className="m-0">{item.product.productGender[0].gender}</p>
                          
                        </div>

                        {/* size */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">size: </p>
                          <p className="m-0">
                            {item.product.productSize[0].size}
                          </p>
                        </div>

                        {/* color */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">color: </p>
                          <p className="m-0">
                            {item.product.productColor.color}
                          </p>
                        </div>

                        {/* price */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">price: </p>
                          <p className="m-0">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* quantity */}
                        <div className="w-100 d-flex flex-wrap justify-content-between ">
                          <p className="m-0 text-uppercase">quantity: </p>
                          <PreselectedDropdown
                            pre={item.quantity}
                            upc={item.product.upc}
                            username={
                              JSON.parse(localStorage.getItem("user")).username
                            }
                            setCostFn={updateTotalPriceMutation}
                          />
                        </div>

                        {/* total */}
                        <div className="w-100 d-flex flex-wrap justify-content-between border-top border-dark">
                          <p className="m-0 text-uppercase">total: </p>
                          <p className="m-0">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="col-lg-3 border border-dark text-center text-capitalize h-100 order-last order-lg-2">
                <Summary
                  totalPrice={totalPrice}
                  items={data?.cartItems}
                  totalItems={data?.totalItems}
                />
              </div>
              {/* <button className="col btn btn-dark text-center text-capitalize order-2 order-lg-last">clear cart</button> */}
            </>
          ) : (
            <>
              <div className="d-flex flex-column justify-content-center align-items-center text-capitalize h-100">
                <p className="fs-6">
                  you have nothing to buy. go back and try harder
                </p>
                <div className="row g-2">
                  <a href="/mens" className="btn btn-dark fs-6">
                    Mens
                  </a>
                  <a href="/womens" className="btn btn-dark fs-6">
                    Womens
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
