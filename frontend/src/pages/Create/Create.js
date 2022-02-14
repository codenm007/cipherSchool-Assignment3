import React from "react";
import Empty from "./empty.svg";
import CreateRecipe from "../../components/CreateRecipeModal/CreateRecipe";
import isLoggedIn from "../../functions/isLoggedIn";
const Create = () => {
  if(!isLoggedIn()){
    
    window.location.href = "/"
  }
  return (
    <div className="create">
      <div className="empty flex justify-center p-4">
        <div className=" space-y-8">
          <h2 className="text-center text-gray-400 text-5xl">Empty</h2>
          <img className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]" src={Empty} alt="" />
          <CreateRecipe />
        </div>
      </div>
    </div>
  );
};

export default Create;
