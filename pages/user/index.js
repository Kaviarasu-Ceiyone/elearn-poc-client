import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";

// const UserIndex = () => {
//   const {
//     state: { user },
//   } = useContext(Context);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const loadCourses = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(
//         "https://elearn-server-wqf0.onrender.com/api/user-courses"
//       );
//       console.log(data);
//       setCourses(data);
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       console.log(err);
//     }
//   };

//   return (
//     <UserRoute>
//       {loading && (
//         <SyncOutlined
//           spin
//           className="d-flex justify-content-center display-1 text-danger p-5"
//         />
//       )}
//       <h1 className="jumbotron text-center square">User Dahsboard</h1>
//       {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}

//       {/* show list of courses */}
//       {courses &&
//         courses.map((course) => (
//           <div key={course._id} className="media pt-2 pb-1">
//             <Avatar
//               size={80}
//               shape="square"
//               src={course.image ? course.image.Location : "/course.png"}
//             />

//             <div className="media-body pl-2">
//               <div className="row">
//                 <div className="col">
//                   <Link
//                     href={`/user/course/${course.slug}`}
//                     className="pointer"
//                   >
//                     <h5 className="mt-2 text-primary">{course.name}</h5>
//                   </Link>
//                   <p style={{ marginTop: "-10px" }}>
//                     {course.lessons.length} Lessons
//                   </p>
//                   <p
//                     className="text-muted"
//                     style={{ marginTop: "-15px", fontSize: "12px" }}
//                   >
//                     By {course.instructor.name}
//                   </p>
//                 </div>
//                 <div className="col-md-3 mt-3 text-center">
//                   <Link href={`/user/course/${course.slug}`}>
//                     <PlayCircleOutlined className="h2 pointer text" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//     </UserRoute>
//   );
// };

// export default UserIndex;

import React from "react";

const UserIndex = () => {
  const [hidden, setHidden] = useState(true);

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    // const token = JSON.parse(window.localStorage.getItem("token"));
    try {
      const { data } = await axios.get(
        "https://elearn-server-wqf0.onrender.com/api/current-user"
      );
      console.log(data);
      setHidden(false);
    } catch (error) {
      console.log(error);
      setHidden(true);
    }
  };
  return (
    <>
      {!hidden && (
        <h1 className="jubmotron text-center square">
          <pre>{JSON.stringify(user)}</pre>
        </h1>
      )}
    </>
  );
};

export default UserIndex;
