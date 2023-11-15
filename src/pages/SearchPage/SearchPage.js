import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MILO from "../../assets/images/Products/BAPE_BBMILO.jpg";
import ProductFilter from "../ProductPage/ProductFilter";
import Breadcrumb from "../ProductPage/Breadcrumb";

export default function SearchPage() {
  let { item } = useParams();
  const [filterParams, setFilterParams] = useSearchParams();
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
  const page = filterParams.get("page") ?? 1;
  const perPage = filterParams.get("items_per_page") ?? 12;
  const sortby = filterParams.get("sortby") ?? "low";
  const brands = filterParams.getAll("brands") ?? [];
  const sizes = filterParams.getAll("sizes") ?? [];
  const colors = filterParams.getAll("colors") ?? [];
  const min = filterParams.getAll("min") ?? 0.0;
  const max = filterParams.getAll("max") ?? 9999.0;
  const instock = filterParams.get("instock") ?? null;

  const clearAllParams = () => {
    setFilterParams();
  };

  const getSearch = async (
    item,
    page,
    itemsPer,
    sort,
    brands,
    sizes,
    colors,
    min,
    max,
    instock
  ) => {
    let paramList = new URLSearchParams();

    if (brands !== null && brands !== undefined) {
      paramList.append("brands", brands);
    } else if (brands === null || brands === undefined) {
      console.log("empty brands");
      paramList.append("brands", []);
    }
    // console.log(item)

    if (sizes !== null && sizes !== undefined) {
      paramList.append("sizes", sizes);
    } else if (sizes === null || sizes === undefined) {
      console.log("empty sizes");
      paramList.append("sizes", []);
    }

    if (colors !== null && colors !== undefined) {
      paramList.append("colors", colors);
    } else if (colors === null || colors === undefined) {
      console.log("empty colors");
      paramList.append("colors", []);
    }

    if (min !== null && min !== undefined) {
      paramList.append("min", min);
    } else if (min === null || min === undefined) {
      paramList.append("min", 0);
    }

    if (max !== null && max !== undefined) {
      paramList.append("max", max);
    } else if (max === null || max === undefined) {
      paramList.append("max", 9999);
    }

    if (instock !== null && instock !== undefined) {
      paramList.append("instock", instock);
    } else if (instock === null || instock === undefined) {
      paramList.append("instock", true);
    }

    return axios
      .get(
        // `${window.location.origin}/api/v1/products/item_search/${item}`
        `${window.location.origin}/api/v1/products/search/${item}/${
          page ?? 0
        }/${itemsPer ?? 10}/${sort ?? "lowest"}`,
        { params: paramList }
      )
      .then((res) => res.data);
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      "searchPageQ",
      page,
      perPage,
      sortby,
      brands,
      sizes,
      colors,
      min,
      max,
      instock,
    ],
    queryFn: () =>
      getSearch(
        item,
        page - 1,
        perPage,
        sortby,
        brands,
        sizes,
        colors,
        min,
        max,
        instock
      ),
    refetchOnWindowFocus: false,
  });

  console.log(data?.content);

  return (
    <div
      className="container-fluid min-vh-100 pb-5"
      style={{ background: "#F5EEE4" }}
    >
      <div className="d-flex row justify-content-center justify-content-lg-start align-items-center border-bottom border-2 border-black px-3 pt-5 pb-0 text-lg-start text-center">
        <div className="row col-12 col-lg p-0 m-0 text-uppercase overflow-scroll">
          <h2 className="col-lg-3 col">Search</h2>
          <h2 className="col-lg-9 col">{item}</h2>
        </div>

        <div className="col-12 col-lg-5 pt-3 pb-1 pb-lg-0 pt-lg-0 d-none d-lg-block">
          <div className="row justify-content-end align-items-end text-center text-lg-end gx-5">
            <div className="col m-0">
              <div className="row">
                <p
                  className="col-12 col-lg ps-1 m-0 d-none d-lg-block"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Items Per Page{" :"}
                </p>
                <select
                  className="col bg-transparent border border-1 border-black rounded ps-0"
                  onChange={(e) => {
                    filterParams.set("items_per_page", e.target.value);
                    filterParams.delete("page");
                    setFilterParams(filterParams);
                  }}
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
            <div className="col m-0">
              <div className="row">
                <p className="col-12 col-lg ps-1 m-0 d-none d-lg-block">
                  Sort By{" :"}
                </p>
                <select
                  className="col bg-transparent border border-1 border-black rounded ps-0"
                  onChange={(e) => {
                    filterParams.set("sortby", e.target.value);
                    setFilterParams(filterParams);
                  }}
                >
                  <option value="low">Low/High</option>
                  <option value="high">High/Low</option>
                  <option value="newest">Newest</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <Breadcrumb
          history={
            ['home', 'search']
          }
        />
        <ProductFilter
          params={filterParams}
          paramfn={setFilterParams}
          clearfn={clearAllParams}
          section={"search"}
          categories={catList}
          filterSections={{
            brands: [
              "nike",
              "adidas",
              "under armour",
              "vans",
              "supreme",
              "crocs",
              "new balance",
              "air jordan",
            ],
            sizes: {
              clothes: [
                { size: "extrasmall", icon: "xs" },
                { size: "small", icon: "s" },
                { size: "medium", icon: "m" },
                { size: "large", icon: "l" },
                { size: "extralarge", icon: "xl" },
                { size: "doublelarge", icon: "xxl" },
              ],
              shoes: [
                "7",
                "7.5",
                "8",
                "8.5",
                "9",
                "9.5",
                "10",
                "10.5",
                "11",
                "11.5",
                "12",
                "12.5",
                "13",
                "13.5",
                "14",
                "14.5",
              ],
            },
            colors: [
              { name: "white", customStyle: "#fff" },
              { name: "black", customStyle: "#000" },
              { name: "red", customStyle: "#dc3545" },
              { name: "green", customStyle: "#198754" },
              { name: "blue", customStyle: "#0d6efd" },
              { name: "yellow", customStyle: "#ffc107" },
              { name: "orange", customStyle: "#fd7e14" },
              { name: "purple", customStyle: "#6f42c1" },
              {
                name: "multi",
                customStyle:
                  "linear-gradient(to right, red,orange,yellow,green,blue,indigo)",
              },
            ],
            prices: [
              { min: 0, max: 25 },
              { min: 25, max: 50 },
              { min: 50, max: 75 },
              { min: 75, max: 100 },
              { min: 100, max: 200 },
              { min: 200, max: 500 },
              { min: 500, max: 9999, fun: "Tax Refund Type" },
            ],
            instock: [
              { icon: "in-stock", state: true },
              { icon: "out-of-stock", state: false },
            ],
          }}
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
                        href={`/shop/${item.upc}`}
                        className="d-flex flex-column justify-content-center text-decoration-none text-black p-0 h-100"
                      >
                        <img
                          className="mb-auto"
                          src={item.image.url === null ? MILO : item.image.url}
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
                <div className="row mt-auto pt-4">
                  <div className="d-flex float-end">
                    <ul className="pagination pagination-sm justify-content-end align-items-center w-100 m-0">
                      <li className="page-item mx-2">
                        <button
                          className="btn p-1 border-0"
                          style={{ background: "#F5EEE4" }}
                          disabled={Number(page) - 1 < 1 ? true : false}
                          onClick={() => {
                            filterParams.set("page", Number(page) - 1);
                            setFilterParams(filterParams);
                          }}
                        >
                          &laquo;
                        </button>
                      </li>

                      <form
                        className="m-0 p-0"
                        onSubmit={(e) => {
                          e.preventDefault();
                          filterParams.set(
                            "page",
                            document.getElementById("pagesinput").value
                          );
                          setFilterParams(filterParams);
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <input
                            id="pagesinput"
                            type="number"
                            min="1"
                            max={data.totalPages}
                            placeholder={page}
                            style={{ background: "#F5EEE4" }}
                            className="col-6 border-0 text-center text-decoration-none m-1 py-0 px-3"
                          ></input>
                          <p className="col-6 border-start text-center text-black m-1 py-0 px-3">
                            {data === undefined ? 0 : ` ${data.totalPages}`}
                          </p>
                        </div>
                      </form>

                      <li className="page-item mx-2">
                        <button
                          className="btn p-1 border-0"
                          style={{ background: "#F5EEE4" }}
                          disabled={
                            Number(page) + 1 > data.totalPages ? true : false
                          }
                          onClick={() => {
                            filterParams.set("page", Number(page) + 1);
                            setFilterParams(filterParams);
                          }}
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
  );
}
