import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "@/pages/AppLayout.jsx";
import Login from "@/pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound";
import CityList from "@/components/CityList.jsx";
import CountryList from "@/components/CountryList.jsx";
import City from "@/components/City.jsx";
import Form from "@/components/Form.jsx";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
