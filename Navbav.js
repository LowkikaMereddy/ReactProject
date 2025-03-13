import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">E-Commerce</Link>
      <div>
        <Link to="/cart" className="mr-4">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
