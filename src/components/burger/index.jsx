import { Route, Routes } from "react-router-dom";
import HomeBanner from "./home-banner";
import HomeListCTA from "./home-list-cta";
import About from "./about";
import Order from "../order/order";

export default function Index() {
  return (
    <div>
      <main>
        <HomeBanner />
        <Routes>
          <Route path="/" element={<HomeListCTA />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
