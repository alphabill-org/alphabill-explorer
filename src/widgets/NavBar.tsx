import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconSocialDiscord } from "../shared/ui/icons";
import { AlphExplorerLogo } from "../shared/ui/assets/logo/AlphExplorerLogo";
import { ThemeSwitcher } from ".";

type Menu = {
  title: string;
  link: string;
  subItems?: Menu[];
};

const subMenu: Menu[] = [
  { title: "Docs", link: "https://docs.alphabill.org/docs/welcome" },
  { title: "Whitepaper", link: "https://alphabill.org/files/AlphaBill%20Whitepaper.pdf" }
];

const menu: Menu[] = [
  { title: "Home", link: "/" },
  {
    title: "Bills", link: "/bills", subItems: [
      { title: "Blocks", link: "/bills/blocks" },
      { title: "Transactions", link: "/bills/transactions" },
    ]
  },
  {
    title: "Tokens", link: "/tokens", subItems: [
      { title: "Blocks", link: "/tokens/blocks" },
      { title: "Transactions", link: "/tokens/transactions" },
    ]
  }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBillsOpen, setIsBillsOpen] = useState(false);
  const [isTokensOpen, setIsTokensOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const overlayClass = isOpen
    ? "fixed inset-x-0 z-50"
    : "flex flex-col";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        closeMenu();
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const closeMenuByClick = (event: MouseEvent) => {
      if (isOpen && !mobileMenuRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    }

    window.addEventListener('click', closeMenuByClick);

    return () => window.removeEventListener('click', closeMenuByClick);

  }, [isOpen]);

  return (
    <div className={overlayClass}>
      <nav className=" menu-primary">
        <div className=" container max-w-6xl mx-auto justify-end items-center hidden sm:flex space-x-4 px-4 py-1">
          {subMenu.map((item, index) => (
            <Link key={index} className="link" to={item.link}>
              {item.title}
            </Link>
          ))}
          <Link to="https://discord.com/invite/dcFURChe86">
            <IconSocialDiscord className="fill-white hover:fill-[#08e8de] transition-colors duration-300 h-[28px] w-[28px]" />
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
      <nav ref={mobileMenuRef} className={`${isOpen ? "menu-primary" : "menu-secondary"} transition-all duration-100`}>
        <div className="container max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="text-white text-xl font-semibold">
              <Link to="/">
                <AlphExplorerLogo className="w-[157px]" />
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex space-x-4">
            {menu.map((item, index) => (
              <div className="relative">
                <NavLink
                  key={index}
                  className={({ isActive }) => isActive ? "link-active" : "link"} to={item.link}
                  onMouseEnter={() => {
                    if (item.title === "Bills") {
                      setIsBillsOpen(true);
                      setIsTokensOpen(false);
                    } else if (item.title === "Tokens") {
                      setIsTokensOpen(true);
                      setIsBillsOpen(false);
                    }
                  }}
                >
                  {item.title}
                </NavLink>
                {item.subItems && ((item.title === "Bills" && isBillsOpen) || (item.title === "Tokens" && isTokensOpen)) && (
                  <div className="absolute shadow-2xl menu-secondary py-3 px-4 z-50" onMouseLeave={() => item.title === "Bills" ? setIsBillsOpen(false) : item.title === "Tokens" ? setIsTokensOpen(false) : null}>
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink key={subIndex} to={subItem.link} className={({ isActive }) => isActive ? "link-active block p-2" : "link block p-2"}>
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden flex flex-col">
            <div className="flex flex-col">
              {menu.map((item, index) => (
                <NavLink key={index} onClick={toggleMenu} className={({ isActive }) => isActive ? "link-active px-4 py-2" : "px-4 py-2 link link-mobile"} to={item.link}>
                  {item.title}
                </NavLink>
              ))}

              {subMenu.map((item, index) => (
                <Link key={index} onClick={toggleMenu} className="px-4 py-2 link link-mobile" to={item.link}>
                  {item.title}
                </Link>
              ))}

              <span className="h-[2px] bg-black bg-opacity-20 mr-4 ml-4 my-2"></span>

              <div className="flex flex-row px-4 py-2 mb-2 justify-start">
                <Link to="https://discord.com/invite/dcFURChe86">
                  <IconSocialDiscord className="fill-white hover:fill-[#08e8de] transition-colors duration-300 h-[28px] w-[28px]" />
                </Link>

                <ThemeSwitcher />
              </div>
            </div>
            <div className="left-0 right-0 top-0 bottom-0 fixed bg-black opacity-50 -z-10"></div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default NavBar;
