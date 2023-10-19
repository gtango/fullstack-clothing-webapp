import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./pages/Navbar/Navbar";
import './assets/scss/styles.scss' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ViewProduct from "./pages/ProductPage/ViewProduct";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<LandingPage />} />
              <Route path=":section/:cat?" element={<ProductPage />} />
              <Route path="shop/:upc?" element={<ViewProduct/>} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
