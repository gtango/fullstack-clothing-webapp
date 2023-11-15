import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./pages/Navbar/Navbar";
import "./assets/scss/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ViewProduct from "./pages/ProductPage/ViewProduct";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import LoginSuccessPage from "./pages/LoginPage/LoginSuccessPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/CartPage/CartPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<LandingPage />} />
                <Route path=":section/:cat?" element={<ProductPage />} />
                <Route path="shop/:upc?" element={<ViewProduct />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="login/success" element={<LoginSuccessPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="logout" element={<LogoutPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="search/:item" element={<SearchPage />} />
                <Route path="payment/:status" element={<PaymentPage/>}/>
              </Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </>
  );
}

export default App;
