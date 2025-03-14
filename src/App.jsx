import setTheme from "./controllers/them";

function App() {
  setTheme();
  return (
    <div className="dark:bg-background-dark dark:text-text-dark bg-background-light text-text-light min-w-screen min-h-screen h-max w-max overflow-x-hidden"></div>
  );
}

export default App;
