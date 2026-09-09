import { useState } from 'react';

export function MancalaBoard(props: any) {
  
  // const { bord, klikOpPocket } = props;
  // const stenen = bord.stenenPerVakje;
  const [stenen, setStenen] = useState([4,4,4,4,4,4, 0, 4,4,4,4,4,4, 0]);

  const outerPadding = 20;
  const gap = 20;
  const vakjeWidth = 60;
  const boardHeight = gap + 2 * vakjeWidth;
  
  const pocketStyle = {
    width: `${vakjeWidth}px`,
    height: `${vakjeWidth}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '1px solid #ccc',
    backgroundColor: '#8d5b4c',
    borderRadius: '50%',
    color: '#ffffff',
    // fontWeight: 'bold',
    fontSize: '18px',
    // boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.4)'
  }
  
  const mancalaStyle = {
    width: `${vakjeWidth}px`,
    height: `${boardHeight}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '1px solid #ccc',
    backgroundColor: '#8d5b4c',
    borderRadius: '30px',
    color: '#ffffff',
    // fontWeight: 'bold',
    fontSize: '22px',
    // boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.4)'
  }

  async function playMove(pocketPositie: number) {
      console.log("Clicked pocket");
      try {
          const response = await fetch(`http://localhost:8080/api/game/move/${pocketPositie}`, {
              method: "POST"
          });
          const result = await response.json();
          console.log("Board updated:", result);
          setStenen(result.stenenPerVakje);
      } catch (error) {
          console.error("Error:", error);
          alert("Invalid move!")
      }
    }

  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: `${outerPadding}px` }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${gap}px`,
        height: `${boardHeight}px`,
        width: 'fit-content',
        backgroundColor: '#5c3a21',
        padding: '20px',
        borderRadius: '20px',
        // boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
      }}>
        
        <div style={mancalaStyle}>
          {stenen[13]}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle} onClick={() => playMove(13)}>{stenen[12]}</div>
            <div style={pocketStyle} onClick={() => playMove(12)}>{stenen[11]}</div>
            <div style={pocketStyle} onClick={() => playMove(11)}>{stenen[10]}</div>
            <div style={pocketStyle} onClick={() => playMove(10)}>{stenen[9]}</div>
            <div style={pocketStyle} onClick={() => playMove(9)}>{stenen[8]}</div>
            <div style={pocketStyle} onClick={() => playMove(8)}>{stenen[7]}</div>
          </div>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle} onClick={() => playMove(1)}>{stenen[0]}</div>
            <div style={pocketStyle} onClick={() => playMove(2)}>{stenen[1]}</div>
            <div style={pocketStyle} onClick={() => playMove(3)}>{stenen[2]}</div>
            <div style={pocketStyle} onClick={() => playMove(4)}>{stenen[3]}</div>
            <div style={pocketStyle} onClick={() => playMove(5)}>{stenen[4]}</div>
            <div style={pocketStyle} onClick={() => playMove(6)}>{stenen[5]}</div>
          </div>
        </div>
        
        <div style={mancalaStyle}>
          {stenen[6]}
        </div>
      </div>      
    </div>
  );
}

