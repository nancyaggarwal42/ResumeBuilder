'use client';
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

const Sidebar = ({ isOpen, toggleSidebar, onColorChange }) => {
  const [showUpdateDropdown, setShowUpdateDropdown] = useState(false);
  const [showAIAssistantDropdown, setShowAIAssistantDropdown] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [editMode, setEditMode] = useState('manual');
  const [selectedFont, setSelectedFont] = useState('Roboto');

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
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color.name);
    if (onColorChange) {
      onColorChange(color.color);
    }
  };

  const handleEdit = (type) => {
    alert(type === 'manual' ? 'Edit by your own' : 'Explore Ai options');
  };

  const handleAISuggestion = (type) => {
    const messages = {
      skills: 'suggesting skills..',
      summary: 'Rewriting summary..',
      keywords: 'Optimizing keywords..'
    };
    alert(messages[type]);
  };

  const handleSaveResume = () => {
    const dummyResumeData = {
      name: 'Nancy Aggarwal',
      experience: [],
      color: selectedColor,
      mode: editMode
    };
    localStorage.setItem('resumeData', JSON.stringify(dummyResumeData));
    alert('Resume saved!');
  };

  const handleShareResume = () => {
    const dummyLink = 'https://myapp.com/my-resume/121212';
    navigator.clipboard.writeText(dummyLink);
    alert('Resume link copied to clipboard!');
  };

  const handlePDF = () => {
    alert('N/A');
  };

  return (
    <div className="fixed top-0 left-0 h-full z-50 flex">
      <div
        className={`text-white transition-all duration-300 ease-in-out shadow-lg overflow-hidden 
        ${isOpen ? 'w-[240px] md:w-[280px]' : 'w-[48px]'} bg-[#0C1222]`}
      >
        {/* Title */}
        {isOpen ? (
          <div className="mt-4 text-center border-b border-[#181A1B] text-lg md:text-2xl font-bold">
            Resume Options
          </div>
        ) : (
          <div className="absolute top-[55%] left-[35%] -translate-y-1/2 rotate-[-90deg] origin-left 
            text-white text-sm md:text-xl tracking-wider whitespace-nowrap font-bold">
            Resume Options
          </div>
        )}

        {/* Options */}
        {isOpen && (
          <div className="p-3 md:p-4 space-y-4">
            {/* Update Resume */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button
                className="flex items-center justify-between w-full text-sm md:text-base"
                onClick={() => setShowUpdateDropdown(!showUpdateDropdown)}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  <FaUpload /> Update Resume
                </span>
                {showUpdateDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showUpdateDropdown && (
                <div className="ml-2 mt-2 space-y-1 text-xs md:text-sm">
                  <button onClick={() => handleEdit('manual')} className="block w-full text-left cursor-pointer">⚪ Manual Edit</button>
                  <button onClick={() => handleEdit('ai')} className="block w-full text-left cursor-pointer">⚪ AI Edit</button>
                </div>
              )}
            </div>

            {/* AI Assistant */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button
                className="flex items-center justify-between w-full text-sm md:text-base"
                onClick={() => setShowAIAssistantDropdown(!showAIAssistantDropdown)}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  <FaRobot /> AI Assistant
                </span>
                {showAIAssistantDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showAIAssistantDropdown && (
                <div className="ml-2 mt-2 space-y-1 text-xs md:text-sm">
                  <button onClick={() => handleAISuggestion('skills')} className="block w-full text-left cursor-pointer">⚪ Suggest Skills</button>
                  <button onClick={() => handleAISuggestion('summary')} className="block w-full text-left cursor-pointer">⚪ Rewrite Summary</button>
                  <button onClick={() => handleAISuggestion('keywords')} className="block w-full text-left cursor-pointer">⚪ Optimize Keywords</button>
                </div>
              )}
            </div>

            {/* Save */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button onClick={handleSaveResume} className="flex items-center justify-center gap-2 w-full text-sm md:text-base cursor-pointer">
                <FaSave /> Save Resume
              </button>
            </div>

            {/* Share */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button onClick={handleShareResume} className="flex items-center justify-center gap-2 w-full text-sm md:text-base cursor-pointer">
                <FaShareAlt /> Share Resume
              </button>
            </div>

            {/* Download PDF */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button onClick={handlePDF} className="flex items-center justify-center gap-2 w-full text-sm md:text-base cursor-pointer">
                <FaFilePdf /> Download PDF
              </button>
            </div>

            {/* Design Options */}
            <div className="mt-6">
              <h2 className="text-sm md:text-lg font-semibold mb-2 flex items-center gap-2">
                <FaPalette /> Design Options
              </h2>

              {/* Color Theme */}
              <div className="mb-2 text-xs md:text-sm">Color Theme</div>
              <div className="grid grid-cols-3 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    className={`rounded-lg text-xs md:text-sm font-medium px-1 md:px-2 py-1 md:py-2 text-white border-2 cursor-pointer ${
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
                <div className="mb-2 text-xs md:text-sm flex items-center gap-2">
                  <FaFont /> Font Family
                </div>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full px-2 py-1 md:py-2 bg-[#2a2a2a] text-xs md:text-sm border border-gray-500 rounded"
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
        className="bg-[#0C1222] text-white p-2 rounded-r shadow-md cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </div>
  );
};

export default Sidebar;
