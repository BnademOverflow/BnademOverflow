import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary">
      <CountUp
        end={primaryText}
        duration={4}
        prefix={'+'}
        useEasing={true}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </p>
    <p className="font-semibold mb-6">{secondaryText}</p>
  </>
);

export default StatsBox;
