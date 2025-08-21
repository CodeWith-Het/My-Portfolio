import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SkillProject = () => {
  const skills = [
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      desc: "Created a project using C++ demonstrating advanced algorithms and data structures.",
      github: "https://github.com/yourname/cpp-project",
      demo: "https://yourdemo.com/cpp",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Built a dynamic web app using React and modern hooks.",
      github: "https://github.com/yourname/react-project",
      demo: "https://yourdemo.com/react",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Developed automation scripts and data analysis tools in Python.",
      github: "https://github.com/yourname/python-project",
      demo: "https://yourdemo.com/python",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      desc: "Built object-oriented applications and backend systems using Java.",
      github: "https://github.com/yourname/java-project",
      demo: "https://yourdemo.com/java",
    },
    {
      name: "HTML + CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      comboLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      desc: "Created responsive websites using modern HTML5 and CSS3.",
      github: "https://github.com/yourname/html-css-project",
      demo: "https://yourdemo.com/html-css",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      desc: "Created RESTful APIs and backend services using Node.js.",
      github: "https://github.com/yourname/node-project",
      demo: "https://yourdemo.com/node",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      desc: "Designed and implemented databases with MongoDB for scalable apps.",
      github: "https://github.com/yourname/mongo-project",
      demo: "https://yourdemo.com/mongo",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-12 text-blue-500 drop-shadow-lg tracking-wide uppercase text-center">
        Skill + Project
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="px-20"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            {/* Flip Card */}
            <div className="w-72 h-96 [perspective:1000px] mx-auto">
              <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden]">
                  {skill.name === "HTML + CSS" ? (
                    <div className="flex gap-4 mb-4">
                      <img src={skill.logo} alt="HTML Logo" className="w-12 h-12" />
                      <img src={skill.comboLogo} alt="CSS Logo" className="w-12 h-12" />
                    </div>
                  ) : (
                    <img src={skill.logo} alt={`${skill.name} Logo`} className="w-16 h-16 mb-4" />
                  )}
                  <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm">{skill.desc}</p>
                  <div className="flex gap-4 justify-center mt-4">
                    <a
                      href={skill.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={skill.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 border border-white font-semibold rounded hover:bg-blue-800 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillProject;
