// 'use client';
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';

// const Page = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Main Content */}
//     <div className={`
//   transition-all duration-300 ease-in-out 
//   transform
//   ${isSidebarOpen ? 'translate-x-[100px]' : 'translate-x-0'}
//   mt-10 bg-black text-white p-10 rounded max-w-[800px] w-full mx-auto
// `}>
//         <h1 className="text-4xl font-bold text-center mb-6">JOHN DOE</h1>
//         <h2 className="text-2xl text-center text-blue-400 mb-4">SOFTWARE ENGINEER</h2>
//         <p className="text-center mb-8">
//           (123) 456-7890 | john.doe@example.com | linkedin.com/in/johndoe | github.com/johndoe
//         </p>

//         <section className="mb-6">
//           <h3 className="text-xl text-blue-500 mb-2">SUMMARY</h3>
//           <p>
//             Results-driven software engineer with 5+ years of experience in full-stack development...
//           </p>
//         </section>

//         <section className="mb-6">
//           <h3 className="text-xl text-blue-500 mb-2">EXPERIENCE</h3>
//           <p><strong>Senior Software Engineer</strong> – Tech Solutions Inc. (2019–Present)</p>
//           <ul className="list-disc pl-5">
//             <li>Led a team of 5 developers...</li>
//             <li>Reduced API response time...</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Page;


