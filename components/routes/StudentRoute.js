import { useEffect, useState, useContext } from "react";
// import { Context } from "../../context";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../../context";

const StudentRoute = ({ children }) => {
  //state
  const [ok, setOk] = useState(false);

  //router
  const router = useRouter();

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const userId = user._id;
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/current-user",
        {
          headers: { UserId: userId },
        }
      );
      //   console.log(data);
      if (data.ok) setOk(true);
    } catch (error) {
      console.log(error);
      setOk(false);
      router.push("/login");
    }
  };
  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <div className="container-fluid">{children}</div>
      )}
    </>
  );
};

export default StudentRoute;
