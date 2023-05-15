import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Vans from "./components/vans/Vans";
import VanDetail from "./components/vans/VanDetail";
import "./App.css";
import "./server";
import Layout from "./components/Layout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";
import HostLayout from "./components/host/HostLayout";
import HostVans from "./components/host/HostVans";
import HostVanDetail from "./components/host/HostVanDetail";
import HostVanInfo from "./components/host/HostVanInfo";
import HostVanPricing from "./components/host/HostVanPricing";
import HostVanPhotos from "./components/host/HostVanPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
