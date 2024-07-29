import React, { useState } from "react";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
const Explorer = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const Toggle = () => {
    setExpand(!expand);
  };
  console.log(data);
  return (
    <div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontWeight: data.isFolder ? "bold" : "normal",
        }}
        onClick={Toggle}
      >
        {data.isFolder ? (
          expand ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )
        ) : null}
        {data.name}
      </p>
      <div>
        {expand &&
          data.isFolder &&
          data.items.map((item) => (
            <>
              <p style={{ marginLeft: 15 }}>
                <Explorer data={item} />
              </p>
            </>
          ))}
      </div>
    </div>
  );
};

export default Explorer;
