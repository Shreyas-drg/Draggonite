import React, { useState } from 'react';

function Certifications() {
  const certificates = [
    {
      title: "10th Marksheet",
      description: "75%",
      imgSrc: "",
      imgAlt: "Certificate",
      id: "10th",
    },
    {
      title: "12th Marksheet",
      description: "70%",
      imgSrc: "",
      imgAlt: "Certificate",
      id: "12th",
    },
    {
      title: "1st Semester Result",
      description: "7.71 SPI",
      imgSrc: "",
      imgAlt: "Marksheet sem1",
      id: "sem1",
    },
    {
      title: "2nd Semester Result",
      description: "7.71 SPI",
      imgSrc: "",
      imgAlt: "Marksheet sem2",
      id: "sem1",
    },
    {
      title: "Byte Battle Hackathon",
      description: "3rd Position overall in CSIT",
      imgSrc: "hackathon.jpg",
      imgAlt: "Hackathon Certificate",
      id: "hackathon",
    },
    {
        title: "Communication Workshop by ciri",
        description: "CSIT Campus",
        imgSrc: "#",
        imgAlt: "Communication workshop Certificate",
        id: "commworkshop-cert",
    }
    
  ];

  const [visibleImages, setVisibleImages] = useState({});

  const toggleImage = (id) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
  
    <div name="Certifications" className="min-h-screen bg-amber-200 py-10 px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-950 mb-12">Certifications</h1>

      <div className="bg-amber-200 grid gap-8 max-w-5xl mx-auto md:grid-cols-2 shadow-[0_0_20px_rgba(255,223,0,0.6),0_0_40px_rgba(255,223,0,0.5),0_0_70px_rgba(255,223,0,0.4),0_0_100px_rgba(255,223,0,0.3)]">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{cert.title}</h2>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
            <button
              onClick={() => toggleImage(cert.id)}
              className="cursor-pointer mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              {visibleImages[cert.id] ? 'Hide Certificate' : 'View Certificate'}
            </button>
            {visibleImages[cert.id] && (
              <img
                src={cert.imgSrc}
                alt={cert.imgAlt}
                className="mt-4 w-full rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;