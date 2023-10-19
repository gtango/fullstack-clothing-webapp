import { useQuery } from "@tanstack/react-query";
import React from "react";
import MILO from "../../assets/images/Products/BAPE_BBMILO.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

// const USER_API_BASE_URL = window.location.origin + "/api/v1/products/";

export default function ViewProduct() {
  let { upc } = useParams();

  console.log(window.history);

  const { data, error, loading } = useQuery({
    queryKey: ["viewitem"],
    queryFn: () => getProductByUpc(upc),
    refetchOnWindowFocus: false,
  });

  if (error) {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ height: "95vh", background: "#F5EEE4" }}
      >
        <p className="text-capitalize">error</p>
        <p>{error.response.status}</p>
        <p className="text-capitalize">what're you doing you little rascal</p>
      </div>
    );
  }

  return (
    <div
      className="container-fluid"
      style={{ background: "#F5EEE4", minHeight: "95vh" }}
    >
      {loading ? (
        <div>we loading</div>
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

          {/* <img className='col-6' style={{height:'75vh'}} src={data === null || data === undefined ? MILO : data.image} alt={data === null || data === undefined ? 'Loading' : data.productDescription}></img> */}
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
            <button className="btn btn-outline-dark my-2 mx-0 w-100">
              Add to Cart
            </button>
          </div>
          {/* <div className="col">ViewProduct</div> */}
        </div>
      )}
    </div>
  );
}

const getProductByUpc = async (upc) => {
  const res = await axios.get(
    window.location.origin + `/api/v1/products/item/${upc}`
  );
  return res.data;
};
