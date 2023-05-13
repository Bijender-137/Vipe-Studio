import Aos from "aos";
import "./App.css";
import WipeStudio from "./components/WipeStudio";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect } from "react";
import Integer from "./components/Integer";
import Featured from "./components/Featured";
import Partner from "./components/Partner";
import ProjectManagment from "./components/ProjectManagment";
import TeamStars from "./components/TeamStars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SuccessGuide from "./components/SuccessGuide";
import MyFooter from "./components/MyFooter";
import PerformanceCheck from "./components/PerformanceCheck";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 3000,
    });
  }, []);

  return (
    <>
      <>
        <Featured />
        <Integer />
        <WipeStudio />
        <Partner />
        <ProjectManagment />
        <TeamStars />
        <SuccessGuide />
        <PerformanceCheck/>
        <MyFooter />  
      </>
    </>
  );
}

export default App;
