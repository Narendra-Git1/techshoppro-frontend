import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login } =
    useContext(AuthContext);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUser(formData);

      login(response.data.token);
      alert("Login Successful");

      console.log(response.data);

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded-lg shadow-lg w-96"
      >

        <h2 className="text-2xl font-bold mb-4">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;