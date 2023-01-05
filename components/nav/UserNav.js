import Link from "next/link";
import { useEffect, useState } from "react";

const UserNav = () => {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    if (typeof window === "object") {
      setCurrent(window.location.pathname);
    }
  }, []);

  return (
    <div className="nav flex-column nav-pills">
      <Link
        href="/user"
        className={`nav-link ${current === "/user" && "active"}`}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default UserNav;
