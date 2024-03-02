import { Link, useLocation } from "react-router-dom";
import Linkes from "../Linkes";
import raiseUp from "../../../core/utils/raiseUp.utils";
import PanelQuickAccess from "../../panel/PanelQuickAccess";

const Menu = () => {
  let location = useLocation();
  let token = localStorage.getItem("token");

  return (
    <div
      id="menu"
      className="bg-white w-[30%] h-full fixed top-0 z-[1000] hidden max-[1020px]:block transition-opacity duration-500 rounded-l-[15px]  max-[900px]:w-[40%] max-[800px]:w-[35%] shadow-[0_0_70px_#777] max-[700px]:w-[43%] max-[600px]:w-[53%] max-[450px]:w-[100%] max-[450px]:rounded-none overflow-y-auto 
      dark:bg-[#25304a] dark:shadow-[0_0_70px_#192135]"
      // #1e293b
      style={{ right: "-100%", opacity: 0 }}
    >
      <div className=" w-full h-[50px] flex items-center pl-[15px]">
        <img
          src="/images/close.svg"
          alt=""
          className=" w-[25px] h-[25px] cursor-pointer [&:hover]:drop-shadow-[0_0_1px_#5A0BA9] brightness-50 dark:brightness-100"
          id="closePic"
        />
        <img
          src="/images/logo.png"
          className="w-full h-full scale-75 max-[600px]:scale-[60%] dark:invert-[100%] dark:opacity-80 opacity-75"
        />
      </div>
      {!token && (
        <>
          <div className="w-full h-[80px] flex [&>div>a]:text-[13px] [&>div>a]:text-[#777] [&>div>img]:ml-[10px]">
            <Link
              to={"/login"}
              className="hover:bg-[#eee] h-[50%] my-auto w-[50%] flex justify-center items-center max-[600px]:[&>div]:text-[13px] dark:text-gray-100"
              onClick={() => raiseUp(undefined, "", false)}
            >
              <div>ورود</div>
              <img
                src="/images/panel/log-in.png"
                alt=""
                className="h-[20px] ml-2"
              />
            </Link>
            <Link
              to={"/register"}
              className="hover:bg-[#eee] h-[50%] my-auto w-[50%] flex justify-center items-center max-[600px]:[&>div]:text-[13px] dark:text-gray-100"
              onClick={() => raiseUp(undefined, "", false)}
            >
              <div>ثبت نام</div>
              <img
                src="/images/panel/user.png"
                alt=""
                className="h-[25px] ml-2"
              />
            </Link>
          </div>
        </>
      )}

      <div
        dir="rtl"
        className={`w-full flex flex-col [&>a]:h-[50px] [&>a]:flex [&>a]:items-center [&>a]:pr-[5px] [&>a]:text-[16px] max-[600px]:[&>a]:text-[13px] [&>a:hover]:bg-[#eee] ${
          token ? "mt-[30px]" : ""
        }`}
      >
        <Linkes
          to={"/"}
          src="header/home.png"
          imgClassName="w-[25px] h-[25px]"
          content="خانه"
          acceptedClassName="bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000] dark:to-[#25304a] dark:text-gray-100"
          ejectedClassName="bg-none text-[#888] dark:text-gray-100"
        />
        <Linkes
          to={"/courses"}
          src="header/education.png"
          imgClassName="w-[25px] h-[25px]"
          content="آموزش"
          acceptedClassName="bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000] dark:to-[#25304a] dark:text-gray-100"
          ejectedClassName="bg-none text-[#888] dark:text-gray-100"
        />
        <Linkes
          to={"/blogs"}
          src="header/services.png"
          imgClassName="w-[25px] h-[25px]"
          content="خدمات"
          acceptedClassName="bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000] dark:to-[#25304a] dark:text-gray-100"
          ejectedClassName="bg-none text-[#888] dark:text-gray-100"
        />
        <Linkes
          to={"/contact-us"}
          src="header/contact-us.png"
          imgClassName="w-[25px] h-[25px]"
          content="تماس با ما"
          acceptedClassName="bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000] dark:to-[#25304a] dark:text-gray-100"
          ejectedClassName="bg-none text-[#888] dark:text-gray-100"
        />
      </div>
      <PanelQuickAccess
        className={
          location.pathname.indexOf("/panel") !== -1
            ? "[&>a]:h-[50px] [&>a]:pr-[5px] [&>a>img]:w-[25px]"
            : "hidden"
        }
      />
    </div>
  );
};

export default Menu;
