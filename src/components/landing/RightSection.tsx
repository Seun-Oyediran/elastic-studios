import React from 'react';
import { ArrowRight } from '../../svgs';

interface IProps {
  title: string;
  details: string;
  className: string | number;
}

const RightSection = (props: IProps) => {
  const { title, details, className } = props;
  return (
    <div className={`elastic-studios-full-section right-section ${className}`}>
      <div className="con">
        <div className="content">
          <div className="text-con">
            <h3>{title}</h3>
            <p>{details}</p>
          </div>
          <div className="btn-con">
            <button type="button">
              Take a look
              {' '}
              <ArrowRight />
              {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
