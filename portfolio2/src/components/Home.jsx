import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    
      <div className="flex items-center space-x-2 bg-amber-200">
        <div className="w-1/2 pl-3 pt-15 space-y-2">
          <h1 className="text-5xl pb-1">Welcome In My Feed</h1>
          <h1 className="text-3xl space-x-2 flex">
            <div>Hello, I'm a </div> 
            <div className="text-blue-600"><ReactTyped
              strings={[
                " Coder",
                " Learner",
                " Also a Singer",
                " Esports Athlete(BGMI)"
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop={true}
            /></div>
            
          </h1>
          <p className="text-justify text-xl pt-4">
            Iam currently studying Computer Science Engginering as a Student at Chhattrapati Shivaji Institute Of Technology.
            Well iam a 2nd Year Student,and i love Building creative websites.I know some Programming Languages such as C,C++,JAVA,JAVASCRIPT,PYTHON(Only basics of it).
            Currently iam having a strong hold on java and javascript.I have also learned HTML and CSS till now.
            Iam learning Indian-Classical music at the same time because i love music a lot.Also iam an (tier 3)Esports Athlete of the most famous game in India called Battlegrounds Mobile India.
            But unfornately i have to leave that game now due to device issues. And currently i know basics of react.js (not fully mastered).
          </p>
          <br/>
          <div className="space-y-4">
            <h1 className="font-semibold text-xl">Available at:</h1>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/shreyas-bakshi-30133330a/" target="_blank">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/shreyasbakshi1/" target="_blank">
                <FaInstagramSquare size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-end pr-5">
          <img className="w-120 h-120  shadow-[0_0_15px_rgba(255,0,0,0.3),0_0_30px_rgba(255,0,0,0.2),0_0_50px_rgba(255,0,0,0.15)] rounded-full object-cover" src="/Ghibli.jpg" alt="" />
        </div>
      </div>

    </>
  );
}

export default Home;