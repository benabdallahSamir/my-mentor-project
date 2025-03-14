import { Route, Routes } from "react-router-dom";
import setTheme from "./controllers/them";
import HomeContianer from "./pages/HomeContianer";
import Home from "./pages/Home";
import ThemeButton from "./pages/components/ThemeButton";

function App() {
  setTheme();
  return (
    <div className="dark:bg-background-dark dark:text-text-dark bg-background-light text-text-light min-w-screen min-h-screen h-max w-max overflow-x-hidden relative">
      <ThemeButton />
      <Routes>
        <Route path="/" element={<HomeContianer />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
