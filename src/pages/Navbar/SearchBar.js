import React, { useState } from "react";
import SearchBarResults from "./SearchBarResults";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const history = useNavigate();
  // const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    history(`/search/${value}`);
  };

  const getProducts = async (item) => {
    return axios
      .get(`${window.location.origin}/api/v1/products/item_search/${item}`)
      .then((res) => res.data);
  };

  const { data } = useQuery({
    queryKey: ["products", value],
    queryFn: () => getProducts(value),
    enabled: value.length !== 0,
    refetchOnWindowFocus: false,
  });

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const { data } = await axios.get(
  //                 `https://dummyjson.com/products/search?q=${value}`
  //             );

  //             setSuggestions(data.products);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };

  //     fetchData();
  // }, [value]);

  return (
    <>
      <form
        className="d-flex flex-column position-relative bg-white rounded-3 mx-2"
        onSubmit={submitHandler}
      >
        <div className="input-group">
          <button
            type="button"
            className="bi bi-search btn btn-light border text-dark"
          ></button>

          <input
            id="searchbar"
            className="form-control border-0"
            placeholder="Search"
            aria-label="Searchbar"
            type="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            onFocus={() => setHideSuggestions(false)}
            onBlur={async () => {
              setTimeout(() => {
                setHideSuggestions(true);
              }, 100);
            }}
          />
        </div>
      </form>

      <SearchBarResults items={data} flag={hideSuggestions} />
    </>
  );
}
