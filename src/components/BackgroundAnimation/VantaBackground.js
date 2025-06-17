// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     let effect = null;

//     import('vanta/src/vanta.net').then((NET) => {
//       if (!vantaRef.current) return;

//       effect = NET.default({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0xff3f81,
//         backgroundColor: 0x0d0d0d,
//       });

//       setVantaEffect(effect);
//     });

//     return () => {
//       if (effect) effect.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       style={{
//         width: '100%',
//         height: '100vh',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         zIndex: -1,
//       }}
//     />
//   );
// };

// export default VantaBackground;
