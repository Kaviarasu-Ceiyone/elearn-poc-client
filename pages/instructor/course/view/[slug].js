// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import InstructorRoute from "../../../../components/routes/InstructorRoute.js";
// import axios from "axios";
// import { Avatar, Button, Modal, Tooltip, List } from "antd";
// import {
//   CheckOutlined,
//   CloseOutlined,
//   EditOutlined,
//   QuestionCircleOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
// import ReactMarkdown from "react-markdown";
// import AddLessonForm from "../../../../components/forms/AddLessonForm";
// import { toast } from "react-toastify";
// import Item from "antd/es/list/Item";
// // const Item = require("antd/es/list/Item");

// const CourseView = () => {
//   const [course, setCourse] = useState({});

//   //for lessons
//   const [visible, setVisible] = useState(false);
//   const [values, setValues] = useState({
//     title: "",
//     content: "",
//     video: {},
//   });

//   const [uploading, setUploading] = useState(false);
//   const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
//   const [progress, setProgress] = useState(0);
//   // console.log("THIS IS UPLOAD BUTTON", uploadButtonText);

//   const router = useRouter();
//   const { slug } = router.query;
//   console.log(router);

//   useEffect(() => {
//     loadCourse();
//   }, [slug]);

//   const loadCourse = async () => {
//     const { data } = await axios.get(`/api/course/${slug}`);
//     setCourse(data);
//   };

//   // Functions to Add Lesson
//   const handleAddLesson = async (e) => {
//     e.preventDefault();
//     // console.log(values);

//     try {
//       const { data } = await axios.post(
//         `/api/course/lesson/${slug}/${course.instructor._id}`,
//         values
//       );
//       // console.log(data);
//       setValues({ ...values, title: "", content: "", video: {} });
//       setProgress(0);
//       setUploadButtonText("Upload video");
//       setVisible(false);
//       setCourse(data);
//       toast("Lesson added");
//     } catch (err) {
//       console.log(err);
//       toast("Lesson add failed");
//     }
//   };

//   const handleVideo = async (e) => {
//     // console.log("THIS IS COURSE", course);

//     try {
//       console.log("THIS IS FILE NAME", event.target.files[0]);
//       let file = event.target.files[0];
//       setUploadButtonText(file.name);

//       setUploading(true);

//       const videoData = new FormData();
//       videoData.append("video", file);
//       // save progress bar and send video as from data to backend
//       const { data } = await axios.post(
//         `/api/course/video-upload/${course.instructor._id}`,
//         videoData,
//         {
//           onUploadProgress: (e) => {
//             setProgress(Math.round((100 * e.loaded) / e.total));
//           },
//         }
//       );
//       // once response is received
//       console.log(data);
//       setValues({ ...values, video: data });
//       setUploading(false);
//     } catch (err) {
//       console.log(err);
//       setUploading(false);
//       toast("Video upload failed");
//     }
//   };

//   const handleVideoRemove = async () => {
//     // console.log("Handle Remove Video");
//     try {
//       setUploading(true);
//       const { data } = await axios.post(
//         `/api/course/video-remove/${course.instructor._id}`,
//         values.video
//       );
//       console.log(data);
//       setValues({ ...values, video: {} });
//       setUploading(false);
//       setUploadButtonText("Upload Another Video");
//     } catch (err) {
//       console.log(err);
//       setUploading(false);
//       toast("Video remove failed");
//     }
//   };

//   const handlePublish = async (e, courseId) => {
//     try {
//       let answer = window.confirm(
//         "Once you publish your course, it will be live in the marketplace for users to enroll"
//       );
//       if (!answer) return;

//       const { data } = await axios.put(`/api/course/publish/${courseId}`);
//       setCourse(data);
//       toast("Your course is now live!");
//     } catch (err) {
//       toast("Course publish failed. Try again");
//       console.log(err);
//     }
//   };

//   const handleUnpublish = async (e, courseId) => {
//     try {
//       let answer = window.confirm(
//         "Once you publish your course, it will not be available for users to enroll"
//       );
//       if (!answer) return;

