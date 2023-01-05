import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../components/cards/CourseCard";

// * Function for Server render course for SEO

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:8000/api/courses`);

  console.log(process.env.courses);
  return {
    props: {
      courses: data,
    },
  };
}

const Index = () => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };

  //   fetchCourses();
  // }, []);

  const courses = [
    {
      _id: "63a04d6d6b36f1a9c3c377ba",
      name: "React Course",
      slug: "react-course",
      description: "Description",
      price: 9.99,
      image: {
        ETag: '"da6947ec70151c458f5fdac94cce7cd7"',
        Location:
          "https://ceiyone-elearn.s3.amazonaws.com/nsmZr7QDasHa2ZwyVyhZr.jpeg",
        key: "nsmZr7QDasHa2ZwyVyhZr.jpeg",
        Key: "nsmZr7QDasHa2ZwyVyhZr.jpeg",
        Bucket: "ceiyone-elearn",
      },
      category: "React",
      published: true,
      paid: true,
      instructor: {
        _id: "6398346ebc77d7429eb49e02",
      },
      lessons: [
        {
          title: "Lesson 1",
          slug: "lesson-1",
          content: "Description",
          free_preview: true,
          _id: "63ac679adcae72483ad07a07",
          createdAt: "2022-12-28T15:58:18.229Z",
          updatedAt: "2022-12-28T16:00:18.900Z",
          video: {
            ETag: '"5c31d513e48b136a676e2f46e012785c"',
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/7Gx66dvqcSt1b4GO8fd2S.mp4",
            key: "7Gx66dvqcSt1b4GO8fd2S.mp4",
            Key: "7Gx66dvqcSt1b4GO8fd2S.mp4",
            Bucket: "ceiyone-elearn",
          },
        },
        {
          title: "Lesson 2",
          slug: "lesson-2",
          content: "Description",
          free_preview: false,
          _id: "63ac67a9dcae72483ad07a0b",
          createdAt: "2022-12-28T15:58:33.596Z",
          updatedAt: "2022-12-28T15:58:33.596Z",
        },
        {
          title: "Lesson 3",
          slug: "lesson-3",
          content: "Description",
          free_preview: false,
          _id: "63ac67b3dcae72483ad07a10",
          createdAt: "2022-12-28T15:58:43.653Z",
          updatedAt: "2022-12-28T15:58:43.653Z",
        },
        {
          title: "Lesson 4",
          slug: "lesson-4",
          content: "Description",
          free_preview: false,
          _id: "63ac67bfdcae72483ad07a16",
          createdAt: "2022-12-28T15:58:55.230Z",
          updatedAt: "2022-12-28T15:58:55.230Z",
        },
        {
          title: "Lesson 5",
          slug: "lesson-5",
          content: "Description",
          free_preview: false,
          _id: "63ac67c8dcae72483ad07a1d",
          createdAt: "2022-12-28T15:59:04.612Z",
          updatedAt: "2022-12-28T15:59:04.612Z",
        },
        {
          title: "Lesson 6",
          slug: "lesson-6",
          content: "",
          free_preview: false,
          _id: "63b273e9aa61405a7ba33f1e",
          createdAt: "2023-01-02T06:04:25.190Z",
          updatedAt: "2023-01-02T06:04:25.190Z",
        },
        {
          title: "Lesson 7",
          slug: "lesson-7",
          content: "Dews",
          video: {
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/CNho2coZLh7mlZccvTagg.x-ms-wmv",
            Bucket: "ceiyone-elearn",
            Key: "CNho2coZLh7mlZccvTagg.x-ms-wmv",
            ETag: '"5e5dfa2b2e34f2b0f255248e31842c42-15"',
          },
          free_preview: false,
          _id: "63b27423aa61405a7ba33f27",
          createdAt: "2023-01-02T06:05:23.729Z",
          updatedAt: "2023-01-02T06:05:23.729Z",
        },
        {
          title: "Hello 8",
          slug: "hello-8",
          content: "Hello",
          video: {
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/hXTspwhMJ-c08oyKFVLzS.mp4",
            Bucket: "ceiyone-elearn",
            Key: "hXTspwhMJ-c08oyKFVLzS.mp4",
            ETag: '"05a66853524334164ec492cd29a66673-65"',
          },
          free_preview: false,
          _id: "63b27e62aa61405a7ba33fd4",
          createdAt: "2023-01-02T06:49:06.198Z",
          updatedAt: "2023-01-02T06:49:06.198Z",
        },
      ],
      createdAt: "2022-12-19T11:39:25.125Z",
      updatedAt: "2023-01-02T06:49:06.198Z",
      __v: 0,
    },
    {
      _id: "63a057671c8c1af9fdac1a9a",
      name: "React For Beginners",
      slug: "react-for-beginners",
      description: "Description",
      price: 0,
      image: {
        ETag: '"115a6e383e88b004ee9ee501c839fd37"',
        Location:
          "https://ceiyone-elearn.s3.amazonaws.com/-3duunIHE--LR8voi5qY2.jpeg",
        key: "-3duunIHE--LR8voi5qY2.jpeg",
        Key: "-3duunIHE--LR8voi5qY2.jpeg",
        Bucket: "ceiyone-elearn",
      },
      category: "React",
      published: true,
      paid: false,
      instructor: {
        _id: "6398346ebc77d7429eb49e02",
      },
      lessons: [
        {
          title: "First Lesson 1",
          slug: "first-lesson",
          content: "First Lesson Description",
          video: {
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/EFerpNfgNnvcspbiC0RI0.mp4",
            Bucket: "ceiyone-elearn",
            Key: "EFerpNfgNnvcspbiC0RI0.mp4",
            ETag: '"f81cb836bef9f7fb4d37d95b73889309-57"',
          },
          free_preview: true,
          _id: "63a3f1072f4b96274816e631",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2023-01-03T06:12:06.229Z",
        },
        {
          title: "Second Lesson",
          slug: "second-lesson",
          free_preview: false,
          _id: "63a3ff262f4b96274816e72d",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2023-01-03T07:23:19.487Z",
          content: "With Video",
          video: {
            ETag: '"5c31d513e48b136a676e2f46e012785c"',
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/j3ZpIIdLrmcU9EXgHP7kz.mp4",
            key: "j3ZpIIdLrmcU9EXgHP7kz.mp4",
            Key: "j3ZpIIdLrmcU9EXgHP7kz.mp4",
            Bucket: "ceiyone-elearn",
          },
        },
        {
          title: "Third Lesson 3",
          slug: "third-lesson",
          content: "Hello From Third Lesson",
          free_preview: false,
          _id: "63a400e6015099ebfa86165c",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2023-01-03T07:24:12.580Z",
          video: {
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/E3HgClEegnES28J51e9de.mp4",
            Bucket: "ceiyone-elearn",
            Key: "E3HgClEegnES28J51e9de.mp4",
            ETag: '"7c3de9ff1f41f5a77f226ce73cf91246-5"',
          },
        },
        {
          title: "Fourth Lesson",
          slug: "fourth-lesson",
          content: "Lesson Description",
          free_preview: false,
          _id: "63a539e9ec346e690290fb23",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2022-12-28T08:21:09.840Z",
        },
        {
          title: "Fifth Lesson",
          slug: "fifth-lesson",
          content: "Lesson Description",
          free_preview: false,
          _id: "63a54945ec346e690290fc0a",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2022-12-28T08:21:09.840Z",
        },
        {
          title: "Sixth Lesson",
          slug: "sixth-lesson",
          content: "Lesson Description",
          free_preview: true,
          _id: "63a59f8df859f6a35c40d729",
          createdAt: "2022-12-28T08:21:09.840Z",
          updatedAt: "2022-12-28T08:21:09.840Z",
        },
        {
          title: "Seventh Lesson",
          slug: "seventh-lesson",
          content: "Des",
          video: {
            ETag: '"5c31d513e48b136a676e2f46e012785c"',
            Location:
              "https://ceiyone-elearn.s3.amazonaws.com/ywuTyPsPjrBBXf8s66OOj.mp4",
            key: "ywuTyPsPjrBBXf8s66OOj.mp4",
            Key: "ywuTyPsPjrBBXf8s66OOj.mp4",
            Bucket: "ceiyone-elearn",
          },
          free_preview: false,
          _id: "63ad7abd8c99f79e89ffacf4",
          createdAt: "2022-12-29T11:32:13.786Z",
          updatedAt: "2022-12-29T11:32:13.786Z",
        },
      ],
      createdAt: "2022-12-19T12:21:59.246Z",
      updatedAt: "2023-01-03T07:24:12.580Z",
      __v: 0,
    },
  ];

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Online Education Platform
      </h1>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
