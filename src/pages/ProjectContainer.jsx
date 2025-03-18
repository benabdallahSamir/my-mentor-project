import { useEffect, useState } from "react";
import projectNotFound from "../asset/projectNotFound.svg";
import loadingPage from "../asset/loadingPage.svg";
import fetchUserRepositories from "../controllers/github";
import Card from "./components/Card";
import LoadingPage from "./components/LoadingPage";

function ProjectContainer() {
  // hooks
  const [allProjects, initProjectsList] = useState([]);
  const [currLevel, setCurrLevel] = useState([]);
  const [currLanguage, setCurrLanguage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ level: [], language: [] });
  const [currProjects, setCurrProjects] = useState([]);
  function filterToggle(e, type) {
    if (type === "level") {
      if (currLevel.includes(e))
        setCurrLevel((curr) => curr.filter((ele) => ele !== e));
      else setCurrLevel((curr) => [...curr, e]);
    } else {
      if (currLanguage.includes(e))
        setCurrLanguage((curr) => curr.filter((ele) => ele !== e));
      else setCurrLanguage((curr) => [...curr, e]);
    }
  }
  // fetch data from github
  useEffect(() => {
    fetchUserRepositories().then((data) => {
      const level = new Set();
      const language = new Set();
      const projectReturn = data;
      projectReturn.forEach((ele) => {
        level.add(ele.level);
        language.add(ele.language);
      });
      setFilter({ level: Array.from(level), language: Array.from(language) });
      initProjectsList(projectReturn);
      setCurrProjects(projectReturn);
      setLoading(false);
    });
  }, []);
  // change content when use changed filter values
  useEffect(() => {
    // * if filter is reset
    if (currLanguage.length === 0 && currLevel.length === 0) {
      setCurrProjects(allProjects);
      return;
    }
    // * if user used just level in filtering
    if (currLanguage.length === 0 && currLevel.length !== 0) {
      setCurrProjects(
        allProjects.filter(({ level }) => currLevel.includes(level))
      );
      return;
    }
    // * if user uses just language in filtering
    if (currLanguage.length !== 0 && currLevel.length === 0) {
      setCurrProjects(
        allProjects.filter(({ language }) => currLanguage.includes(language))
      );
      return;
    }
    // * if user used language and level in filtering
    setCurrProjects(
      allProjects.filter(
        ({ level, language }) =>
          currLanguage.includes(language) && currLevel.includes(level)
      )
    );
  }, [currLanguage, currLevel]);
  // laoding logic
  if (loading) return <LoadingPage />;
  // page
  return (
    <div>
      {/* filtering */}
      <div className="mb-5">
        {/* leveling */}
        <div className="flex items-center justify-center h-[50px] border-b">
          {filter.level.map((ele) => (
            <p
              key={`level-${ele}`}
              onClick={() => filterToggle(ele, "level")}
              className={`text-xl px-3 py-1 mx-2 rounded-md duration-300 hover:bg-accent hover:text-text-dark cursor-pointer ${
                currLevel.includes(ele) && "bg-accent text-text-dark"
              }`}
            >
              {ele}
            </p>
          ))}
        </div>
        {/* languages */}
        <div className="flex items-center justify-center h-[50px] border-b">
          {filter.language.map((ele) => (
            <p
              key={`language-${ele}`}
              onClick={() => filterToggle(ele, "language")}
              className={`text-xl px-3 py-1 mx-2 rounded-md duration-300 hover:bg-accent hover:text-text-dark cursor-pointer ${
                currLanguage.includes(ele) && "bg-accent text-text-dark"
              }`}
            >
              {ele}
            </p>
          ))}
        </div>
      </div>
      {/* container */}

      {currProjects.length === 0 && (
        <img
          src={projectNotFound}
          alt="project not found"
          className="w-[200px] m-auto"
        />
      )}
      <div
        className={
          "grid grid-cols-4 max-[1000px] items-center gap-2 w-full h-[300px] max-[1000px]:grid-cols-3 max-[1000px]:h-max max-[700px]:grid-cols-2 max-[400px]:grid-cols-1"
        }
      >
        {currProjects.map((ele) => (
          <Card className={"mx-auto"} informations={ele} key={ele.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
