import axios from "axios";

const USER_API_BASE_URL = window.location.origin + "/api/v1/products/";

export default class ProductServices{
    getFilteredProducts(gender) {
        return axios.get(USER_API_BASE_URL + gender + '/all/page=' + 0 + '&items_per_page=' + 10 + '/low').then((res) => res.data);
      }
}