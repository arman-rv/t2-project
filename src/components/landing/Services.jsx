import TitleComponents from "./TitleComponents";
const Services = () => {
  return (
    <div className="h-[700px] w-[full] max-[650px]:h-[850px] flex flex-col justify-center items-center relative">
      <TitleComponents
        title="خدمات"
        content="آنچه به آن نیاز دارید"
        src="courses-title.png"
        className="hidden max-[650px]:flex"
      />
      <div
        className="mt-[70px] max-[1350px]:mt-[100px] [&>div]:flex [&>div]:flex-col [&>div]:justify-evenly max-[1500px]:[&>div]:w-[280px] max-[1500px]:[&>div]:h-[290px] max-[1200px]:[&>div]:w-[250px] max-[1200px]:[&>div]:h-[260px]  max-[930px]:flex-col [&>div>img]:w-full [&>div>img]:h-[48%] flex max-[550px]:flex-col max-[550px]:items-center scale-[0.01%] transition-all duration-1000 [&>div]:w-[325px] [&>div]:h-[350px] dark:[&>div>img]:brightness-90"
        id="holder"
      >
        <div>
          <img src="/images/landingService/blue.png" alt="blueImg" />
          <img src="/images/landingService/purple.png" alt="purpleImg" />
        </div>
        <div>
          <img src="/images/landingService/yellow.png" alt="yellowImg" />
          <img src="/images/landingService/red.png" alt="redImg" />
        </div>
      </div>
      <img
        src="/images/landingService/Group-159.png"
        alt="groupImg"
        className="absolute left-[-500px] bottom-[-70px] scale-[70%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[60%] max-[850px]:scale-[45%] max-[650px]:hidden"
        id="servicesWoman"
      />
      <img
        src="/images/landingService/Path-620.png"
        alt="pathImg"
        className="absolute left-[-250px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[40%] max-[850px]:scale-[30%] max-[830px]:top-[-100px] max-[850px]:left-[-265px]  max-[650px]:hidden"
        id="servicesPath"
      />
      <img
        src="/images/landingService/Group-160.png"
        alt="groupImg"
        className="absolute right-[-550px] top-[-20px] scale-[70%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[60%] max-[850px]:scale-[50%] max-[940px]:top-[-100px] max-[650px]:hidden "
        id="servicesMan"
      />
    </div>
  );
};

export default Services;
