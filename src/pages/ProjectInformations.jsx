import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchUserRepositories from "../controllers/github";
import LoadingPage from "./components/LoadingPage";

function ProjectInformations() {
  // hooks
  const [project, setProject] = useState(null);
  const { name } = useParams();

  // get project from github
  useEffect(() => {
    fetchUserRepositories().then((data) => {
      for (let pr of data) {
        if (pr.name === name) {
          setProject(pr);
          return;
        }
      }
    });
  }, []);

  if (!project) return <LoadingPage />;
  return (
    <div className="w-screen h-screen max-[1000px]:h-max flex justify-between items-center px-[5%]">
      <img
        src={project.image}
        alt="project img"
        className="w-1/2 rounded-md shadow-accent shadow-md "
      />
      <aside className="border border-accent rounded-md ml-3 w-[400px] p-3 h-max shadow-md shadow-accent ">
        <p className="text-center text-3xl capitalize">
          {project.name.replaceAll("-", " ")}
        </p>
        <div className="flex items-center justify-center my-5">
          <p className="px-3 py-1 capitalize font-[semibold] rounded bg-primary text-white mr-2">
            {project.level}
          </p>
          <p className="px-3 py-1 capitalize font-[semibold] rounded bg-secondary text-white">
            {project.language}
          </p>
        </div>
        <div className="flex items-center justify-center my-5">
          <a
            href={project.livesite}
            target="_blank"
            className="px-3 py-1 capitalize font-[semibold] rounded bg-accent text-white mr-2"
          >
            live site
          </a>
          <a
            href={project.link}
            target="_blank"
            className="px-3 py-1 capitalize font-[semibold] rounded bg-link text-white"
          >
            github repo
          </a>
        </div>
      </aside>
    </div>
  );
}

export default ProjectInformations;
