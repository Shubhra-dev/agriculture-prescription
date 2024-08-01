import logo from "./assets/mainLogo.png";
import { useNavigate } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

function MainHeader() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 100); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleClick(link) {
    setMobMenuOpen(false);
    navigate(`/${link}`);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div
        className={`w-full h-[65px] md:h-[88px] bg-white ${
          stickyMenu ? "fixed shadow-md top-0" : "-top-[65px] md:-top-[88px]"
        } no-print left-0 z-20 transition-top duration-500 ease-in-out font-kalpurus border border-b-green-900`}
      >
        <div className="w-full px-4 lg:px-0 lg:w-11/12 xl:w-5/6 xl:m-auto h-full m-auto flex justify-between items-center text-white">
          <div className="w-1/5 ">
            <img
              src={logo}
              alt="logo"
              className="h-[30px] md:h-[50px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="hidden text-xl font-bold md:flex w-[75%] lg:w-3/5  justify-between items-center text-green-900 leading-tight">
            <div>
              <h4
                onClick={() => navigate("/add-medicine")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                ঔষধ যোগ
              </h4>
            </div>
            <div>
              <h4
                onClick={() => navigate("/prescription")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                প্রেসক্রিপশন
              </h4>
            </div>
            <div>
              <h4
                onClick={() => navigate("/update")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                ঔষধ আপডেট
              </h4>
            </div>
            <div className="bg-green-900 text-xl text-white rounded-md">
              <button className="px-3 py-1.5">Log In</button>
            </div>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobMenuOpen(true)}
          >
            <MdOutlineMenu className="text-3xl text-green-900" />
          </div>
        </div>
      </div>
      {mobMenuOpen && (
        <div
          ref={menuRef}
          className="fixed font-kalpurus overflow-y-scroll w-3/5 sm:w-2/5 top-0 right-0 h-screen z-[100] bg-green-900"
        >
          <div className="p-3" onClick={() => setMobMenuOpen(false)}>
            <MdClose className="text-3xl text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full justify-between items-end px-6 py-4 text-xl font-bold text-white leading-tight">
            <div>
              <h4
                onClick={() => navigate("/add-medicine")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                ঔষধ যোগ
              </h4>
            </div>
            <div>
              <h4
                onClick={() => navigate("/prescription")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                প্রেসক্রিপশন
              </h4>
            </div>
            <div>
              <h4
                onClick={() => navigate("/update")}
                className="uppercase cursor-pointer tracking-wide hover:text-green-500"
              >
                ঔষধ আপডেট
              </h4>
            </div>
            <div className="bg-white text-green-900 text-xl rounded-md">
              <button className="px-3 py-1.5">Log In</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainHeader;
