import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState, createElement, useContext } from "react";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Context } from "../../../context";

const { Item } = Menu;

const SingleCourse = () => {
  // context
  const {
    state: { user },
  } = useContext(Context);

  const [clicked, setClicked] = useState(-1);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] }); // course.lessons

  //router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const userId = user._id;
    const { data } = await axios.get(
      `https://elearn-server-wqf0.onrender.com/api/user/course/${slug}`,
      {
        headers: { UserId: userId },
      }
    );

    setCourse(data);
  };

  const markCompleted = (lesson) => {
    console.log("SEND THIS LESSON ID TO MARK AS COMPLETED");
  };

  return (
    <StudentRoute>
      {/* <h1>Course slug is: {JSON.stringify(course, null, 4)}</h1> */}
      <div className="row">
        <div className="col">
          <Button
            onClick={() => setCollapsed(!collapsed)}
            className="text-primary mt-1 btn-block mb-2"
          >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{" "}
            {!collapsed && "Lessons"}
          </Button>
          <Menu
            defaultSelectedKeys={[clicked]}
            inlineCollapsed={collapsed}
            style={{ height: "80vh", overflow: "scroll" }}
          >
            {course.lessons.map((lesson, index) => (
              <Item
                onClick={() => setClicked(index - 1)}
                key={index}
                icon={<Avatar>{index++}</Avatar>}
              >
                {lesson.title.substring(0, 30)}
              </Item>
            ))}
          </Menu>
        </div>
        <div className="col">
          {clicked != -1 ? (
            <>
              <div className="col alert-primary square">
                <b>{course.lessons[clicked].title.substring(0, 30)}</b>
                <span className="float-right pointer" onClick={markCompleted}>
                  Mark as completed
                </span>
              </div>

              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url={course.lessons[clicked].video.Location}
                  width="600px"
                  height="500px"
                  controls
                />
              </div>
              <ReactMarkdown
                source={course.lessons[clicked].content}
                className="single-post"
              />
            </>
          ) : (
            <div className="d-flex justify-content-center p-5">
              <div className="text-center p-5">
                <PlayCircleOutlined className="text-primary display-1 p-5" />
                <p className="lead">Click on the lessons to start learning</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentRoute>
  );
};

export default SingleCourse;
