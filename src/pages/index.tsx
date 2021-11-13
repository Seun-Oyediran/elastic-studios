import React, { Fragment } from 'react';
import { Header } from '../components';
import { LeftSection, RightSection } from '../components/landing';

export default function Home() {
  return (
    <Fragment>
      <Header title="Elastic Studios | Home" />
      <div>
        <div className="elastic-studios-home-section first-section">
          <div className="content-container">
            <div className="first-section-content content">
              <h3>
                We take photos as
                {' '}
                <br />
                {' '}
                a return ticket to a
                {' '}
                <br />
                {' '}
                moment otherwise gone
              </h3>
              <div className="btn-con">
                <button type="button">Book now</button>
              </div>
            </div>
          </div>
        </div>
        <LeftSection
          title="beauty"
          className="l1"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <RightSection
          title="POTRAIT"
          className="r1"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <LeftSection
          title="FASHION"
          className="l2"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <RightSection
          title="POTRAIT"
          className="r2"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <LeftSection
          title="people"
          className="l3"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <RightSection
          title="product"
          className="r3"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <LeftSection
          title="couple"
          className="l4"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <RightSection
          title="nature"
          className="r4"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
        <LeftSection
          title="birthdays"
          className="l5"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut."
        />
      </div>
    </Fragment>
  );
}
