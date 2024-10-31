import React from "react";

const AboutItem = ({ icon, heading, desc }) => {
  return (
    <div class="item-container d-flex align-items-center flex-column">
      <div class="item-top d-flex align-items-center justify-content-center">
        {icon}
      </div>

      <p class="item-heading">{heading}</p>
      <p class="item-desc">{desc}</p>
    </div>
  );
};

export default AboutItem;
