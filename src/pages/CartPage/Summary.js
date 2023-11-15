import axios from "axios";
import React from "react";

export default function Summary({ totalPrice, items, totalItems }) {
  const filterList = (itemToPush, list, item, user) => {
    itemToPush = {
      userId: null,
      quantity: 0,
      price: 0.0,
      productUpc: null,
      productName: null,
    };

    itemToPush.userId = user;
    itemToPush.quantity = item.quantity;
    itemToPush.price = item.product.price;
    itemToPush.productUpc = item.product.upc;
    itemToPush.productName = item.product.productName;

    list.push(itemToPush);
  };

  const placeOrder = (cart, userId) => {
    let paramsList = [];
    let item = {
      userId: userId,
      quantity: 0,
      price: 0.0,
      productUpc: null,
      productName: null,
    };

    cart.map((tempItem) => filterList(item, paramsList, tempItem, userId));

    axios
      .post(
        window.location.origin + `/api/v1/order/checkout-session`,
        paramsList
      )
      .then((res) => {
        window.location.href = res.data;
      });
  };

  return (
    <div>
      <h1 className="border-bottom border-dark text-center ">Summary</h1>
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <p>subtotal:</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <p>shipping:</p>
          <p>{totalItems <= 2 ? `$5.00` : `Free`}</p>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <p>estimated tax:</p>
          <p>${(totalPrice * 0.06).toFixed(2)}</p>
        </div>
        <div className="col-12 py-2 d-flex flex-wrap border-top border-dark justify-content-between">
          <h3 className="m-0">total:</h3>
          <h3 className="m-0">
            {totalItems <= 2
              ? `$${(5.0 + totalPrice + totalPrice * 0.06).toFixed(2)}`
              : `$${(totalPrice + totalPrice * 0.06).toFixed(2)}`}
            {/* ${(totalPrice + totalPrice * 0.06).toFixed(2)}  */}
          </h3>
          <button
            type="button"
            className="btn btn-dark text-uppercase w-100"
            onClick={() =>
              placeOrder(items, JSON.parse(localStorage.getItem("user")).userId)
            }
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
