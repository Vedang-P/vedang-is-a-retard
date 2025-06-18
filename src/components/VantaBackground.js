import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect) {
      const loadEffect = async () => {
        try {
          const THREE = await import('three');
          const FOG = await import('vanta/dist/vanta.fog.min');
          
          if (vantaRef.current) {
            const effect = FOG.default({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              highlightColor: 0x7b2cbf,
              midtoneColor: 0x1a1a1a,
              lowlightColor: 0x000000,
              baseColor: 0x0a0a0a,
              blurFactor: 0.60,
              speed: 1.50,
              zoom: 1.50
            });
            setVantaEffect(effect);
          }
        } catch (error) {
          console.error('Failed to load Vanta effect:', error);
        }
      };

      loadEffect();
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #0a0a0a, #121212)'
      }}
    />
  );
};

// Only render on client side
export default dynamic(() => Promise.resolve(VantaBackground), {
  ssr: false
}); 