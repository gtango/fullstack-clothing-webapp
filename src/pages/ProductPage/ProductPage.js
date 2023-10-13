import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MILO from "../../assets/images/Products/BAPE_BBMILO.jpg";
import ProductFilter from "./ProductFilter";
import Breadcrumb from "./Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProductPage() {
  let { section, cat } = useParams();
  const catList = [
    "all",
    "tops",
    "bottoms",
    "tees",
    "pants",
    "shirts",
    "shorts",
    "hoodies",
    "sweatpants",
    "sweaters",
    "skirts",
    "jackets",
    "dresses",
    "suits",
    "coats",
    "polos",
  ];
  const menCatOnly = ["polos", "suits"];
  const womenCatOnly = ["dresses", "skirts"];
  const [filterParams, setFilterParams] = useSearchParams();
  const page = filterParams.get("page") ?? 1;
  const perPage = filterParams.get("items_per_page") ?? 12;

  const getProducts = async (sec, cat, page, itemsPer) => {
    const result = await axios.get(
      window.location.origin +
        `/api/v1/products/${sec}/${
          cat ? cat : "all"
        }/page=${page}&items_per_page=${itemsPer}/low`
    );
    return result.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["productList", { page }],
    queryFn: () => getProducts(section, cat, page - 1, perPage),
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
    <>
      <div
        className="container-fluid min-vh-100 pb-5"
        style={{ background: "#F5EEE4" }}
      >
        <div className="row justify-content-center align-items-center border-bottom border-2 border-black px-3 pt-5 pb-0 text-lg-start text-center">
          <h1 className="col-12 col-lg p-0 m-0 text-uppercase">
            {section} {cat === undefined ? "clothing" : cat}
          </h1>

          <div className="col-12 col-lg pt-3 pb-1 pb-lg-0 pt-lg-0 d-none d-lg-block">
            <div className="row justify-content-end align-items-end text-center text-lg-end gx-5">
              <div className="col m-0">
                <div className="row">
                  <p
                    className="col-12 col-lg ps-1 m-0 d-none d-lg-block"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Items Per Page{" :"}
                  </p>
                  <select className="col bg-transparent border border-1 border-black rounded ">
                    <option value="10">12</option>
                    <option value="25">24</option>
                    <option value="50">48</option>
                  </select>
                </div>
              </div>
              <div className="col m-0">
                <div className="row">
                  <p className="col-12 col-lg ps-1 m-0 d-none d-lg-block">
                    Sort By{" :"}
                  </p>
                  <select className="col bg-transparent border border-1 border-black rounded ">
                    <option value="10">Low to High</option>
                    <option value="25">High to Low</option>
                    <option value="50">Newest</option>
                    <option value="50">A-Z</option>
                    <option value="50">Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Breadcrumb
          history={
            cat === undefined ? ["home", section] : ["home", section, cat]
          }
        />

        <div className="row text-center">
          <ProductFilter
            section={section}
            categories={
              section === "mens"
                ? catList.filter((cat) => !womenCatOnly.includes(cat))
                : catList.filter((cat) => !menCatOnly.includes(cat))
            }
          />
          <div className="col-lg-10 col-12 d-flex flex-column">
            {isLoading ? (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "60vh" }}
              >
                <strong className="fs-1 p-4 text-uppercase" role="status">
                  Getting the clothes...
                </strong>
                <div className="spinner-border " aria-hidden="true"></div>
              </div>
            ) : (
              <>
                <div className="row px-1">
                  {data?.content.length <= 0 ? (
                    <div
                      className="col d-flex flex-column align-items-center justify-content-center text-capitalize"
                      style={{ height: "65vh" }}
                    >
                      <h1 className="fs-1">We are sorry, we are all out ...</h1>
                      <p className="fs-1">&#128556;</p>
                    </div>
                  ) : (
                    data?.content.map((item, index) => (
                      <div
                        className="product btn col-6 col-md-4 p-1 text-center"
                        key={item.productId}
                      >
                        <a
                          href={section}
                          className="d-flex flex-column justify-content-center text-decoration-none text-black p-0 h-100"
                        >
                          <img
                            className="mb-auto"
                            src={
                              item.image.url === null ? MILO : item.image.url
                            }
                            alt={item.productName}
                            style={{
                              minHeight: "55vh",
                              maxHeight: "70vh",
                              objectFit: "cover",
                              objectPosition: "50% 0%",
                              width: "100%",
                              mixBlendMode: "multiply",
                            }}
                          ></img>
                          <p className="m-0">{item.productName}</p>
                          <p className="m-0">${item.price.toFixed(2)}</p>
                        </a>
                      </div>
                    ))
                  )}
                </div>
                {data?.content.length <= 0 ? (
                  <></>
                ) : (
                  <div className="row mt-auto">
                    <div className="d-flex float-end">
                      <ul className="pagination pagination-sm justify-content-end align-items-center w-100 m-0">
                        <li className="page-item mx-2">
                          <button
                            className="btn p-1 border-0"
                            style={{ background: "#F5EEE4" }}
                            disabled={Number(page) - 1 < 1 ? true : false}
                            // onClick={() => nextPage(page - 1, data.totalPages)}
                            onClick={() =>
                              setFilterParams({ page: Number(page) - 1 })
                            }
                          >
                            &laquo;
                          </button>
                        </li>

                        <div>
                          {Number(page)}/
                          {data === undefined ? 0 : data.totalPages}
                        </div>

                        <li className="page-item mx-2">
                          <button
                            className="btn p-1 border-0"
                            style={{ background: "#F5EEE4" }}
                            disabled={
                              Number(page) + 1 > data.totalPages ? true : false
                            }
                            // onClick={() => nextPage(page + 1, data.totalPages)}
                            onClick={() =>
                              setFilterParams({ page: Number(page) + 1 })
                            }
                          >
                            &raquo;
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
