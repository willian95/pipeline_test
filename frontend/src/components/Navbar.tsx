import { Link } from "react-router";

export default function Navbar() {
    return (
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li className="bg-gray-900 p-4 rounded-md">
              <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
                Inicio
              </Link>
            </li>
            <li className="bg-gray-900 p-4 rounded-md">
              <Link to="/acerca" className="text-white hover:text-gray-300 transition duration-300">
                Crear usuarios
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }