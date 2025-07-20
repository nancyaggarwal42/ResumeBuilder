// import React, { useState } from 'react';
// import {
//   FaArrowRight,
//   FaArrowLeft,
//   FaChevronDown,
//   FaChevronUp,
//   FaSave,
//   FaShareAlt,
//   FaFilePdf,
//   FaUpload,
//   FaRobot,
//   FaPalette,
//   FaFont
// } from 'react-icons/fa';

// const Sidebar = ({ isOpen, toggleSidebar, onColorChange }) => {
//   const [showUpdateDropdown, setShowUpdateDropdown] = useState(false);
//   const [showAIAssistantDropdown, setShowAIAssistantDropdown] = useState(false);
//   const [selectedColor, setSelectedColor] = useState('');

//   const colorOptions = [
//     { name: 'Blue', color: '#3B82F6' },
//     { name: 'Green', color: '#10B981' },
//     { name: 'Purple', color: '#9333EA' },
//     { name: 'Red', color: '#EF4444' },
//     { name: 'Orange', color: '#F97316' },
//     { name: 'Teal', color: '#14B8A6' },
//   ];

//   const handleColorSelect = (color) => {
//     setSelectedColor(color.name);
//     if (onColorChange) {
//       onColorChange(color.color); // Pass HEX to parent
//     }
//   };




  
//   return (
//     <div className="fixed top-0 left-0 h-full z-50 flex">
//       {/* Sidebar panel */}
//       <div
//         className={`text-white
//         transition-all duration-300 ease-in-out shadow-lg overflow-hidden 
//         ${isOpen ? 'w-[250px]' : 'w-[50px]'}`}
//       >
//         {/* Title */}
//         {isOpen ? (
//           <div className="mt-4 text-center border-b border-amber-300 text-2xl font-bold">
//             Resume Options
//           </div>
//         ) : (
//           <div className="absolute top-[55%] left-[35%] -translate-y-1/2 rotate-[-90deg] origin-left 
//             text-white text-2xl tracking-wider whitespace-nowrap font-bold">
//             Resume Options
//           </div>
//         )}

//         {/* Options */}
//         {isOpen && (
//           <div className="p-4 space-y-4">
//             {/* Option 1: Update Resume */}
//             <div className="border border-white px-4 py-2 rounded-2xl border-2">
//               <button
//                 className="flex items-center justify-between w-full"
//                 onClick={() => setShowUpdateDropdown(!showUpdateDropdown)}
//               >
//                 <span className="flex items-center gap-2">
//                   <FaUpload /> Update Resume
//                 </span>
//                 {showUpdateDropdown ? <FaChevronUp /> : <FaChevronDown />}
//               </button>

//               {showUpdateDropdown && (
//                 <div className="ml-4 mt-2 space-y-2 text-sm">
//                   <button className="block w-full text-left">Manual Edit</button>
//                   <button className="block w-full text-left">AI Edit</button>
//                 </div>
//               )}
//             </div>

//             {/* Option 2: AI Assistant */}
//             <div className="border border-white px-4 py-2 rounded-2xl border-2">
//               <button
//                 className="flex items-center justify-between w-full"
//                 onClick={() => setShowAIAssistantDropdown(!showAIAssistantDropdown)}
//               >
//                 <span className="flex items-center gap-2">
//                   <FaRobot /> AI Assistant
//                 </span>
//                 {showAIAssistantDropdown ? <FaChevronUp /> : <FaChevronDown />}
//               </button>

//               {showAIAssistantDropdown && (
//                 <div className="ml-4 mt-2 space-y-2 text-sm">
//                   <button className="block w-full text-left">Suggest Skills</button>
//                   <button className="block w-full text-left">Rewrite Summary</button>
//                   <button className="block w-full text-left">Optimize Keywords</button>
//                 </div>
//               )}
//             </div>

//             {/* Option 3: Save */}
//             <div className="border border-white px-4 py-2 rounded-2xl border-2">
//               <button className="flex items-center justify-center gap-2 w-full">
//                 <FaSave /> Save Resume
//               </button>
//             </div>

//             {/* Option 4: Share */}
//             <div className="border border-white px-4 py-2 rounded-2xl border-2">
//               <button className="flex items-center justify-center gap-2 w-full">
//                 <FaShareAlt /> Share Resume
//               </button>
//             </div>

