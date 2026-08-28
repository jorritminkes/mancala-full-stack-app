export function MancalaBoard(props: any) {
  
  // const { bord, klikOpPocket } = props;
  // const stenen = bord.stenenPerVakje;
  const stenen = [4,4,4,4,4,4, 0, 4,4,4,4,4,4, 0]

  const vakjesSpeler1 = [4, 4, 4, 4, 4, 4, 0];
  const vakjesSpeler2 = [4, 4, 4, 4, 4, 4, 0];

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
          {/* {vakjesSpeler2[6]} */}
          {stenen[13]}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle} onClick={() => playMove(1)}>{vakjesSpeler2[5]}</div>
            <div style={pocketStyle}>{vakjesSpeler2[4]}</div>
            <div style={pocketStyle}>{vakjesSpeler2[3]}</div>
            <div style={pocketStyle}>{vakjesSpeler2[2]}</div>
            <div style={pocketStyle}>{vakjesSpeler2[1]}</div>
            <div style={pocketStyle}>{vakjesSpeler2[0]}</div>
          </div>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle}>{vakjesSpeler1[0]}</div>
            <div style={pocketStyle}>{vakjesSpeler1[1]}</div>
            <div style={pocketStyle}>{vakjesSpeler1[2]}</div>
            <div style={pocketStyle}>{vakjesSpeler1[3]}</div>
            <div style={pocketStyle}>{vakjesSpeler1[4]}</div>
            <div style={pocketStyle}>{vakjesSpeler1[5]}</div>
          </div>

          
          {/* <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle}onClick={() => klikOpPocket(13)}>{vakjesSpeler2[5]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(12)}>{vakjesSpeler2[4]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(11)}>{vakjesSpeler2[3]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(10)}>{vakjesSpeler2[2]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(9)}>{vakjesSpeler2[1]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(8)}>{vakjesSpeler2[0]}</div>
          </div>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle}onClick={() => klikOpPocket(0)}>{vakjesSpeler1[0]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(1)}>{vakjesSpeler1[1]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(2)}>{vakjesSpeler1[2]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(3)}>{vakjesSpeler1[3]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(4)}>{vakjesSpeler1[4]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(5)}>{vakjesSpeler1[5]}</div>
          </div> */}
          
          {/* <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle}onClick={() => klikOpPocket(13)}>{stenen[12]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(12)}>{stenen[11]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(11)}>{stenen[10]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(10)}>{stenen[9]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(9)}>{stenen[8]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(8)}>{stenen[7]}</div>
          </div>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle}onClick={() => klikOpPocket(0)}>{stenen[0]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(1)}>{stenen[1]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(2)}>{stenen[2]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(3)}>{stenen[3]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(4)}>{stenen[4]}</div>
            <div style={pocketStyle}onClick={() => klikOpPocket(5)}>{stenen[5]}</div>
          </div> */}
        </div>
        
        <div style={mancalaStyle}>
          {/* {vakjesSpeler1[6]} */}
          {stenen[6]}
        </div>
      </div>      
    </div>
  );
}

