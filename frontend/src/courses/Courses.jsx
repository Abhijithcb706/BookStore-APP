import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
// import lists from '../../public/list.json'

function Courses() {
  // console.log("list here:",lists);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <Course />
      </div>
      
      <Footer />
    </>
  );
}

export default Courses;
