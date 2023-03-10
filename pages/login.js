import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const [cookies, setCookie] = useCookies(["token"]);

  // state
  const { state, dispatch } = useContext(Context);

  //router
  const router = useRouter();

  useEffect(() => {
    if (state.user !== null) {
      router.push("/");
    }
  }, [state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const response = await axios.post(
        `https://elearn-server-wqf0.onrender.com/api/login`,
        {
          email,
          password,
        }
      );

      const { data } = response;

      console.log(data[0]);

      // setCookie("token", "abc123", { path: "/" });

      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data[0]));
      window.localStorage.setItem("token", JSON.stringify(data[1]));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="jubotron text-center bg-primary square">Login</div>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="btn btn-block btn-primary"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center pt-3">
          Not yet Regitered? <Link href="/register">Register</Link>
        </p>

        <p className="text-center ">
          <Link href="/forgot-password" className="text-danger">
            Forgot Password
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
