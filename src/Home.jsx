import { useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

function Home() {
  const navaigate = useNavigate();
  return (
    <div>
      <MainHeader />
      <div className="pt-[10%] flex flex-col gap-8 justify-center items-center text-center">
        <div
          onClick={() => navaigate("/add-medicine")}
          className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
        >
          ঔষধ যোগ করুন +
        </div>
        <div
          onClick={() => navaigate("/prescription")}
          className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
        >
          প্রেসক্রিপশন লিখুন !
        </div>
        <div
          onClick={() => navaigate("/update")}
          className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
        >
          ঔষধ আপডেট করুণ !
        </div>
      </div>
    </div>
  );
}

export default Home;
