import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import setTheme from "../../controllers/them";

export default function ThemeButton() {
  function clickHandler() {
    setTheme(true);
  }

  return (
    <div
      className="w-10 h-10 rounded-[50%] fixed right-2 bottom-2 z-50 "
      onClick={() => clickHandler()}
    >
      <FontAwesomeIcon
        icon={faSun}
        className="dark:opacity-100 opacity-0 absolute text-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  cursor-pointer duration-200"
      />
      <FontAwesomeIcon
        icon={faMoon}
        className="opacity-100 dark:opacity-0 absolute text-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer duration-200"
      />
    </div>
  );
}
