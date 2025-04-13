import React from "react";
import "../Components/index.css";
import home_icon from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import technology from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import gerard from "../assets/gerard.png";

function SideIcons({ icon, icon_name, isActive, onClick }) {
  return (
    <>
      <div
        className={`side-link ${isActive ? "active" : " "}`}
        onClick={onClick}
      >
        <img src={icon} alt="icon" />
        <span> {icon_name}</span>
      </div>
    </>
  );
}

const SideBar = ({ sideBar, category, setCategoryId }) => {
  return (
    <>
      <aside className={` aside ${sideBar ? " " : "small-sideBar"}`}>
        <div className="shortcut-links">
          <SideIcons
            onClick={() => setCategoryId(0)}
            isActive={category === 0}
            icon={home_icon}
            icon_name={"Home"}
          />
          <SideIcons
            onClick={() => setCategoryId(20)}
            isActive={category === 20}
            icon={game_icon}
            icon_name={"Gaming"}
          />
          <SideIcons
            onClick={() => setCategoryId(2)}
            isActive={category === 2}
            icon={automobiles}
            icon_name={"Automobiles"}
          />
          <SideIcons
            onClick={() => setCategoryId(17)}
            isActive={category === 17}
            icon={sports}
            icon_name={"Sports"}
          />
          <SideIcons
            onClick={() => setCategoryId(24)}
            isActive={category === 24}
            icon={entertainment}
            icon_name={"Entertainment"}
          />
          <SideIcons
            onClick={() => setCategoryId(28)}
            isActive={category === 28}
            icon={technology}
            icon_name={"Technology"}
          />
          <SideIcons
            onClick={() => setCategoryId(10)}
            isActive={category === 10}
            icon={music}
            icon_name={"Music"}
          />
          <SideIcons
            onClick={() => setCategoryId(22)}
            isActive={category === 22}
            icon={blogs}
            icon_name={"Blogs"}
          />
          <SideIcons
            onClick={() => setCategoryId(25)}
            isActive={category === 25}
            icon={news}
            icon_name={"News"}
          />
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <SideIcons icon={jack} icon_name={"PewDiePie"} />
          <SideIcons icon={simon} icon_name={"Mr.Beast"} />
          <SideIcons icon={tom} icon_name={"Justin Beiber"} />
          <SideIcons icon={megan} icon_name={"5-mins-craft"} />
          <SideIcons icon={gerard} icon_name={"Nas Daily"} />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
