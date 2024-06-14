import React from "react";
import "./Menu.css";
import SubMenu from "../../components/SubMenu";
import { menuData } from "../../data/data";

export default function Menu() {
  return (
    <div className="container">
      <ul className="mainUl">
        {menuData?.map((item) => (
          <SubMenu key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
