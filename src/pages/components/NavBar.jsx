import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import frontendMentorLogo from "/src/asset/frontendMentor.webp";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="h-12 py-1 flex items-center px-3 fixed top-0 z-10 w-svw">
      <img src={frontendMentorLogo} alt="frontend mentor" className="h-4/5" />
      <p className="ml-3">MyFrontendMentor</p>
      
      <button className="flex items-center ml-auto mr-3 w-10 h-4/5 px-3 py-1 rounded-xl cursor-pointer duration-300 border-secondary border-1 hover:bg-secondary hover:text-background-light dark:hover:text-background-dark dark:hover:bg-secondary  hover:w-44 overflow-hidden">
        <FontAwesomeIcon icon={faUser} />
        <p className="ml-4">see my portfolio</p>
      </button>
    </div>
  );
}

export default NavBar;
