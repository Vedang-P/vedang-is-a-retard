import VantaBackground from '../components/VantaBackground';

export default function Test() {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <VantaBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        padding: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        marginTop: '40vh'
      }}>
        <h1>Test Page</h1>
        <p>You should see an animated globe effect in the background</p>
      </div>
    </div>
  );
} 