//       const { data } = await axios.put(`/api/course/unpublish/${courseId}`);
//       setCourse(data);

//       toast("Your course is unpublished");
//     } catch (err) {
//       toast("Course unpublish failed. Try again");
//     }
//   };
//   return (
//     <InstructorRoute>
//       <div className="container-fluid pt-3">
//         {/* <pre> {JSON.stringify(course.lessons, null, 4)}</pre> */}
//         {course && (
//           <div className="container-fluid pt-1">
//             <div className="media pt-1">
//               <Avatar
//                 size={80}
//                 src={course.image ? course.image.Location : "/course.png"}
//               />

//               <div className="media-body pl-2">
//                 <div className="row">
//                   <div className="col">
//                     <h5 className="mt-2 text-primary">{course.name}</h5>
//                     <p style={{ marginTop: "-10px" }}>
//                       {course.lessons && course.lessons.length}
//                     </p>
//                     <p style={{ marginTop: "-15px", fontSize: "10px" }}>
//                       {course.category}
//                     </p>
//                   </div>
//                   <div className="d-flex pt-4 ">
//                     <Tooltip title="Edit" className="mr-4">
//                       <EditOutlined
//                         onClick={() => {
//                           router.push(`/instructor/course/edit/${slug}`);
//                         }}
//                         className="h5 pointer text-warning mr-4"
//                       />
//                     </Tooltip>
//                     {course.lessons && course.lessons.length < 5 ? (
//                       <Tooltip title="Min 5 lessons required to publish">
//                         <QuestionCircleOutlined className="h5 pointer text-danger" />
//                       </Tooltip>
//                     ) : course.published ? (
//                       <Tooltip title="Unpublish">
//                         <CloseOutlined
//                           onClick={(e) => handleUnpublish(e, course._id)}
//                           className="h5 pointer text-danger"
//                         />
//                       </Tooltip>
//                     ) : (
//                       <Tooltip title="Publish">
//                         <CheckOutlined
//                           onClick={(e) => handlePublish(e, course._id)}
//                           className="h5 pointer text-success"
//                         />
//                       </Tooltip>
//                     )}
//                     {/* <Tooltip title="Publish">
//                       <CheckOutlined className="h5 pointer text-danger mr-4" />
//                     </Tooltip> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="row">
//               <div className="col">
//                 <ReactMarkdown>{course.description}</ReactMarkdown>
//               </div>
//             </div>
//             <div className="row">
//               <Button
//                 onClick={() => setVisible(true)}
//                 className="col-md-6 offset-md-3 text-center"
//                 type="primayr"
//                 shapt="round"
//                 icon={<UploadOutlined />}
//                 size="large"
//               >
//                 Add Lesson
//               </Button>
//             </div>
//             <br />
//             <Modal
//               title="+ Add Lesson"
//               centered
//               visible={visible}
//               onCancel={() => setVisible(false)}
//               footer={null}
//             >
//               <AddLessonForm
//                 values={values}
//                 setValues={setValues}
//                 handleAddLesson={handleAddLesson}
//                 uploading={uploading}
//                 setUploading={setUploading}
//                 uploadButtonText={uploadButtonText}
//                 handleVideo={handleVideo}
//                 progress={progress}
//                 handleVideoRemove={handleVideoRemove}
//               />
//             </Modal>

//             <div className="row pb-5">
//               <div className="col lesson-list">
//                 <h4>
//                   {course && course.lessons && course.lessons.length} Lessons
//                 </h4>
//                 <List
//                   itemLayout="horizontal"
//                   dataSource={course && course.lessons}
//                   renderItem={(item, index) => {
//                     return (
//                       <Item>
//                         <Item.Meta
//                           avatar={<Avatar>{index + 1}</Avatar>}
//                           title={item.title}
//                         ></Item.Meta>
//                       </Item>
//                     );
//                   }}
//                 ></List>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </InstructorRoute>
//   );
// };

// export default CourseView;

import React from "react";

const CourseView = () => {
  return <div>CourseView</div>;
};

export default CourseView;
