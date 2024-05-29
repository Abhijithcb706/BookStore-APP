import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-4 p-4">
        <div className="card w-90 bg-base-100 shadow-xl hover:scale-110 duration-700  dark:bg-slate-700 dark:text-white">
          <figure>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer  hover:bg-red-700">Buy product</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
