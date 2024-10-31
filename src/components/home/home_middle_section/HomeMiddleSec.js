import React from "react";
import "./home_middle_sec.css";
import SerViceItem from "./ServiceItem";

const HomeMiddleSec = ({serviceSecData}) => {
  return (
    <>
      {/* //////////////// SERVIE TOP SEC /////////////////// */}
      <div class="about-top-sec-container ">
        <div class="d-flex justify-content-center align-items-center about-top-sec">
          <div class="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M5.13281 8.92969L18 3.47344L30.8672 8.92969C31.282 9.10547 31.507 9.47813 31.5 9.82969C31.4719 16.2563 28.8 27.3586 18.4008 32.3367C18.1477 32.4562 17.8523 32.4562 17.6063 32.3367C7.2 27.3516 4.53516 16.2563 4.5 9.82266C4.5 9.47109 4.71797 9.10547 5.13281 8.92266V8.92969ZM32.182 5.82188L18.9422 0.203906C18.6469 0.0703125 18.3305 0 18 0C17.6695 0 17.3531 0.0703125 17.0578 0.203906L3.81797 5.82188C2.2711 6.47578 1.11797 8.00156 1.125 9.84375C1.16016 16.8188 4.02891 29.5805 16.1438 35.3813C17.318 35.9438 18.682 35.9438 19.8563 35.3813C31.9781 29.5805 34.8398 16.8188 34.875 9.84375C34.882 8.00156 33.7289 6.47578 32.182 5.82188ZM10.125 15.5602C10.125 16.6992 10.582 17.7961 11.3836 18.6047L17.1984 24.4195C17.6344 24.8555 18.3516 24.8555 18.7875 24.4195L24.6023 18.6047C25.4109 17.7961 25.8609 16.6992 25.8609 15.5602C25.8609 13.1836 23.9344 11.25 21.5508 11.25C20.4117 11.25 19.3148 11.707 18.5063 12.5086L17.9859 13.0289L17.4656 12.5086C16.657 11.7 15.5602 11.25 14.4211 11.25C12.0445 11.25 10.1109 13.1766 10.1109 15.5602H10.125Z"
                fill="#583BEC"
              />
            </svg>

            <p class="mx-2">
              Trusted by <span>834K+</span> Satisfied Customers
            </p>
          </div>
        </div>
      </div>

      {/* //////////////// SERVICE MIDDLE SEC  /////////////////// */}
      <div class="d-flex justify-content-center middle-sec-container  flex-column">
        <div class="headings d-flex flex-column align-items-center">
          <p class="heading">
            What Makes Us the <span>Best Essay Writing</span> Service?
          </p>
          <p class="desc text-center">
            Discrimination is not our thing; we provide academic writing
            services to all paper types, study levels, and subject areas.{" "}
          </p>
        </div>
   {/* //////////////// SERVICE ITEMS SECTION  /////////////////// */}
        <div class="d-flex justify-content-center mx-1 mx-sm-0">
          <div class="custom-container container gx-0 p-0">
            <div class="middle-sec-item-container justify-content-between d-flex flex-wrap ">
              {serviceSecData.map((item, key) => (
                <SerViceItem
                  key={key}
                  icon={item.icon}
                  desc={item.desc}
                  heading={item.heading}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMiddleSec;