//             {/* Option 5: Download */}
//             <div className="border border-white px-4 py-2 rounded-2xl border-2">
//               <button className="flex items-center justify-center gap-2 w-full">
//                 <FaFilePdf /> Download PDF
//               </button>
//             </div>

//             {/* Design Options */}
//             <div className="mt-8">
//               <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
//                 <FaPalette />  Options
//               </h2>

//               <div className="mb-2 text-base">Color Theme</div>
//               <div className="grid grid-cols-3 gap-2">
//                 {colorOptions.map((color) => (
//                   <button
//                     key={color.name}
//                     className={`rounded-lg text-sm font-medium px-1 py-2 text-white border-2 cursor-pointer ${
//                       selectedColor === color.name ? 'ring-2 ring-white' : ''
//                     }`}
//                     style={{ backgroundColor: color.color }}
//                     onClick={() => handleColorSelect(color)}
//                   >
//                     {color.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Toggle Button */}
//       <div
//         className="bg-amber-700 text-amber-200 p-2 rounded-r shadow-md cursor-pointer"
//         onClick={toggleSidebar}
//       >
//         {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  FaArrowRight,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaSave,
  FaShareAlt,
  FaFilePdf,
  FaUpload,
  FaRobot,
  FaPalette,
  FaFont
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar, onColorChange}) => {
  const [showUpdateDropdown, setShowUpdateDropdown] = useState(false);
  const [showAIAssistantDropdown, setShowAIAssistantDropdown] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  // const [selectedFont, setSelectedFont] = useState({font: "'Roboto', 'Open Sans','Lato','Arial','Calibri','Times New Roman',"});
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [editMode, setEditMode] = useState('manual');


  const colorOptions = [
    { name: 'Blue', color: '#3B82F6' },
    { name: 'Green', color: '#10B981' },
    { name: 'Purple', color: '#9333EA' },
    { name: 'Red', color: '#EF4444' },
    { name: 'Orange', color: '#F97316' },
    { name: 'Teal', color: '#14B8A6' },
  ];

  const fontOptions = [
    'Roboto',
    'Open Sans',
    'Lato',
    'Arial',
    'Calibri',
    'Times New Roman',
  ];
  const fontMap = {
  Roboto: "'Roboto', sans-serif",
  'Open Sans': "'Open Sans', sans-serif",
  Lato: "'Lato', sans-serif",
  Arial: 'Arial, sans-serif',
  Calibri: 'Calibri, sans-serif',
  'Times New Roman': "'Times New Roman', serif",
}

  
  const handleColorSelect = (color) => {
    setSelectedColor(color.name);
    if (onColorChange) {
      onColorChange(color.color); 
    }
  };

  // const handleFontSelect = (font) => {
  //   setSelectedFont((prev)=> ({...prev, font}));
  // };

  // const toggletheme = () => {
  //   setLight(!light);
  //   document.documentElement.classList.toggle('', !isDarkMode);
  // }

 


  const handleEdit = (type) => {
    if(type==='manual'){
      alert('Edit by your own')
    }
    else if(type==='ai'){
      alert('Explore Ai options')
    }
  }

  const handleAISuggestion = (type) => {
    if(type==='skills'){
      alert('suggesting skills..')
    }
    else if(type==='summary'){
      alert('Rewriting summary..')
    }
    else if(type==='keywords'){
      alert('Optimizing keywords..')
    }
  }

  const handleSaveResume = () => {
    const dummyResumeData={
      name: 'Nancy Aggarwal',
      experience: [],
      color: selectedColor,
      // font: selectedFont,
      mode: editMode
    };
    localStorage.setItem('resumeData', JSON.stringify(dummyResumeData));
    alert('Resume saved!');
  };

  const handleShareResume = () => {
    const dummyLink = 'https://myapp.com/my-resume/121212';
    navigator.clipboard.writeText(dummyLink);
    alert('Resume link cpied to clipboard!');
  };

  const handlePDF = () => {
    alert('N/A');
  };

  const [selectedFont, setSelectedFont] = useState('Roboto')
  return (
    <div className="fixed top-0 left-0 h-full z-50 flex">
      {/* <button onClick={toggletheme} className='p-2 rounded-full shadow bg-white dark:bg-yellow-400 hover:scale-110 transition' title='Toggle Theme'>
        <FaRegLightbulb className='text-yellow-500 dark:text-black'/>
      </button>
      <div className='bg-white text-black dark:bg-black dark:text-white p-2 rounded-r shadow-md cursor-pointer' onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div> */}
      {/* Sidebar panel */}
      <div
        className={`text-white transition-all duration-300 ease-in-out shadow-lg overflow-hidden 
        ${isOpen ? 'w-[250px]' : 'w-[50px]'} bg-[#0C1222]`}
      >
        {/* Title */}
        {isOpen ? (
          <div className="mt-4 text-center border-b border-[#181A1B] text-2xl font-bold">
            Resume Options
          </div>
        ) : (
          <div className="absolute top-[55%] left-[35%] -translate-y-1/2 rotate-[-90deg] origin-left 
            text-white text-2xl tracking-wider whitespace-nowrap font-bold">
            Resume Options
          </div>
        )}

        {/* Options */}
        {isOpen && (
          <div className="p-4 space-y-4">
            {/* Update Resume */}
            <div className="border-white px-4 py-2 rounded-2xl border-2">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setShowUpdateDropdown(!showUpdateDropdown)}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  <FaUpload /> Update Resume
                </span>
                {showUpdateDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showUpdateDropdown && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <button onClick={() => handleEdit('manual')} className="block w-full text-left cursor-pointer">⚪ Manual Edit</button>
                  <button onClick={() => handleEdit('ai')} className="block w-full text-left cursor-pointer">⚪ AI Edit</button>
                </div>
              )}
            </div>

            {/* AI Assistant */}
            <div className="border-white px-4 py-2 rounded-2xl border-2">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setShowAIAssistantDropdown(!showAIAssistantDropdown)}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  <FaRobot /> AI Assistant
                </span>
                {showAIAssistantDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showAIAssistantDropdown && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <button onClick={() => handleAISuggestion('skills')} className="block w-full text-left cursor-pointer">⚪ Suggest Skills</button>
                  <button onClick={() => handleAISuggestion('summary')} className="block w-full text-left cursor-pointer">⚪ Rewrite Summary</button>
                  <button onClick={() => handleAISuggestion('keywords')} className="block w-full text-left cursor-pointer">⚪ Optimize Keywords</button>
                </div>
              )}
            </div>

            {/* Save */}
            <div className="border-white px-4 py-2 rounded-2xl border-2">
              <button onClick={handleSaveResume} className="flex items-center justify-center gap-2 w-full cursor-pointer">
                <FaSave /> Save Resume
              </button>
            </div>

            {/* Share */}
            <div className="border-white px-4 py-2 rounded-2xl border-2">
              <button onClick={handleShareResume} className="flex items-center justify-center gap-2 w-full cursor-pointer">
                <FaShareAlt /> Share Resume
              </button>
            </div>

            {/* Download PDF */}
            <div className="border-white px-4 py-2 rounded-2xl border-2">
              <button onClick={handlePDF} className="flex items-center justify-center gap-2 w-full cursor-pointer">
                <FaFilePdf /> Download PDF
              </button>
            </div>

            {/* Design Options */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FaPalette /> Design Options
              </h2>

              {/* Color Theme */}
              <div className="mb-2 text-base">Color Theme</div>
              <div className="grid grid-cols-3 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    className={`rounded-lg text-sm font-medium px-1 py-2 text-white border-2 cursor-pointer ${
                      selectedColor === color.name ? 'ring-2 ring-white' : ''
                    }`}
                    style={{ backgroundColor: color.color }}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color.name}
                  </button>
                ))}
              </div>

              {/* Font Family */}
              <div className="mt-4">
                <div className="mb-2 text-base flex items-center gap-2">
                  <FaFont /> Font Family
                </div>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full px-2 py-2 bg-[#2a2a2a] text-white border border-gray-500 rounded"
                  style={{ fontFamily: fontMap[selectedFont] }}
                >
                  {fontOptions.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: fontMap[font] }}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div
        className="bg- text- p-2 rounded-r shadow-md cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>

     
    </div>
  );
}

export default Sidebar
