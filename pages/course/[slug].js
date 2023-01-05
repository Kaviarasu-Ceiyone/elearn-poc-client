// import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState, useContext } from "react";
// import { Badge, Modal } from "antd";
// import { currencyFormatter } from "../../utils/helpers";
// import ReactPlayer from "react-player";
// import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
// import PreviewModal from "../../components/modal/PreviewModal";
// import SingleCourseLesson from "../../components/cards/SingleCourseLesson";
// import { Context } from "../../context";
// import { toast } from "react-toastify";

// const SingleCourse = ({ course }) => {
//   const router = useRouter();
//   const { slug } = router.query;

//   // state
//   const [showModal, setShowModal] = useState(false);
//   const [preview, setPreview] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [enrolled, setEnrolled] = useState({});

//   // context
//   const {
//     state: { user },
//   } = useContext(Context);

//   useEffect(() => {
//     if (user && course) checkEnrollment();
//   }, [user, course]);

//   const checkEnrollment = async () => {
//     const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
//     console.log("CHECK ENROLEMENT", data);
//     setEnrolled(data);
//   };

//   const handlePaidEnrollment = async (e) => {
//     console.log("handle paid enrollment");
//   };

//   const handleFreeEnrollment = async (e) => {
//     // console.log("handle free enrollment");
//     e.preventDefault();
//     try {
//       // check if use is logged in
//       if (!user) router.push("/login");
//       // check if already enrolled
//       if (enrolled.status)
//         return router.push(`/user/course/${enrolled.course.slug}`);

//       setLoading(true);
//       const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
//       toast(data.message);
//       setLoading(false);
//       router.push(`/user/course/${data.course.slug}`);
//     } catch (err) {
//       toast("Enrollment failed. Try again");
//       console.log(err);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}

//       <SingleCourseJumbotron
//         course={course}
//         showModal={showModal}
//         setShowModal={setShowModal}
//         preview={preview}
//         setPreview={setPreview}
//         user={user}
//         loading={loading}
//         handleFreeEnrollment={handleFreeEnrollment}
//         handlePaidEnrollment={handlePaidEnrollment}
//         enrolled={enrolled}
//         setEnrolled={setEnrolled}
//       />

//       <PreviewModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         preview={preview}
//       />

//       {course && course.lessons && (
//         <SingleCourseLesson
//           lessons={course.lessons}
//           setPreview={setPreview}
//           showModal={showModal}
//           setShowModal={setShowModal}
//         />
//       )}
//     </>
//   );
// };

// export async function getServerSideProps({ query }) {
//   const { data } = await axios.get(
//     `http://localhost:8000/api/course/${query.slug}`
//   );

//   return {
//     props: {
//       course: data,
//     },
//   };
// }

// export default SingleCourse;

import React from "react";

const SingleCourse = ({ course }) => {
  return <div>[slug]</div>;
};

export default SingleCourse;
