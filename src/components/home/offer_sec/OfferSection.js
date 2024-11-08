import React from "react";
import "./offer_section.css";
const OfferSection = () => {
  return (
    <>
      <div class="d-flex offer-sec  justify-content-center">
        <div class="container custom-container  flex-wrap px-2 px-sm-0 d-flex flex-column flex-lg-row  justify-content-center align-items-start align-items-lg-center justify-content-lg-between ">
          <div class="left">
            <h4 class="heading">
              Exclusive Offer! Save 20% on Your First Order!
            </h4>
            <p class="desc mt-2 mb-3">
              Our 500+ professional UK writers are ready to give you a hand-made
              assignment
            </p>
          </div>

          <div class="right d-flex mt-2 mt-lg-0 flex-wrap">
            <button class=" btn-left d-flex align-items-center justify-content-center">
            Place an Order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 15"
                fill="none"
              >
                <path
                  d="M9.52344 7.50197C9.52344 7.85834 9.38012 8.19207 9.13969 8.44923L3.27748 14.3639C3.01058 14.6186 2.66647 14.75 2.34189 14.75C2.00302 14.75 1.67414 14.6195 1.4064 14.364C0.895042 13.8456 0.895785 12.9941 1.40863 12.4767L1.40892 12.4764L6.14946 7.67767L6.32303 7.50197L6.14946 7.32628L1.40892 2.52754L1.40863 2.52725C0.895041 2.00907 0.895041 1.15589 1.40863 0.637708C1.92099 0.120764 2.76278 0.120764 3.27515 0.637708L9.14216 6.5572C9.39109 6.80836 9.52344 7.13889 9.52344 7.50197Z"
                  fill="#583BEC"
                  stroke="#EEF2F4"
                  stroke-width="0.5"
                />
              </svg>
            </button>
            <button class=" btn-right d-flex align-items-center justify-content-center">
           Check Discount
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 15"
                fill="none"
              >
                <path
                  d="M9.52344 7.50197C9.52344 7.85834 9.38012 8.19207 9.13969 8.44923L3.27748 14.3639C3.01058 14.6186 2.66647 14.75 2.34189 14.75C2.00302 14.75 1.67414 14.6195 1.4064 14.364C0.895042 13.8456 0.895785 12.9941 1.40863 12.4767L1.40892 12.4764L6.14946 7.67767L6.32303 7.50197L6.14946 7.32628L1.40892 2.52754L1.40863 2.52725C0.895041 2.00907 0.895041 1.15589 1.40863 0.637708C1.92099 0.120764 2.76278 0.120764 3.27515 0.637708L9.14216 6.5572C9.39109 6.80836 9.52344 7.13889 9.52344 7.50197Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  stroke-width="0.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
