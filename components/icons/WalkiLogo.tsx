
import React from 'react';

const WalkiLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 260 60" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-labelledby="walki-logo-title"
    >
      <title id="walki-logo-title">WALKi Logo</title>
      <text 
        x="0" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontSize="60" 
        fontWeight="bold" 
        fill="currentColor"
      >
        <tspan>WA</tspan>
        <tspan x="180" dy="0">Ki</tspan>
      </text>
      <g transform="translate(105, 5) scale(0.12)">
        <path fill="currentColor" d="M264.44,309.86,220,285.33V181.71L188,165.71V128.29l32-16v-16L188,72.86V0h32V68.29l104,52ZM220,93.14l12.89,6.45-32.44,16.22-12.89-6.45ZM116,336H0V304H53.15L0,229.71,22.29,216,88,304h28Z"/>
        <path fill="currentColor" d="M116,400H0V368H116Z"/>
      </g>
    </svg>
  );
};

export default WalkiLogo;
