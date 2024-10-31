import React from 'react';
import './main_section.css';

import AboutItem from './AboutItem';

const MainSection = ({aboutData}) => {
  return (
    <section className="main-container d-flex justify-content-center flex-column align-items-center">
      <div className="container custom-container d-flex justify-content-center flex-column align-items-center px-2 px-md-5">
        <div className="main-inner-container">
          <h3 className="main-small-heading">Essay Writing Services</h3>
          <h1 className="main-large-heading mt-3 mt-sm-4">
            Best Essay Writing Services & Help By Cheap Essay Writing PK
          </h1>
          <p className="main-desc-text">
            Cheap Essay Writing PK delivers affordable essays to students looking for the best essay writing services within their budget. Our professional essay helpers are fully equipped with all the resources and skill sets required to complete your essay and meet its requirements.
          </p>
        </div>

        <div className="main-bottom-container d-flex align-items-center justify-content-center flex-wrap">
          {aboutData.map(({ icon, text, id }) => (
            <AboutItem key={id} icon={icon} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
