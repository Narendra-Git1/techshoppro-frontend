import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {

    const { logout } = useContext(AuthContext);

    const { cartItems } = useCart();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        logout();

        window.location.href = "/login";
    };

    return (

        <nav className="bg-blue-600 text-white p-4">

            <div className="container mx-auto flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    TechShopPro
                </Link>

                <div className="space-x-4">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/cart">
                        Cart ({cartItems.length})
                    </Link>

                    {token ? (

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-3 py-1 rounded"
                        >
                            Logout
                        </button>

                    ) : (

                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </>

                    )}

                </div>

            </div>

        </nav>

    );
}

export default Navbar;