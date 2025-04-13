import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import "../Pages/style.css";
import "../Components/media2.css";

const Home = ({ sideBar }) => {
  const [category, setCategoryId] = useState(0);

  return (
    <>
      <SideBar
        category={category}
        setCategoryId={setCategoryId}
        sideBar={sideBar}
      />
      <div className={`container ${sideBar ? " " : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
