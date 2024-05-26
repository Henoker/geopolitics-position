import React, { useEffect, useRef } from 'react';

const MatrixFrame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = 'Matrix BOP2.png';
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className="matrix-frame">
      <canvas ref={canvasRef} width={500} height={510} style={{ backgroundColor: '#FFFFFF' }} />
    </div>
  );
};

export default MatrixFrame;
