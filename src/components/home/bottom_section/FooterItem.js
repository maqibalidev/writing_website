import React from "react";

const FooterItem = ({ split_green, text, icon }) => {
  const splitegreen_text = split_green && text.split(" ");
  return (
    <a href="#" className="bottom-sec-item ">
      {icon}

      {split_green ? (
        <>
          <strong>{splitegreen_text[0]}</strong>
          {splitegreen_text.slice(1).join(" ")}
        </>
      ) : (
        text
      )}
    </a>
  );
};

export default FooterItem;
