import { disablePageScroll, enablePageScroll } from "scroll-lock";
import "./Header.css";
import logo from "../../../public/static/assets/logo.png";
import Button from "../Button";
import { useState } from "react";
import { Link as Li } from "react-scroll";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const navigation = [
    { id: 1, title: "Home", url: "hero", onlyMobile: false },
    { id: 2, title: "About", url: "features", onlyMobile: false },
    { id: 3, title: "Events", url: "events", onlyMobile: false },
    { id: 4, title: "Team", url: "merchandise", onlyMobile: false },
    { id: 5, title: "Videos", url: "videos", onlyMobile: false },
    { id: 6, title: "FAQ", url: "faq", onlyMobile: false },
  ];

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="block w-[12rem] xl:mr-8" to="/home">
          <img src={logo} alt="Logo" />
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Li
                key={item.id}
                to={item.url}
                aria-current="page"
                smooth={true}
                spy={true}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-colors hover:text-white hover:glitter-effect ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 cursor-pointer`}
                style={{ color: "#ffd700" }} // Default color: Gold
              >
                {item.title}
              </Li>
            ))}
          </div>
        </nav>

        <Li to="contact" smooth={true} spy={true} className="hidden lg:flex">
          <Button className="neon-button">Contact Us</Button>
        </Li>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
