import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function LogoutPage() {
  const logout = async (user, password) => {
    localStorage.clear();
    const result = await axios.get(
      `${window.location.origin}/api/v1/auth/signout`,
      { withCredentials: "true" }
    );
    return result.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["logoutKey"],
    queryFn: () => logout(),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="container-fluid d-flex justify-content-center">
      {isLoading ? (
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center"
          style={{ height: "95vh", background: "#F5EEE4" }}
        >
          <strong className="fs-1 p-4 text-uppercase" role="status">
            Logging Out...
          </strong>
          <div className="spinner-border " aria-hidden="true"></div>
        </div>
      ) : (
        <div className="d-flex flex-column flex-wrap justify-content-center align-items-center text-center"
        style={{minHeight:'90vh'}}
        >
          <h1 className="w-100">{data?.message}</h1>
          <p className="text-capitalize">well, have a good day! see you next time!</p>
          <a href='/' className="btn btn-outline-dark text-uppercase">home</a>
        </div>
      )}
    </div>
  );
}
