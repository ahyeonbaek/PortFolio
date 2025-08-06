import { useState } from "react";
import logo from "../assets/image/logo.png";
import DarkMode from "../consts/DarkMode";
import { useRefContext } from "../context/useRef";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { aboutRef, projectRef, contactRef, scrollToContent } = useRefContext();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 w-full bg-white z-30">
      <div className="flex place-content-between items-center border-b-4 border-black p-5">
        <div>{/* <img src={logo} className="w-10 h-10" /> */}</div>
        <ul className="flex gap-10 items-center">
          <li className="hidden group relative sm:block ">
            <a onClick={() => scrollToContent(aboutRef)}>About</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="hidden group relative sm:block">
            <a onClick={() => scrollToContent(projectRef)}>Project</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="hidden group relative sm:block">
            <a onClick={() => scrollToContent(contactRef)}>Contact</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="sm:hidden">
            <a onClick={handleClick}>MENU</a>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed bg-white w-full p-5 sm:hidden border-b`}
      >
        <ul>
          <li className="p-5 group relative">
            <a onClick={() => scrollToContent(aboutRef)}>About</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-1000 group-hover:w-1/2"></span>
          </li>
          <li className="p-5 group relative">
            <a onClick={() => scrollToContent(projectRef)}>Project</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-1000 group-hover:w-1/2"></span>
          </li>
          <li className="p-5 group relative">
            <a onClick={() => scrollToContent(contactRef)}>Contact</a>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-1000 group-hover:w-1/2"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
