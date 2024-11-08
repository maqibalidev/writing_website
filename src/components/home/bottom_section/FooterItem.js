import React from "react";

const FooterItem = ({ split_green, text, icon }) => {
  const splitegreen_text = split_green && text.split(" ");
  return (
    <a href="#" className="bottom-sec-item ">
      {icon}

      {split_green ? (
        <>
          <strong>{splitegreen_text[0]}</strong>
          <span>{splitegreen_text.slice(1).join(" ")}</span>
        </>
      ) : (
       <span>{text}</span>
      )}
    </a>
  );
};

export default FooterItem;
