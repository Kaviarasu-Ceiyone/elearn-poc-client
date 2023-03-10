import { CheckCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import InstructorRoute from "../../components/routes/InstructorRoute";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get(
      "https://elearn-server-wqf0.onrender.com/api/instructor-courses"
    );
    setCourses(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <>
      <InstructorRoute>
        <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
        {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
        {courses &&
          courses.map((course) => {
            return (
              <>
                <div className="media pt-2">
                  <Avatar
                    size={80}
                    src={course.image ? course.image.Location : "/course.png"}
                  />

                  <div className="media-body pl-2">
                    <div className="row">
                      <div className="col">
                        <Link
                          href={`/instructor/course/view/${course.slug}`}
                          className="pointer h5 mt-2 text-primary"
                        >
                          <h5 className="pt-2">{course.name}</h5>
                        </Link>
                        <p style={{ marginTop: "-10px" }}>
                          {course.lessons.length} Lessons
                        </p>

                        {course.lessons.length < 5 ? (
                          <p style={myStyle} className="text-warning">
                            At least 5 lessons are required to publish a course
                          </p>
                        ) : course.published ? (
                          <p style={myStyle} className="text-success">
                            Your course is live in the marketplace
                          </p>
                        ) : (
                          <p style={myStyle} className="text-success">
                            Your course is ready to be published
                          </p>
                        )}
                      </div>
                      <div className="col-md-3 mt-3 text-center">
                        {course.published ? (
                          <Tooltip title="Published">
                            <CheckCircleFilled className="h5 pointer text-success" />
                          </Tooltip>
                        ) : (
                          <Tooltip title="Unpublished">
                            <CloseCircleOutlined className="h5 pointer text-warning" />
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </InstructorRoute>
    </>
  );
};

export default InstructorIndex;
