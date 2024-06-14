import React, { useState } from "react";
import "./SubMenu.css";
import { menuData } from "../data/data";

export default function SubMenu({ data }) {
  /// states
  const [toggleArr, setToggleArr] = useState([]);
  const arr = [];

  /// menu click function
  const menuClickFunc = () => {
    if (!toggleArr.includes(data.id)) {
      arr.push(data.id);
      setToggleArr([...arr]);
    } else {
      let Arr = arr.filter((ele) => ele.id !== data.id);
      setToggleArr([...Arr]);
    }
  };
  return (
    <div>
      <li>
        <div className="name-wrapper-div">
          {menuData.includes(data) ? null : (
            <div className="name-pre-line"></div>
          )}
          <p
            onClick={menuClickFunc}
            style={{ cursor: data?.children ? "pointer" : "unset" }}
            className="name-txt"
          >
            {data?.name}
            {data.children ? (
              <span className="plus-minus">
                {" "}
                {data?.children && toggleArr.includes(data.id) ? "-" : "+"}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>

        {data?.children && toggleArr.includes(data.id) && (
          <ul>
            {data?.children.map((child) => (
              <SubMenu key={child.id} data={child} />
            ))}
          </ul>
        )}
      </li>
    </div>
  );
}
