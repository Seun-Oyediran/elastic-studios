import React, { useEffect } from 'react';
import { CaretUp } from '../../svgs';

const AppFooter = () => {
  useEffect(() => {}, []);
  return (
    <div className="elastic-studios-footer-container">
      <div className="container">
        <div className="flex-con">
          <a href="#app-top">
            <div className="top">
              <CaretUp />
              <p>Back to top</p>
            </div>
          </a>
        </div>
        <div className="footer-item-con">
          <div className="footer-item">
            <h3>25</h3>
            <p>Years experience of freelance photography</p>
          </div>
          <div className="footer-item middle">
            <h3>49</h3>
            <p>Projects worked on and counting</p>
          </div>
          <div className="footer-item">
            <h3>36</h3>
            <p>Stable client currently trust us and are booked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
