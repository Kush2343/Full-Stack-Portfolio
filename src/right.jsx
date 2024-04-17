// RightClickBlocker.js

import React, { useEffect } from 'react';

function RightClickBlocker() {
  // Function to handle right-click event
  function blockRightClick(event) {
    event.preventDefault();
  }

  useEffect(() => {
    // Add event listener to block right-click on component mount
    document.addEventListener('contextmenu', blockRightClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', blockRightClick);
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
}

export default RightClickBlocker;
