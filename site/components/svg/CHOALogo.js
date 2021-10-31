import React from 'react';

const CHOALogo = ({ className }) => {
  return (
    <svg width="197" height="50" viewBox="0 0 197 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <mask id="mask0_301:705" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="197" height="50">
        <rect width="196.058" height="49.3789" fill="url(#pattern0)"/>
      </mask>
      <g mask="url(#mask0_301:705)">
        <rect x="-2" width="198" height="50" fill="#001646"/>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_301:705" transform="translate(-0.00160566) scale(0.00140703 0.00558659)"/>
        </pattern>
        <image id="image0_301:705" width="713" height="179" href="data:image/png;base64,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"/>
      </defs>
    </svg>
  );
};

export default CHOALogo;
