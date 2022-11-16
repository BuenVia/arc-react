import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from './pages/Services'
import Resources from "./pages/Resources";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}