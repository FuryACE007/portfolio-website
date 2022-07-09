import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-slate-900 justify-center items-center text-center py-3 px-3 min-w-[25rem] shadow-lg rounded-md hover:bg-emerald-300 hover:text-slate-900 hover:cursor-pointer hover:shadow-emerald-300 transition-all">
      {props.children}
    </div>
  );
};

export default Card;
