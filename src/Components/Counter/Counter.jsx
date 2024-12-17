import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = ({ text, target, offset = 300, alternate }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null); // Ref to track the counter element's position

  // Effect to handle counting up to the target value
  useEffect(() => {
    const handleScroll = () => {
      const element = counterRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top - window.innerHeight <= offset;

      if (isVisible && count < target) {
        // Start counting when the element is close to being in view
        const interval = setInterval(() => {
          setCount(prevCount => {
            if (prevCount < target) {
              return prevCount + 1;
            } else {
              clearInterval(interval); // Clear interval when target is reached
              return prevCount;
            }
          });
        }, 1000); // Adjust the speed of counting

        // Cleanup function to clear the interval if the component unmounts
        return () => clearInterval(interval);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [count, target, offset]);

  return (
    <div ref={counterRef} className='col-12 col-sm-auto my-3 my-sm-0 text-center'>
      <h1 className={`display-1 banner-title m-0 p-0 ${alternate? 'text-dark': 'text-primary'}`}>{count}</h1>
      <h5 className={`fw-bold text-uppercase m-0 p-0 ${alternate ? 'text-primary': 'text-dark'}`}>{text}</h5>
    </div>
  );
};

export default Counter;
