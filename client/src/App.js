import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completion from "./pages/Completion";
import Image from "./pages/Image";
import Container from "react-bootstrap/esm/Container";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="text-completion" element={<Completion />} />
        <Route path="image-generation" element={<Image />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Container className="mt-3">
        <Outlet />
      </Container>
    </>
  );
}
