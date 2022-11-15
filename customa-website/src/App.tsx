import { Routes, Route, Link } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <main className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/menu" element={<Menu></Menu>} />
      </Routes>{" "}
    </main>
  );
}

export default App;
