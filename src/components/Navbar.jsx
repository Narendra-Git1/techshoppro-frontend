import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const { logout } =
        useContext(AuthContext);

    const token =
        localStorage.getItem("token");

    const handleLogout = () => {

        logout();

        window.location.href = "/login";
    };

    return (

        <nav className="bg-blue-600 text-white p-4">

            <div className="container mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    TechShopPro
                </h1>

                <div className="space-x-4">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    {token ? (

                        <button onClick={handleLogout}>
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