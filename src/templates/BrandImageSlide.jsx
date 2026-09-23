import React from 'react';

export default function BrandImageSlide({ src }) {
  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <img src={src} alt="" draggable={false} className="w-full h-full object-cover select-none" />
    </div>
  );
}
