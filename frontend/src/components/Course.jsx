import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// import lists from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
       const res= await axios.get("http://localhost:8000/book");
       console.log(res.data);
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl text-white">
            Hey,happy to see you{" "}
            <span className="text-amber-300">Here! ;)</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            ipsa rerum veritatis laborum quas officia perspiciatis consequuntur
            culpa dolorem tempora eius dolore magni et, iusto, saepe enim
            suscipit, expedita illum.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis ipsa rerum veritatis laborum quas officia
            perspiciatis consequuntur culpa dolorem tempora eius dolore magni
            et, iusto, saepe enim suscipit, expedita illum.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
