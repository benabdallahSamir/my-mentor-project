import { Route, Routes } from "react-router-dom";
import setTheme from "./controllers/them";
import HomeContianer from "./pages/HomeContianer";
import ThemeButton from "./pages/components/ThemeButton";
import Projects from "./pages/Projects";
import ProjectContainer from "./pages/ProjectContainer";
import ProjectInformations from "./pages/ProjectInformations";

function App() {
  setTheme();
  return (
    <div className="dark:bg-background-dark dark:text-text-dark bg-background-light text-text-light min-w-screen min-h-screen h-screen w-max overflow-x-hidden relative">
      <ThemeButton />
      <Routes>
        <Route path="/" element={<HomeContianer />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<ProjectContainer />} />
          <Route path=":name" element={<ProjectInformations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
