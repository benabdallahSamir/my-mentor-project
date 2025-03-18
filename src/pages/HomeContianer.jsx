import { useEffect, useState } from "react";
import mentor from "/src/asset/mentorImage.svg";
import programmer from "/src/asset/programmer.svg";
import questionImage from "/src/asset/questionImage.svg";
import fetchUserRepositories from "../controllers/github";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function Section({ children, id, className }) {
  return (
    <section
      className={`sticky top-0 bg-background-light dark:bg-background-dark h-[91vh] w-[100vw] ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}

function HomeContianer() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchUserRepositories().then((data) => {
      const projectReturn = data.slice(0, 4);
      setProjects(projectReturn);
    });
  }, []);
  function getProjects() {}
  return (
    <div>
      <NavBar />
      <div className="w-full relative">
        {/* home */}
        <Section
          className={
            "flex items-center justify-between px-[4%] max-[800px]:flex-col-reverse max-[800px]:h-max max-[800px]:my-5 max-[800px]:text-center"
          }
          id={"home"}
        >
          <aside className="w-[50vw] max-[800px]:w-[80vw]">
            <h1 className="font-bold text-3xl mb-10 text-accent">
              What's the goal of this web ???
            </h1>
            <p className="text-lg">
              This is a fully responsive and visually appealing frontend
              solution, created as part of my Frontend Mentor project. The
              design focuses on user experience, offering seamless navigation,
              clean layout, and interactive features, ensuring accessibility and
              optimal performance across devices.
            </p>
          </aside>
          <img
            src={mentor}
            className="w-[400px] max-[800px]:mb-5"
            alt="mentor image"
          />
        </Section>
        {/* samir introduction */}
        <Section
          className={
            "flex items-center justify-between px-[4%] max-[800px]:flex-col max-[800px]:h-max max-[800px]:my-5 max-[800px]:text-center"
          }
          id={"samirIntro"}
        >
          <img
            src={programmer}
            className="w-[400px] max-[800px]:mb-5"
            alt="mentor image"
          />
          <aside className="w-[50vw] max-[800px]:w-[80vw]">
            <h1 className="font-bold text-3xl mb-10 text-accent">who I am ?</h1>
            <p className="text-lg">
              My name is Samir Benabdallah, and I am a passionate full-stack
              developer with over 3 years of experience building dynamic web
              applications using the MERN stack (MongoDB, Express.js,
              React/Next/Vue/Vanilla JS, Node.js). I also have more than 4 years
              of experience in desktop application development with JavaScript
              and Java. Currently, I am a third-year Computer Science student,
              always looking to expand my knowledge and deliver high-quality,
              scalable solutions for both web and desktop applications.
            </p>
          </aside>
        </Section>
        {/* mentor introduction*/}
        <Section
          className={
            "flex items-center justify-between px-[4%] max-[800px]:flex-col-reverse max-[800px]:h-max max-[800px]:my-5 max-[800px]:text-center"
          }
          id={"mentorIntro"}
        >
          <aside className="w-[50vw] max-[800px]:w-[80vw]">
            <h1 className="font-bold text-3xl mb-10 text-accent">
              Frontend Mentor
            </h1>
            <p className="text-lg">
              Frontend Mentor is an excellent platform for developers to improve
              their front-end skills by working on real-world projects. It
              provides various challenges with detailed designs and
              requirements, allowing developers to build responsive, accessible
              websites while receiving feedback and honing their skills. Whether
              you are a beginner or experienced developer, it’s a great resource
              for learning and growth.
            </p>
          </aside>
          <img
            src={questionImage}
            className="w-[400px] max-[800px]:mb-5"
            alt="mentor image"
          />
        </Section>
        {/* projects */}
        <Section className={"flex flex-col max-[1000px]:h-max"}>
          <div
            className={"grid grid-cols-4 max-[1000px] items-center gap-2 w-full h-[300px] max-[1000px]:grid-cols-3 max-[1000px]:h-max max-[700px]:grid-cols-2 max-[400px]:grid-cols-1"}
          >
            {projects.map((ele) => (
              <Card className={"mx-auto"} informations={ele} key={ele.name} />
            ))}
          </div>
          <Link
            to={"/projects"}
            className="block mx-auto mb-5 rounded-md bg-link text-text-dark w-[300px] cursor-pointer hover:bg-link/80 duration-300 max-w-[80vw] px-4 py-1 font-semibold text-center mt-10"
          >
            show all projects
          </Link>
        </Section>
        {/* footer */}
      </div>
    </div>
  );
}

export default HomeContianer;
