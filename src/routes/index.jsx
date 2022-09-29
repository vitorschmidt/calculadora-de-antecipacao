import { Route, Routes } from "react-router-dom";
import Delay from "../pages/Delay";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tiemout from "../pages/Timeout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/delay" element={<Delay />} />
      <Route path="/timeout" element={<Tiemout />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
