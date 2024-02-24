const Navigation = () => {
  return (
    <div
      className="w-[60px] h-[60px] brightness-[120%] rounded-full fixed right-2 bottom-2 flex justify-center items-center cursor-pointer transition-all duration-[.5s] z-10 max-[768px]:scale-90 max-[590px]:scale-75"
      style={{ opacity: 0 }}
      id="nav"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <img
        src="/images/navigation.png"
        alt="NavImage"
        className="absolute left-0 top-0"
      />
      <img
        src="/images/up.png"
        alt="UpImage"
        className="relative z-10 scale-[50%] bottom-[6px]"
      />
    </div>
  );
};

export default Navigation;
