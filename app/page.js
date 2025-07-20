'use client';
import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';

const Page = () => {
  const [activeSec, setActiveSec] = useState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#3B82F6'); 
  const [name, setName] = useState('Nancy Aggarwal');
  const [head, setHead] = useState('Software Engineer');
  const [contact, setContact] = useState(['(123) 456-7890', 'nancy.agg87@example.com', 'github.com/nancy.agg94']);
  const [summary, setSummary] = useState('Results-driven software engineer with 5+ years of experience in full-stack development. Specialized in JavaScript frameworks and cloud technologies. Passionate about creating efficient, scalable solutions that drive business growth.');
  const [PE, setPE] = useState(summary);
  const [experiences, setExperiences] = useState([
    {
      designation: 'Senior Software Engineer',
      company: 'Digital Innovations LLC',
      year: '2022 - 2025',
      location: 'Austin, TX',
      bullets: ['Led a team of 5 developers to deliver a SaaS product with 50,000+ active users', 'Led a team of 5 developers to deliver a SaaS product with 50,000+ active users'],
    },
  ])
  const [education, setEducation] = useState([
    {degree: 'Master of Computer Science', city: 'Stanford University', marks: '3.8/4.0'},
    {degree: 'Bachelor of Computer Science',city: 'Delhi',marks: '90%'}
  ])
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "CSS"]);
  const [bullets, setBullets] = useState(['Led a team of 5 developers to deliver a SaaS product with 50,000+ active users', 'educed API response time by 40% through optimization techniques', 'Implemented CI/CD pipeline reducing deployment time by 60%']); 
  const [showIcons, setShowIcons] = useState(false);
  const [certificates, setCertificates] = useState(['AWS Certified Solutions Architect - Associate', 'Google Cloud Professional Developer', 'Scrum Master Certification']);
  const [projects, setProjects] = useState([{title:'E-commerce Platform', description:'Full-stack e-commerce solution with payment integration', technologies:'React, Node.js, MongoDB, Stripe API'}]);
  const textareaRef1 = useRef(null);
  const textareaRef2 = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handleColorChange = (color) => setSelectedColor(color);

  const fontMap = {
    Roboto: "'Roboto', sans-serif",
    'Open Sans': "'Open Sans', sans-serif",
    Lato: "'Lato', sans-serif",
    Arial: 'Arial, sans-serif',
    Calibri: 'Calibri, sans-serif',
    'Times New Roman': "'Times New Roman', serif",
  };
  const [selectedFont, setSelectedFont] = useState('Roboto');

  return (
    <div className="flex flex-col md:flex-row bg-[#0C1222] min-h-screen" style={{ fontFamily: fontMap[selectedFont] }}>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onColorChange={handleColorChange}
      />
      <div className={`transition-all duration-300 ease-in-out transform text-black flex-1 w-full px-4 py-6 md:px-10 max-w-screen-lg mx-auto overflow-x-hidden`} style={{ fontFamily: fontMap[selectedFont] }}>
        <div className='text-center justify-center mt-2'>
          <textarea
            ref={textareaRef1}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-3xl md:text-4xl font-bold text-center text-white border-none resize-none w-full h-auto overflow-hidden bg-transparent"
            style={{ whiteSpace: 'pre-wrap', lineHeight: '1.2' }}
          />
          <textarea
            ref={textareaRef2}
            value={head}
            onChange={(e) => setHead(e.target.value)}
            className="text-xl md:text-2xl font-bold text-center border-none resize-none w-full h-auto overflow-hidden bg-transparent"
            style={{ whiteSpace: 'pre-wrap', lineHeight: '1.3', color: selectedColor, fontFamily: selectedFont }}
          />
          <div className='flex flex-wrap justify-center gap-2 md:gap-4 mt-2'>
            {contact.map((item, index) => (
              <input
                key={index}
                value={item}
                onChange={(e) => {
                  const updated = [...contact];
                  updated[index] = e.target.value;
                  setContact(updated);
                }}
                className='text-sm md:text-lg text-gray-500 resize-none bg-transparent border-b border-gray-600 focus:outline-none'
              />
            ))}
          </div>
        </div>
        <div style={{fontFamily: fontMap[selectedFont] }}>
  <h2 className='text-lg md:text-xl text-white font-semibold w-full md:w-[40%] mt-4'>Professional Summary</h2>
  <div className='mt-1 h-[2px] w-[100px] md:w-[220px]' style={{background: selectedColor}}></div>
  <textarea
    wrap='soft'
    value={PE}
    onChange={(e) => {
      setPE(e.target.value);
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }}
    rows={3}
    className="w-full text-white text-sm md:text-base p-2 rounded resize-none whitespace-pre-wrap bg-transparent border border-gray-600 focus:outline-none mt-2"
    style={{height: 'auto', overflow: 'hidden'}}
  />
</div>
<div className='mt-4 w-full' style={{ fontFamily: fontMap[selectedFont] }}>
  <h2 className='text-lg md:text-xl text-white font-semibold mt-2'>Professional Experience</h2>
  <div className='w-[120px] md:w-[220px] h-[2px] mt-1' style={{ background: selectedColor }}></div>

  {experiences.map((exp, expIndex) => (
    <div key={expIndex} className='mt-4 text-white'>
      {/* Title Row */}
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-full'>
          <textarea
            value={exp.designation}
            onChange={(e) => {
              const updated = [...experiences];
              updated[expIndex].designation = e.target.value;
              setExperiences(updated);
            }}
            className='text-sm font-semibold text-gray-300 resize-none h-auto bg-transparent'
          />
          <textarea
            value={exp.company}
            onChange={(e) => {
              const updated = [...experiences];
              updated[expIndex].company = e.target.value;
              setExperiences(updated);
            }}
            className='text-sm text-gray-200 resize-none h-auto bg-transparent'
          />
          <textarea
            value={exp.year}
            onChange={(e) => {
              const updated = [...experiences];
              updated[expIndex].year = e.target.value;
              setExperiences(updated);
            }}
            className='text-sm text-gray-300 resize-none h-auto bg-transparent'
          />
          <textarea
            value={exp.location}
            onChange={(e) => {
              const updated = [...experiences];
              updated[expIndex].location = e.target.value;
              setExperiences(updated);
            }}
            className='text-sm text-gray-200 resize-none h-auto bg-transparent'
          />
        </div>
      </div>

      {/* Bullet Points */}
      <div className='mt-2 space-y-2'>
        {exp.bullets.map((bullet, bulletIndex) => (
          <div key={bulletIndex} className='flex items-start gap-2 group' onClick={() => setActiveSec('experiences')}>
            <span className='text-white pt-[2px]'>•</span>
            <textarea
              value={bullet}
              onChange={(e) => {
                const updated = [...experiences];
                updated[expIndex].bullets[bulletIndex] = e.target.value;
                setExperiences(updated);
              }}
              className='w-full resize-none bg-transparent text-white text-sm'
              style={{ minHeight: '1.5em', whiteSpace: 'pre-wrap' }}
            />
            {activeSec === 'experiences' && (
              <button
                onClick={() => {
                  const updated = [...experiences];
                  updated[expIndex].bullets.splice(bulletIndex, 1);
                  setExperiences(updated);
                }}
                className='text-gray-400 hover:text-white'
              >
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  ))}

  <button
    onClick={() => {
      setExperiences([
        ...experiences,
        {
          designation: 'New Position',
          company: 'Company Name',
          year: 'YYYY - YYYY',
          location: 'City, State',
          bullets: ['New responsibility']
        }
      ]);
    }}
    className='mt-4 text-sm text-blue-400 hover:text-blue-200'
  >
    ➕ Add Experience
  </button>
</div>
<div style={{ fontFamily: fontMap[selectedFont] }}>
  <h2 className='text-lg md:text-xl text-white font-semibold mt-4'>Education</h2>
  <div className='w-[100px] md:w-[120px] h-[2px] mt-1' style={{ background: selectedColor }}></div>
  
  {education.map((edu, eduIndex) => (
    <div key={eduIndex} className='mt-4 text-white' onClick={() => setActiveSec('education')}>
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
          <textarea
            value={edu.degree}
            onChange={(e) => {
              const updated = [...education];
              updated[eduIndex].degree = e.target.value;
              setEducation(updated);
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className='text-sm font-semibold text-gray-300 resize-none bg-transparent'
          />
          <textarea
            value={edu.city}
            onChange={(e) => {
              const updated = [...education];
              updated[eduIndex].city = e.target.value;
              setEducation(updated);
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className='text-sm text-gray-200 resize-none bg-transparent'
          />
          <textarea
            value={edu.marks}
            onChange={(e) => {
              const updated = [...education];
              updated[eduIndex].marks = e.target.value;
              setEducation(updated);
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className='text-sm text-gray-300 resize-none bg-transparent'
          />
        </div>
        {activeSec === 'education' && (
          <button
            onClick={() => {
              const updated = [...education];
              updated.splice(eduIndex, 1);
              setEducation(updated);
            }}
            className='text-gray-400 hover:text-white self-start'
          >
            🗑️
          </button>
        )}
      </div>
    </div>
  ))}
</div>
<div className="w-full" style={{ fontFamily: fontMap[selectedFont] }}>
  <h2 className="text-white text-xl font-semibold mt-2">Skills</h2>
  <div className="w-20 h-[2px] mt-1" style={{ background: selectedColor }}></div>
  
  <div className="flex flex-wrap gap-2 mt-4">
    {skills.map((skill, index) => (
      <div key={index} className="flex items-center gap-1" onClick={() => setActiveSec('skills')}>
        <textarea
          value={skill}
          onChange={(e) => {
            const updated = [...skills];
            updated[index] = e.target.value;
            setSkills(updated);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
            e.target.style.width = "auto";
            e.target.style.width = `${e.target.scrollWidth}px`;
          }}
          className="text-sm font-semibold text-gray-300 resize-none bg-transparent border border-white px-2 py-1 max-w-full min-w-[100px]"
        />
        {activeSec === 'skills' && (
          <button
            onClick={() => {
              const updated = [...skills];
              updated.splice(index, 1);
              setSkills(updated);
            }}
            className="text-gray-400 hover:text-white"
          >🗑️</button>
        )}
      </div>
    ))}
  </div>

  <button
    onClick={() => setSkills([...skills, ""])}
    className="mt-4 text-sm text-blue-400 hover:text-blue-200"
  >
    ➕ Add Skill
  </button>
</div>
<div className="w-full text-white" style={{ fontFamily: fontMap[selectedFont] }}>
  <h2 className="mt-2 text-xl font-semibold">Certificates</h2>
  <div className="w-32 h-[2px] mt-1" style={{ background: selectedColor }}></div>

  <div className="mt-2">
    {certificates.map((cert, i) => (
      <div key={i} className="flex items-start gap-2 group" onClick={() => setActiveSec('certificates')}>
        <span className="pt-[2px] leading-[1.5]">•</span>
        <textarea
          value={cert}
          onChange={(e) => {
            const updated = [...certificates];
            updated[i] = e.target.value;
            setCertificates(updated);
          }}
          className="w-full resize-none bg-transparent text-white text-sm"
          style={{ minHeight: '1.5em', whiteSpace: 'pre-wrap' }}
        />
        {activeSec === 'certificates' && (
          <button
            onClick={() => {
              const updated = [...certificates];
              updated.splice(i, 1);
              setCertificates(updated);
            }}
            className="text-gray-400 hover:text-white"
          >🗑️</button>
        )}
      </div>
    ))}
  </div>

  <button
    onClick={() => setCertificates([...certificates, 'Add Point'])}
    className="mt-4 text-sm text-blue-400 hover:text-blue-200"
  >
    ➕ Add Certificate
  </button>
</div>
<div className="w-full text-white" style={{ fontFamily: fontMap[selectedFont] }}>
  <h2 className="text-xl font-semibold mt-2">Projects</h2>
  <div className="w-24 h-[2px] mt-1" style={{ background: selectedColor }}></div>

  {projects.map((proj, i) => (
    <div key={i} className="mt-4 flex items-start group flex-col md:flex-row gap-2" onClick={() => setActiveSec('projects')}>
      <div className="grid gap-2 w-full">
        <textarea
          value={proj.title}
          onChange={(e) => {
            const updated = [...projects];
            updated[i].title = e.target.value;
            setProjects(updated);
          }}
          className="text-sm resize-none bg-transparent text-white"
        />
        <textarea
          value={proj.description}
          onChange={(e) => {
            const updated = [...projects];
            updated[i].description = e.target.value;
            setProjects(updated);
          }}
          className="text-sm resize-none bg-transparent text-white"
        />
        <textarea
          value={proj.technologies}
          onChange={(e) => {
            const updated = [...projects];
            updated[i].technologies = e.target.value;
            setProjects(updated);
          }}
          className="text-sm resize-none bg-transparent text-white"
        />
      </div>
      {activeSec === 'projects' && (
          <button
            onClick={() => {
              const updated = [...projects];
              updated.splice(i, 1);
              setproject(updated);
            }}
            className="text-gray-400 hover:text-white"
          >🗑️</button>
        )}
    </div>
  ))}

  {activeSec === 'projects' && (
    <button
      onClick={() =>
        setProjects([...projects, {
          title: 'Add title',
          description: 'Add Description',
          technologies: 'Add Technologies'
        }])
      }
      className="mt-4 text-sm text-blue-400 hover:text-blue-200"
    >
      ➕ Add Project
    </button>
  )}
</div>

      </div>
    </div>
  );
};

export default Page;
