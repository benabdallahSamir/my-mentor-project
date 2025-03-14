import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import frontendMentorLogo from "../../../public/frontendMentor.webp";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="h-12 py-1 flex items-center px-3 border-b border-primary">
      <img src={frontendMentorLogo} alt="frontend mentor" className="h-4/5" />
      <p className="capitalize ml-3">myFrontendMentor</p>
      <ul className="flex mx-auto items-center">
        <li className="mr-3 rounded-md hover:border-1 border-background-dark dark:border-background-light px-3 py-1 cursor-pointer">
          about me
        </li>
        <li className="mr-3 rounded-md hover:border-1 border-background-dark dark:border-background-light px-3 py-1 cursor-pointer">
          how's samir
        </li>
        <li className="mr-3 rounded-md hover:border-1 border-background-dark dark:border-background-light px-3 py-1 cursor-pointer">
          mentor
        </li>
        <li className="mr-3 rounded-md hover:border-1 border-background-dark dark:border-background-light px-3 py-1 cursor-pointer">
          projects
        </li>
        <li className="mr-3 rounded-md hover:border-1 border-background-dark dark:border-background-light px-3 py-1 cursor-pointer">
          contacts
        </li>
      </ul>
      <button className="flex items-center w-10 h-4/5 px-3 py-1 rounded-xl cursor-pointer duration-300 border-secondary border-1 hover:bg-secondary hover:text-background-light dark:hover:text-background-dark dark:hover:bg-secondary  hover:w-44 overflow-hidden">
        <FontAwesomeIcon icon={faUser} />
        <p className="ml-4">see my portfolio</p>
      </button>
    </div>
  );
}

export default NavBar;
