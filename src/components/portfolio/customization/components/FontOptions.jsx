const fontData = [
  { name: 'normal', cssName: '0' },
  { name: 'sans-serif', cssName: '1' },
  { name: 'monospace', cssName: '2' },
  { name: 'cursive', cssName: '3' },
  { name: 'fantasy', cssName: '4' },
];

import React from 'react';
import { usePortfolioValues } from '../../../../context/portfolioValuesContext';

const FontOptions = () => {
  const { portfolioFont, setPortfolioFont } = usePortfolioValues()

  const handleFontChange = (event) => {
    setPortfolioFont(event.target.value);
  };

  return (
    <div>
      <select value={portfolioFont} onChange={handleFontChange} className='text-sm outline-none'>
        {fontData.map((font) => (
          <option key={font.name} value={font.cssName}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontOptions;