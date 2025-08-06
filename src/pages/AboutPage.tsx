import { useRefContext } from "../context/useRef";
import me from "@image/mee.jpeg";
import git from "@image/github.png";
import velog from "@image/velog.jpg";

const AboutPage = () => {
  const { aboutRef } = useRefContext();
  return (
    <div ref={aboutRef} className="bg-[#01013d]">
      <div className="border-b-4 border-t-2 border-black">
        <h1 className="text-[30px] p-5 bg-[#ff6b00]">ABOUT</h1>
      </div>
      <div className="p-5 bg-dots bg-[#01013d] w-full min-h-[900px] sm:flex items-center justify-center ">
        <div className="flex flex-wrap lg: justify-center  items-center  rounded bg-white p-20 sm:gap-20">
          <div className="w-[400px]">
            <ul className="p-5  border rounded-[100] ">
              <div className="flex justify-center rounded pb-5">
                <img src={me} alt="프로필 사진" className="w-[200px] rounded" />
              </div>

              <li className="flex items-center gap-3 pb-3">
                <label className="min-w-[100px] whitespace-nowrap font-semibold">
                  거주지🏠 :
                </label>
                <p>충청북도 청주.</p>
              </li>
              <li className="flex items-center gap-3 pb-3">
                <label className="min-w-[100px] whitespace-nowrap font-semibold">
                  생년월일 🎂:
                </label>
                <p>2002.03.28 .</p>
              </li>
              <li className="flex gap-3 pb-3">
                <label className="min-w-[100px] whitespace-nowrap font-semibold">
                  교육 🎓:
                </label>
                <div>
                  <p>순천향대학교 사물인터넷학과 (2021.03 ~ 2025.02),</p>
                  <p>엘리스 리액트 트랙 2기 수료 (2024.09 ~ 2025. 03)</p>
                </div>
              </li>
              <li className="flex items-center gap-3 pb-3">
                <label className="min-w-[100px] whitespace-nowrap font-semibold">
                  이메일 📬:
                </label>
                <p>4641090@naver.com .</p>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-[500px] min-w-0 overflow-hidden">
            <p className="p-5 border-b rounded-[100] flex flex-wrap">
              안녕하세요. <br /> FE 개발자가 되기 위해 노력하는 백아현입니다.{" "}
              <br />
              주로 vite 환경에서 react typescript 로 작업하였습니다.
              <br />
            </p>
            <div className="mt-[20px]">
              <div className="flex flex-wrap flex-col gap-10">
                <div>
                  <h1 className="text-[30px] font-bold pb-3"> skill</h1>
                  <div>
                    <div className="pb-3">
                      <label className="border-b border-black">FE</label>
                      <ul className="flex flex-wrap gap-3 bg-[#f5f5f5] p-2">
                        <li className="">JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>ModuleCSS</li>
                        <li>Tailwind</li>
                        <li>Zustand</li>
                        <li>TanstackQuery</li>
                        <li>Zod</li>
                      </ul>
                    </div>
                    <div>
                      <label className="border-b border-black">BE</label>
                      <ul className="flex gap-3 bg-[#f5f5f5] p-2">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[30px] font-bold pb-3"> contact</h1>
                  <div className="flex gap-5">
                    <a href="https://github.com/ahyeonbaek" target="_blank">
                      <img
                        className="w-[40px] h-[40px]"
                        src={git}
                        alt="깃허브 이미지"
                      />
                    </a>
                    <a href="https://velog.io/@ahyeon2/posts" target="_blank">
                      <img
                        className="w-[40px] h-[40px]"
                        src={velog}
                        alt="벨로그 이미지"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
