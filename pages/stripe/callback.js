import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { SyncOutlined } from "@ant-design/icons";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      axios
        .post("/api/get-account-status")
        .then((res) => {
          // console.log("CALLBACK", res);
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
          window.localStorage.setItem("user", JSON.stringify(res.data));
          window.location.href = "/instructor";
        })
        .catch((err) => {
          console.log("ERR", err);
        });
    }
  }, [user]);

  return (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-danger p-5"
    />
  );
};

export default StripeCallback;
