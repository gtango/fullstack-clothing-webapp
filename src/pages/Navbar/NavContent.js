import axios from "axios";
import NavList from "./NavList";
import { useQuery } from "@tanstack/react-query";

export default function NavContent({ user }) {

  const getCart = async (name) => {
    let paramList = new URLSearchParams();
    paramList.append("username", name);
    const result = await axios.get(`${window.location.origin}/api/v1/cart`, {
      params: paramList,
    });
    return result.data;
  };

  const { data } = useQuery({
    queryKey: ["navbarCart", user],
    queryFn: () => getCart(user?.username),
    enabled: !!user,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <button
        className="navbar-toggler p-1 m-1"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarContent"
        aria-controls="offcanvas"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="navbarButton"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-start d-flex flex-lg-row flex-column text-bg-dark"
        tabIndex="-1"
        id="navbarContent"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Tango's Shop</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body container-fluid d-flex flex-column flex-lg-row py-0">
          <NavList
            id="menwomen"
            order="order-lg-first"
            section={[
              {
                id: "navMens",
                type: "menu",
                innerVal: "mens",
                classes: "nav-item position-static p-1 col-12 col-lg",
                drop: {
                  id: "navMenDrop",
                  section: "mens",
                  subtitle:
                    "Life is short. Drive fast and leave a sexy corpse. That's one of my mottos - Stanley Hudson",
                },
                categories: [
                  "all",
                  "tops",
                  "bottoms",
                  "tees",
                  "pants",
                  "shirts",
                  "shorts",
                  "hoodies",
                  "sweatpants",
                  "polos",
                  "sweaters",
                  "suits",
                  "jackets",
                  "coats",
                ],
              },
              {
                id: "navWomens",
                type: "menu",
                innerVal: "womens",
                classes: "nav-item position-static p-1 col-12 col-lg",
                drop: {
                  id: "navWomenDrop",
                  section: "womens",
                  subtitle:
                    "I generally avoid temptation unless I can't resist it - Mae West",
                },
                categories: [
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
                  "coats",
                ],
              },
            ]}
          />
          <NavList
            id="search"
            order="order-last order-lg-2"
            section={[
              {
                id: "search",
                type: "searchbar",
                classes: "nav-item  w-100",
                contentType: "search",
              },
            ]}
          />
          <NavList
            id="user"
            order=" order-first order-lg-last"
            section={[
              {
                innerVal: "",
                type: "userInfo",
                id: "navCart",
                icon: "bi bi-cart",
                classes: "nav-item text-center m-0 p-1",
                drop: {
                  id: "navCartDrop",
                  section: "Your Cart",
                  subtitle: "Add More?",
                  list: data?.cartItems?? [],
                },
              },
              {
                innerVal: "",
                type: "userInfo",
                id: "navProfile",
                icon: "bi bi-person-circle",
                classes: "nav-item text-center m-0 p-1",
                drop: {
                  id: "navProfileDrop",
                  section:
                    user !== undefined && user !== null
                      ? `welcome, ${user?.username}!`
                      : "welcome!",
                  subtitle: "",
                  list: ["profile", "login", "logout"],
                },
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
