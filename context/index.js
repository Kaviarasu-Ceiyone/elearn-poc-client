import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// initial state
const intialState = {
  user: null,
};

// create context
const Context = createContext();

// roo reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, intialState);

  //router
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    function (response) {
      // any status code that lie within the range of 2XX cause this function to trigger
      return response;
    },
    function (error) {
      //  any status code that lie fall outside the range of 2xx cause this function to trigger
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get("https://elearn-server-wqf0.onrender.com/api/logout")
            .then((data) => {
              console.log("/401 error > logout");
              dispatch({ type: "LOGOUT" });
              window.localStorage.removeItem("user");
              router.push("/login");
            })
            .catch((err) => console.log("AXIOS INTERCEPTORS", err));
          reject(error);
        });
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        "https://elearn-server-wqf0.onrender.com/api/csrf-token"
      );
      console.log("CSRF", data);
      axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };
    getCsrfToken();
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
