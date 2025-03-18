import { useNavigate } from "react-router-dom";
import noImage from "/src/asset/noImage.svg";
import loadingimg from "/src/asset/loadingImg.svg";
import { useState } from "react";
function Card({ informations, className }) {
  const { image: img, name: title } = informations;
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  function goto() {
    navigate(`/projects/${title}`);
  }
  function noImageFound(e) {
    e.target.src = noImage;
  }
  function onLoadImg() {
    setLoad(true);
  }
  return (
    <div
      onClick={goto}
      className={`${className} relative w-[200px] h-[270px] cursor-pointer duration-300 p-2 rounded-md border border-accent flex flex-col`}
    >
      <div className="bg-linear-to-b text-2xl font-bold from-transparent to-gray-600 opacity-0 duration-300 hover:opacity-100 absolute top-0 left-0 w-full h-full grid place-items-center z-10 text-white rounded-md">
        see information
      </div>
      <img
        src={load ? img : loadingimg}
        onLoad={onLoadImg}
        alt="project img"
        className="w-full mb-2 rounded-md"
        onError={noImageFound}
      />
      <p className="mb-2">{title.replaceAll("-", " ")}</p>
      <div className="flex items-center mt-auto text-sm">
        <p className="px-2 py-1 rounded-sm bg-accent mr-2 text-text-dark">
          {informations.level}
        </p>
        <p className="px-2 py-1 rounded-sm bg-link text-text-dark">
          {informations.language}
        </p>
      </div>
    </div>
  );
}

export default Card;
