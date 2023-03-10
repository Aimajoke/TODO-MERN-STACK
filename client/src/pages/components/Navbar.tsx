import { Link } from "react-router-dom";
import logo from '/logoTooWrite.png'

function Navbar() {
  return (
    <nav className="justify-center w-full px-4 py-2 bg-[#2A2B3D] flex flex-row h-20 lg:justify-between items-center ">
      <Link to={"/"}>
        <h1 className="font-poppins font-semibold text-3xl tracking-tight">
          <img src={logo} alt="Logo TooWrite app"  width={175}/>
        </h1>
      </Link>

      <div className="hidden lg:block font-semibold text-lg bg-gray-100 border-2 border-transparent text-zinc-800 px-5 py-2 rounded-md  hover:text-gray-100 hover:bg-[#6688FF] hover:cursor-pointer">
        <Link to={"/new"}>Crear Mensaje</Link>
      </div>

      {/* <ul>
        <Link to={'/'}>Home</Link>
      </ul> */}
    </nav>
  );
}

export default Navbar;
