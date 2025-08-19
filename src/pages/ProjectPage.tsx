import github from "@image/github.png";
import { useEffect, useState } from "react";
import { projects } from "../consts/project";
import { Modal } from "ahyeon-react-ui-kit";
import personImg from "@image/User.png";
import calendarImg from "@image/calendar.png";
import { useRefContext } from "../context/useRef";

const Project = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { projectRef } = useRefContext();

  const handleOpenModal = (index: number) => {
    setOpenIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setOpenIndex(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div ref={projectRef} className="bg-[#01013d]">
      <div className="border-b-4 border-t-2 border-black">
        <h1 className="text-[30px] p-5 bg-[#ff6b00] font-bold"></h1>
      </div>
      <div className="grid p-5 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-20 pb-20">
        <div>
          <h1 className="text-[50px] text-[#fff] p-5  font-bold border-l-[10px] border-[#ff6b00]">
            PROJECT
          </h1>
        </div>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(index)}
            className="flex flex-col border-4 border-[#ff6b00] h-full overflow-hidden cursor-pointer bg-white rounded"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full aspect-[3/2] object-cover "
            />
            <div className="p-5">
              <div className="flex items-center justify-between pb-5">
                <h1 className=" text-lg font-bold text">{project.title}</h1>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blan"
                    className="relative group"
                  >
                    <img
                      src={github}
                      className="h-[20px] md:h-[25px]"
                      alt="깃허브 로고"
                    />
                    <div className="hidden text-center absolute pt-1 pb-1 top-[20px] left-[-30px] rounded bg-[#f5f5f5] mt-2 w-[110px] text-sm group-hover:block ">
                      github 바로가기
                    </div>
                  </a>
                  <p
                    onClick={() => handleOpenModal(index)}
                    className="text-sm cursor-pointer"
                  >
                    자세히 보기
                  </p>
                </div>
              </div>
              <div className="flex gap-5 pb-2 ">
                <div className="flex rounded bg-[#f5f5f5] p-2 text-sm gap-2 justify-center items-center">
                  <img
                    src={personImg}
                    alt="사람 이모티콘"
                    className="w-[17px] h-[17px]"
                  />
                  <p>{project.personnel}</p>
                </div>
                <div className="flex rounded bg-[#f5f5f5] p-2 text-sm gap-2 justify-center items-center">
                  <img
                    src={calendarImg}
                    alt="달력 이모티콘"
                    className="w-[17px] h-[17px]"
                  />
                  <p>{project.period}</p>
                </div>
              </div>
              <div className="pt-5 border-t">
                {project.subTitle?.map((item) => (
                  <p className="text-sm">{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <div>
          <Modal
            onCloseModal={handleCloseModal}
            open={isOpen}
            className="relative z-[9999]"
          >
            <Modal.Backdrop className="z-[9998] bg-black opacity-50 fixed inset-0" />
            <Modal.Content
              className="
      fixed z-[9999] 
      top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      bg-white rounded-lg 
      w-[90%] h-[90%]
      overflow-auto p-8 shadow-lg
      sm:w-[70%]
      max-h-screen overflow-y-auto
    "
            >
              <div>
                <div className="border-b pb-5">
                  <h1 className="text-[30px] pb-2 ">
                    {projects[openIndex].title}
                  </h1>
                  <div className="flex gap-5 pb-2 ">
                    <div className="flex rounded bg-[#f5f5f5] p-2 text-sm gap-2 justify-center items-center">
                      <img
                        src={personImg}
                        alt="사람 이모티콘"
                        className="w-[17px] h-[17px]"
                      />
                      <p>{projects[openIndex].personnel}</p>
                    </div>
                    <div className="flex rounded bg-[#f5f5f5] p-2 text-sm gap-2 justify-center items-center">
                      <img
                        src={calendarImg}
                        alt="달력 이모티콘"
                        className="w-[17px] h-[17px]"
                      />
                      <p>{projects[openIndex].period}</p>
                    </div>
                  </div>
                  {projects[openIndex].subTitle?.map((item) => (
                    <p>{item}</p>
                  ))}
                  {projects[openIndex].description?.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
                <div className="pt-5 pb-5 border-b">
                  <div>
                    <p className="font-bold text-lg p-2">🛠️ 기술 스택</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[openIndex].skill.map((item) => (
                      <p className="flex rounded bg-[#f5f5f5] p-2 text-sm gap-2 justify-center items-center">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pb-5 pt-5 ">
                  <div className="">
                    <p className="font-bold text-lg p-2 pb-5">📄 주요 기능</p>
                    <div className="flex flex-wrap gap-2 pb-10">
                      {projects[openIndex].image?.map((image) => (
                        <img
                          src={image}
                          alt="eoffice 프로젝트 이미지"
                          className="w-[150px] sm:w-[200px] lg:w-[250px]"
                        />
                      ))}
                    </div>
                    {projects[openIndex].mainFunction?.map((item, index) => (
                      <div key={index} className="pb-5">
                        <h1 className="font-bold text-lg">⛳️ {item.name}</h1>

                        <p className="p-2">• {item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t ">
                    {projects[openIndex].component?.map((item, index) => (
                      <div
                        key={index}
                        className="mt-5 mb-5 border-b pb-10 bg-[#f5f5f5]"
                      >
                        <h1 className="p-10 text-lg font-bold flex justify-center">
                          📌 {item.name}
                        </h1>
                        <div className="flex justify-center">
                          <img src={item.image} alt="ReactUI gif" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {projects[openIndex].myFunction ? (
                    <div className="pt-5 pb-5">
                      <p className="font-bold text-lg p-2 pb-5">👩🏻‍💻 담당 기능</p>
                      <div>
                        {projects[openIndex].myFunction?.map((item, index) => (
                          <div key={index} className="pb-10">
                            <h1 className="font-bold text-lg rounded p-1 pl-5 bg-[#f5f5f5]">
                              {item.name}
                            </h1>
                            <div>
                              {item.description?.map((item, index) => (
                                <p key={index} className="p-2">
                                  • {item}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Modal.Content>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Project;
