const darkMode = () => {
  const changeMode = (theme, themeSrc) => {
    document.documentElement.className = theme;
    for (let i in elementImages)
      if (location.pathname == "/") elementImages[i].src = themeSrc[i];
    if (
      theme == "light" &&
      (location.pathname == "/courses" || location.pathname == "/blogs")
    ) {
      radios1.nextElementSibling.children[0].src =
        "../src/assets/images/icons/view (1).png";
      radios2.nextElementSibling.children[0].src =
        "../src/assets/images/icons/view (2).png";
      searchImg.src = "../src/assets/images/header/search.png";
      if (location.pathname == "/courses") {
        let likeCourse = document.querySelectorAll(".likeCourse");
        likeCourse.forEach(
          (e) => (e.src = "../src/assets/images/selectedCourse/likeDefault.png")
        );
        let dissLikeCourse = document.querySelectorAll(".dissLikeCourse");
        dissLikeCourse.forEach(
          (e) => (e.src = "../src/assets/images/selectedCourse/likeDefault.png")
        );
        let registeredCourse = document.querySelectorAll(".registeredCourse");
        registeredCourse.forEach(
          (e) => (e.src = "../src/assets/images/selectedCourse/likeDefault.png")
        );
      }
    } else if (
      theme == "dark" &&
      (location.pathname == "/courses" || location.pathname == "/blogs")
    ) {
      radios1.nextElementSibling.children[0].src =
        "../src/assets/images/icons/view (1)-light.png";
      radios2.nextElementSibling.children[0].src =
        "../src/assets/images/icons/view (2)-light.png";
      searchImg.src = "../src/assets/images/header/search-light.png";
      if (location.pathname == "/courses") {
        let likeCourse = document.querySelectorAll(".likeCourse");
        likeCourse.forEach(
          (e) =>
            (e.src =
              "../src/assets/images/selectedCourse/likeDefault-light.png")
        );
        let dissLikeCourse = document.querySelectorAll(".dissLikeCourse");
        dissLikeCourse.forEach(
          (e) =>
            (e.src =
              "../src/assets/images/selectedCourse/likeDefault-light.png")
        );
        let registeredCourse = document.querySelectorAll(".registeredCourse");
        registeredCourse.forEach(
          (e) =>
            (e.src =
              "../src/assets/images/selectedCourse/likeDefault-light.png")
        );
      }
    }
  };

  if (location.pathname == "/") {
    var elementImages = [
      heroSection.children[0],
      heroSectionWoman,
      servicesWoman,
      servicesMan,
      servicesPath,
      mas1,
      mas2,
      landingNewsTitle,
      reI,
      recIcon,
      recommandsPath,
    ];
    var lightSrc = [
      "/images/heroSection/bg-top.png",
      "/images/heroSection/woman.png",
      "/images/landingService/Group-159.png",
      "/images/landingService/Group-160.png",
      "/images/landingService/Path-620.png",
      "/images/landingMaster/77777.png",
      "/images/landingMaster/Path 564.png",
      "/images/Group 135.png",
      "/images/landingRec/re-i.png",
      "/images/landingRec/rec-icon.png",
      "/images/landingService/Path-620.png",
    ];
    var darktSrc = [
      "/images/heroSection/bg-top-dark.png",
      "/images/heroSection/woman-dark.png",
      "/images/landingService/Group-159-dark.png",
      "/images/landingService/Group-160-dark.png",
      "/images/landingService/Path-620-dark.png",
      "/images/landingMaster/77777-dark.png",
      "/images/landingMaster/Path 564-dark.png",
      "/images/Group 135-dark.png",
      "/images/landingRec/re-i-dark.png",
      "/images/landingRec/rec-icon-dark.png",
      "/images/landingService/Path-620-dark.png",
    ];
  }
  let loc = localStorage.getItem("theme");

  if (loc == "light") changeMode("light", lightSrc);
  else if (loc == "dark") changeMode("dark", darktSrc);
};

export default darkMode;
