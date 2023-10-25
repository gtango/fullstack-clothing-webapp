import axios from "axios";

const USER_API_BASE_URL = window.location.origin + "/api/v1/products/";


async function getFilteredProducts(gender) {
  const res = await axios.get(
    USER_API_BASE_URL +
      gender +
      "/all/page=" +
      0 +
      "&items_per_page=" +
      10 +
      "/low"
  );
  return res.data;
}

async function getProductByUpc(upc) {
  const res = axios.get(USER_API_BASE_URL + "item/" + upc);
  return res.data;
}

const ProductServices = {
  getFilteredProducts,
  getProductByUpc
};

export default ProductServices();