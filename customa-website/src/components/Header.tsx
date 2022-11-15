import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="grid grid-cols-2 grid-flow-col shadow-lg">
        <div className="flex items-center justify-start p-6" >
          <p className="font-raleway font-extrabold text-sm sm:text-xl text-black">Customa</p>
        </div>
        <div className="flex items-center justify-end sm:pr-12">
          <ul className="flex sm:gap-16 text-xs sm:text-lg gap-4 pr-4">
            <Link className="font-raleway font-semibold text-black" to="/">Home</Link>
            <Link className="font-raleway font-semibold text-black" to="/cadastro">Cadastro</Link>
            <Link className="font-raleway font-semibold text-black" to="/login">Login</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
