import Logo from "./assets/logo.png";
function Header({ page }) {
  return (
    <div
      className={`w-full ${
        page === "p" ? "h-[85px]" : "h-[105px] shadow-sm"
      } border-b border-b-emerald-700 pt-3 pb-4`}
    >
      <div
        className={`${
          page === "p" ? "w-full px-1" : "w-5/6"
        } h-full m-auto flex items-center justify-between`}
      >
        <div className="flex items-center h-full">
          <img
            src={Logo}
            alt="Logo"
            className={`${
              page === "p" ? "h-[70px] w-[80px]" : "hidden sm:block"
            } sm:h-[120px] sm:w-75px`}
          />
          <div>
            <h2
              className={`text-base font-kalpurus text-emerald-700 ${
                page === "p" ? "sm:text-lg" : "sm:text-xl"
              } sm:font-bold`}
            >
              কৃষিবিদ ডঃ অমুক
            </h2>
            <p
              className={`text-xs text-amber-600 ${
                page === "p" ? "sm:text-base" : "sm:text-lg"
              } font-kalpurus sm:text-medium`}
            >
              বিসিএস (কৃষি) | বিএসসি, এজি (অনার্স) | এমএস (কৃষি রসায়ন)
            </p>
            <p
              className={`${
                page === "p" ? "" : "hidden sm:block"
              } text-xs sm:text-base font-kalpurus sm:text-medium text-emerald-700`}
            >
              ধান, আলু, গম, পাট, ফল এবং ছাদ বাগান বিষয়ে উচ্চতর প্রশিক্ষণপ্রাপ্ত
            </p>
          </div>
        </div>
        <div
          className={`${
            page === "p" ? "text-sm" : "text-sm"
          } font-kalpurus sm:text-lg font-normal`}
        >
          <h4 className=" text-green-700 sm:font-semibold">
            ফোনঃ ০১৭১X-XXXXXX
          </h4>
          <h4 className="text-green-700 sm:font-semibold">
            <a href="mailto:examplemail@xyz.com">ইমেইলঃ examplemail@xyz.com</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
