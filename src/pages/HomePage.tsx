import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Project from "./ProjectPage";
import icon1 from "@image/homeicon1.svg";
import icon2 from "@image/homeicon2.svg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative z-10">
      <div className="sticky top-0">
        <div className="p-5 h-full">
          <div className="flex gap-5">
            <div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="w-24 h-24"
                  src={icon1}
                  alt={"homepage Icon 첫번째 이미지"}
                />
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="w-24 h-24"
                  src={icon2}
                  alt={"homepage Icon 두번째 이미지"}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="h-[200px] border-l border-black "></div>
          <h1 className="text-[50px] font-['SpoqaHanSansNeo-Regular'] pt-5 pb-5">
            Front-End Developer
          </h1>
          <h1 className="text-[50px] font-['SpoqaHanSansNeo-Regular']">
            Baek Ahyeon's Portfolio
          </h1>
        </div>
      </div>
      <div className="relative z-20 bg-white">
        <AboutPage />
        <Project />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
