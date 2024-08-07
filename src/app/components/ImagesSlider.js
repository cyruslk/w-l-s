import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImagesSlider = ({
  images,
  width,
  interval,
  top,
  left,
  right,
  position,
  appearScrollPercent,
  disappearScrollPercent,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Start with the component hidden

  useEffect(() => {
    // Set interval for changing images
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Show the component if scrolled above the appear percentage
      if (scrolledPercent >= appearScrollPercent && scrolledPercent < disappearScrollPercent) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [appearScrollPercent, disappearScrollPercent]);

  if (!isVisible) return null; // Hide component if it's not visible

  return (
    <div
      className="images-slider"
      style={{
        width,
        position: position,
        top: top,
        left: left,
        right: right,
      }}
    >
      <img src={images[currentIndex]} alt={`images-slider-${currentIndex}`} style={{ width: '100%' }} />
    </div>
  );
};

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.string,
  interval: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'absolute']),
  appearScrollPercent: PropTypes.number,    // Percentage of scroll to trigger appearance
  disappearScrollPercent: PropTypes.number, // Percentage of scroll to trigger disappearance
};

ImagesSlider.defaultProps = {
  width: '600px',
  interval: 2000, // 2 seconds by default
  top: '10px',
  left: 'auto',
  right: '10px',
  position: 'absolute',
  appearScrollPercent: 20,    // Appear after 20% of the page is scrolled by default
  disappearScrollPercent: 80, // Disappear after 80% of the page is scrolled by default
};

export default ImagesSlider;