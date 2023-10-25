import React from "react";
import ProductCategoryList from "./ProductCategoryList";

export default function ProductFilter({
  params,
  paramfn,
  clearfn,
  section,
  categories,
  filterSections,
}) {
  function activateFilter(id) {
    let initialElement = document.getElementById(id);
    let filterItem = document.getElementById(
      initialElement.id.replace("canvas-", "")
    );
    let splitItemArray = filterItem.id.split("-");
    let filterSection = splitItemArray[0];
    let filterValue = splitItemArray[1];
    let min = 0;
    let max = 9999.0;

    // if: deleteing filter
    // else: adding filter
    if (filterItem.classList.contains("active")) {
      filterItem.classList.remove("active");
      filterItem.classList.add("order-last");
      initialElement.classList.remove("active");
      initialElement.classList.add("order-last");

      if (filterSection.localeCompare("price") === 0) {
        params.delete("min");
        params.delete("max");
      } else {
        if (filterSection.localeCompare("instock") === 0) {
          if (filterItem.id.localeCompare("instock-true") === 0) {
            document
              .getElementById("instock-false")
              .classList.remove("disabled");
            document
              .getElementById("canvas-instock-false")
              .classList.remove("disabled");
          } else {
            document
              .getElementById("instock-true")
              .classList.remove("disabled");
            document
              .getElementById("canvas-instock-true")
              .classList.remove("disabled");
          }
        }
        params.delete(filterSection, filterValue);
      }
    } else {
      filterItem.classList.add("active");
      filterItem.classList.remove("order-last");
      initialElement.classList.add("active");
      initialElement.classList.remove("order-last");

      if (filterSection.localeCompare("price") === 0) {
        removeSimilarActiveElements(filterSection, filterItem.id);
        params.delete("min");
        params.delete("max");
        min = filterValue;
        max = splitItemArray[2];
        params.append("min", min);
        params.append("max", max);
      } else {
        if (filterSection.localeCompare("instock") === 0) {
          removeSimilarActiveElements(filterSection, filterItem.id);
          if (filterItem.id.localeCompare("instock-true") === 0) {
            document.getElementById("instock-false").classList.add("disabled");
            document
              .getElementById("canvas-instock-false")
              .classList.add("disabled");
          } else {
            document.getElementById("instock-true").classList.add("disabled");
            document
              .getElementById("canvas-instock-true")
              .classList.add("disabled");
          }
        }
        params.append(filterSection, filterValue);
      }
    }
    params.delete("page");
    paramfn(params);
  }

  function removeSimilarActiveElements(element, id) {
    let activeElements = document.querySelectorAll(".active");
    activeElements.forEach((item) => {
      if (
        item.classList.contains("active") &&
        item.id.includes(element) &&
        item.id.localeCompare(id) !== 0
      ) {
        item.classList.remove("active");
        item.classList.add("order-last");
      }
    });
  }

  function clearAllFilters(){
    clearfn()
    let activeElements = document.querySelectorAll('button.active')
    activeElements.forEach((element) => element.classList.remove('active'))
  }

  return (
    <>
      {/* Regular Filters -- Large Screen */}
      <div className="col-2 d-none d-lg-block">
        {params.size > 0 ? 
          <div className="w-100 pb-1">
            <button className="btn text-capitalize w-100" onClick={()=> clearAllFilters()}>
              clear all filters
            </button>
          </div>
        :
          <></>
        }
        <ProductCategoryList section={section} categories={categories} />

        <h6 className="text-center border-bottom border-black px-1 py-3 m-0">
          Filter By
        </h6>

        {/* Brands - Finished */}
        <div className="border-bottom border-dark py-0 px-1">
          <a
            className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
            data-bs-toggle="collapse"
            href="#brandCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="brandCollapse"
            onClick={() => console.log("brand filter")}
          >
            <p className="m-0 p-0 text-capitalize">Brand</p>
            <p className="m-0 p-0">+</p>
          </a>
          <div className="collapse" id="brandCollapse">
            <div className="d-flex flex-column">
              {filterSections.brands.map((item) => (
                <button
                  className={
                    params.getAll("brands").includes(item)
                      ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton text-capitalize active"
                      : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton text-capitalize"
                  }
                  type="button"
                  aria-pressed="false"
                  onClick={(e) => activateFilter(e.target.id)}
                  id={`brands-${item.replace(" ", "")}`}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sizes - Finished */}
        <div className="border-bottom border-dark py-0 px-1">
          <a
            className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
            data-bs-toggle="collapse"
            href="#sizeCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="sizeCollapse"
            onClick={() => console.log("size filter")}
          >
            <p className="m-0 p-0 text-capitalize">Size</p>
            <p className="m-0 p-0">+</p>
          </a>
          <div className="collapse p-2" id="sizeCollapse">
            <div className="d-flex flex-wrap justify-content-evenly">
              <p className="col-12 text-center m-0 pb-2 pb-xl-1">Shirt Size</p>
              {filterSections.sizes.clothes.map((item) => (
                <button
                  className={
                    params.getAll("sizes").includes(item.size)
                      ? "col btn btn-outline-dark text-center text-uppercase m-1 active"
                      : "col btn btn-outline-dark text-center order-last text-uppercase m-1"
                  }
                  type="button"
                  aria-pressed="false"
                  onClick={(e) => activateFilter(e.target.id)}
                  id={`sizes-${item.size}`}
                  key={item.size}
                >
                  {item.icon}
                </button>
              ))}
            </div>

            <div className="d-flex flex-wrap justify-content-evenly">
              <p className="col-12 text-center m-0 pb-2 pb-xl-1">Shoe Size</p>
              <div className="row row-cols-2 justify-content-evenly text-center g-1">
                {filterSections.sizes.shoes.map((size) => (
                  <button
                    className="col btn btn-outline-dark text-center order-last"
                    type="button"
                    aria-pressed="false"
                    onClick={() => console.log("filter press")}
                    id={`size-${size}`}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Colors - Finished */}
        <div className="border-bottom border-dark py-0 px-1">
          <a
            className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
            data-bs-toggle="collapse"
            href="#colorCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="colorCollapse"
            onClick={() => console.log("color filter")}
          >
            <p className="m-0 p-0 text-capitalize">Color</p>
            <p className="m-0 p-0">+</p>
          </a>
          <div className="collapse" id="colorCollapse">
            <div className="d-flex flex-column">
              {filterSections.colors.map((color) => (
                <button
                  className={
                    params.getAll("colors").includes(color.name)
                      ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton colorfilterbutton text-capitalize active"
                      : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton colorfilterbutton text-capitalize"
                  }
                  type="button"
                  aria-pressed="false"
                  onClick={(e) => activateFilter(e.target.id)}
                  id={`colors-${color.name}`}
                  style={{ background: color.customStyle }}
                  key={color.name}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prices - Finished */}
        <div className="border-bottom border-dark py-0 px-1">
          <a
            className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
            data-bs-toggle="collapse"
            href="#priceCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="priceCollapse"
            onClick={() => console.log("price filter")}
          >
            <p className="m-0 p-0 text-capitalize">Price</p>
            <p className="m-0 p-0">+</p>
          </a>
          <div className="collapse" id="priceCollapse">
            <div className="d-flex flex-column">
              {filterSections.prices.map((price) => (
                <button
                  className={
                    params.get("max")?.localeCompare(price.max) === 0
                      ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton active"
                      : "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton order-last"
                  }
                  type="button"
                  aria-pressed="false"
                  onClick={(e) => activateFilter(e.target.id)}
                  id={`price-${price.min}-${price.max}`}
                  key={price.max}
                >
                  {price.fun ?? `$${price.min}-$${price.max}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Instock - Finished */}
        <div className="border-bottom border-dark py-0 px-1">
          <a
            className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
            data-bs-toggle="collapse"
            href="#availableCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="availableCollapse"
            onClick={() => console.log("available filter")}
          >
            <p className="m-0 p-0 text-capitalize">avaliability</p>
            <p className="m-0 p-0">+</p>
          </a>
          <div className="collapse" id="availableCollapse">
            <div className="d-flex flex-column">
              {filterSections.instock.map((item) => (
                <button
                  className={
                    params.get("instock")?.localeCompare(item.state) === 0
                      ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton text-capitalize active"
                      : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton text-capitalize"
                  }
                  type="button"
                  aria-pressed="false"
                  onClick={(e) => activateFilter(e.target.id)}
                  id={`instock-${item.state}`}
                  key={item.icon}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Filters -- Small Screens */}
      <div className="col-12 d-lg-none p-1">
        <button
          className="btn btn-outline-dark m-0 w-100"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#filterCanvas"
        >
          Filter By
        </button>

        <div
          className="offcanvas offcanvas-end w-100 overflow-scroll"
          style={{ background: "#F5EEE4" }}
          id="filterCanvas"
        >
          <div className="offcanvas-header d-flex justify-content-end">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <ProductCategoryList section={section} categories={categories} />

          <h6 className="w-100 text-center border-bottom border-black px-1 py-3 m-0">
            Filter By
          </h6>

          {/* Canvas Brands */}
          <div className="border-bottom border-dark py-0 px-1">
            <a
              className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
              data-bs-toggle="collapse"
              href="#canvasBrandCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="canvasBrandCollapse"
              onClick={() => console.log("brand filter")}
            >
              <p className="m-0 p-0 text-capitalize">Brand</p>
              <p className="m-0 p-0">+</p>
            </a>
            <div className="collapse" id="canvasBrandCollapse">
              <div className="d-flex flex-column">
                {filterSections.brands.map((item) => (
                  <button
                    className={
                      params.getAll("brands").includes(item)
                        ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton text-capitalize active"
                        : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton text-capitalize"
                    }
                    type="button"
                    aria-pressed="false"
                    onClick={(e) => activateFilter(e.target.id)}
                    id={`canvas-brands-${item.replace(" ", "")}`}
                    key={`canvas-${item}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Sizes */}
          <div className="border-bottom border-dark py-0 px-1">
            <a
              className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
              data-bs-toggle="collapse"
              href="#canvasSizeCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="sizeCollapse"
              onClick={() => console.log("size filter")}
            >
              <p className="m-0 p-0 text-capitalize">Size</p>
              <p className="m-0 p-0">+</p>
            </a>
            <div className="collapse p-2 " id="canvasSizeCollapse">
              <div className="d-flex flex-wrap justify-content-evenly">
                <p className="col-12 text-center m-0 pb-2 pb-xl-1">
                  Shirt Size
                </p>
                <div className="row px-2 justify-content-evenly text-center">
                  {filterSections.sizes.clothes.map((item) => (
                    <button
                      className={
                        params.getAll("sizes").includes(item.size)
                          ? "col btn btn-outline-dark text-center text-uppercase m-1 active"
                          : "col btn btn-outline-dark text-center order-last text-uppercase m-1"
                      }
                      type="button"
                      aria-pressed="false"
                      onClick={(e) => activateFilter(e.target.id)}
                      id={`canvas-sizes-${item.size}`}
                      key={`canvas-${item.size}`}
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-evenly">
                <p className="col-12 text-center m-0 pb-2 pb-xl-1">Shoe Size</p>
                <div className="row row-cols-2 px-2 justify-content-evenly text-center">
                  {filterSections.sizes.shoes.map((size) => (
                    <button
                      className="col btn btn-outline-dark text-center order-last"
                      type="button"
                      aria-pressed="false"
                      onClick={() => console.log("filter press")}
                      id={`canvas-size-${size}`}
                      key={`canvas-${size}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Canvas Colors */}
          <div className="border-bottom border-dark py-0 px-1">
            <a
              className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
              data-bs-toggle="collapse"
              href="#canvasColorCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="canvasColorCollapse"
              onClick={() => console.log("color filter")}
            >
              <p className="m-0 p-0 text-capitalize">Color</p>
              <p className="m-0 p-0">+</p>
            </a>
            <div className="collapse" id="canvasColorCollapse">
              <div className="d-flex flex-column">
                {filterSections.colors.map((color) => (
                  <button
                    className={
                      params.getAll("colors").includes(color.name)
                        ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton colorfilterbutton text-capitalize active"
                        : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton colorfilterbutton text-capitalize"
                    }
                    type="button"
                    aria-pressed="false"
                    onClick={(e) => activateFilter(e.target.id)}
                    id={`canvas-colors-${color.name}`}
                    style={{ background: color.customStyle }}
                    key={`canvas-${color.name}`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Prices */}
          <div className="border-bottom border-dark py-0 px-1">
            <a
              className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
              data-bs-toggle="collapse"
              href="#canvasPriceCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="canvasPriceCollapse"
              onClick={() => console.log("price filter")}
            >
              <p className="m-0 p-0 text-capitalize">Price</p>
              <p className="m-0 p-0">+</p>
            </a>
            <div className="collapse" id="canvasPriceCollapse">
              <div className="d-flex flex-column">
                {filterSections.prices.map((price) => (
                  <button
                    className={
                      params.get("max")?.localeCompare(price.max) === 0
                        ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton active"
                        : "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton order-last"
                    }
                    type="button"
                    aria-pressed="false"
                    onClick={(e) => activateFilter(e.target.id)}
                    id={`canvas-price-${price.min}-${price.max}`}
                    key={`canvas-${price.max}`}
                  >
                    {price.fun ?? `$${price.min}-$${price.max}`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Instock */}
          <div className="border-bottom border-dark py-0 px-1">
            <a
              className="btn w-100 d-flex justify-content-between my-1 px-3 py-2"
              data-bs-toggle="collapse"
              href="#canvasInstockCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="canvasInstockCollapse"
              onClick={() => console.log("instock filter")}
            >
              <p className="m-0 p-0 text-capitalize">avaliability</p>
              <p className="m-0 p-0">+</p>
            </a>
            <div className="collapse" id="canvasInstockCollapse">
              <div className="d-flex flex-column">
                {filterSections.instock.map((item) => (
                  <button
                    className={
                      params.get("instock")?.localeCompare(item.state) === 0
                        ? "btn btn-outline-dark my-1 py-2 px-3 text-start filterbutton text-capitalize active"
                        : "btn btn-outline-dark my-1 py-2 px-3 text-start order-last filterbutton text-capitalize"
                    }
                    type="button"
                    aria-pressed="false"
                    onClick={(e) => activateFilter(e.target.id)}
                    id={`canvas-instock-${item.state}`}
                    key={`canvas-${item.icon}`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
