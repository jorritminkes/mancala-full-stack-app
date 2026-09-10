import { useEffect, useState } from 'react';

export function MancalaBoard(props: any) {
  
  // const [stenen, setStenen] = useState([4,4,4,4,4,4, 0, 4,4,4,4,4,4, 0]);
  const [stenen, setStenen] = useState<number[]>([]);
  const [spelerAanDeBeurt, setSpelerAanDeBeurt] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [spelAfgelopen, setSpelAfgelopen] = useState(false);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  async function loadInitialState() {
    setIsLoading(true);
    setHasError(false);
    
    try {
      const response = await fetch('http://localhost:8080/api/game');
      if (response.ok) {
        const result = await response.json();
        setStenen(result.stenenPerVakje);
        setSpelerAanDeBeurt(result.spelerAanDeBeurt);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error("Could not fetch the current game state:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    loadInitialState();
  }, []);
  
  const outerPadding = 20;
  const gap = 20;
  const vakjeWidth = 60;
  const boardHeight = gap + 2 * vakjeWidth;
  
  const pocketStyle = (positie: number) => {
    const isPlayer1Pocket = positie >= 1 && positie <= 6;
    const isPlayer2Pocket = positie >= 8 && positie <= 13;
    
    const isMyTurn = (spelerAanDeBeurt === 1 && isPlayer1Pocket) || (spelerAanDeBeurt === 2 && isPlayer2Pocket);
    const isPlayable = isMyTurn && !isProcessing;
    return {
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
      transition: 'opacity 0.3s',
      // boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.4)'
      cursor: isPlayable ? 'pointer' : 'not-allowed',
      opacity: isPlayable ? 1 : 0.7,
    };
    
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
    
    if (isProcessing) {
      return;
    }
    
    setIsProcessing(true);
    console.log("Clicked pocket", pocketPositie);
    
    try {
        const response = await fetch(`http://localhost:8080/api/game/move/${pocketPositie}`, {
            method: "POST"
        });
        
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "Move rejected by domain!");
        }
        
        const result = await response.json();
        console.log("Board updated:", result);
        setStenen(result.stenenPerVakje);
        setSpelerAanDeBeurt(result.spelerAanDeBeurt);
        setSpelAfgelopen(result.spelAfgelopen);
        
    } catch (error: any) {
        console.error("Error:", error);
        alert(error.message);
    } finally {
      setIsProcessing(false);
    }
  }
  
  async function restartGame() {
    setIsProcessing(true);
    try {
      const response = await fetch('http://localhost:8080/api/game/restart', {
        method: "POST"
      });
      
      if (response.ok) {
        const result = await response.json();
        setStenen(result.stenenPerVakje);
        setSpelerAanDeBeurt(result.spelerAanDeBeurt);
      }
    } catch (error) {
      console.error("Could not restart game:", error);
    } finally {
      setIsProcessing(false);
    }
  }
  
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', fontSize: '20px' }}>
        Loading board...
      </div>
    )
  }
  
  if (hasError || stenen.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', color: 'red' }}>
        <h2>Could not load game data from the server. Reload with button below.</h2>
        <button
          onClick={loadInitialState}
          >
            Reload board
        </button>
      </div>
    )
  }

  

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', padding: `${outerPadding}px` }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: `${outerPadding}px` }}>
      <h1 style={{ marginBottom: '30px', color: 'white' }}>
        Speler {spelerAanDeBeurt} is aan de beurt
      </h1>
      
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
            <div style={pocketStyle(13)} onClick={() => playMove(13)}>{stenen[12]}</div>
            <div style={pocketStyle(12)} onClick={() => playMove(12)}>{stenen[11]}</div>
            <div style={pocketStyle(11)} onClick={() => playMove(11)}>{stenen[10]}</div>
            <div style={pocketStyle(10)} onClick={() => playMove(10)}>{stenen[9]}</div>
            <div style={pocketStyle(9)} onClick={() => playMove(9)}>{stenen[8]}</div>
            <div style={pocketStyle(8)} onClick={() => playMove(8)}>{stenen[7]}</div>
          </div>
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            <div style={pocketStyle(1)} onClick={() => playMove(1)}>{stenen[0]}</div>
            <div style={pocketStyle(2)} onClick={() => playMove(2)}>{stenen[1]}</div>
            <div style={pocketStyle(3)} onClick={() => playMove(3)}>{stenen[2]}</div>
            <div style={pocketStyle(4)} onClick={() => playMove(4)}>{stenen[3]}</div>
            <div style={pocketStyle(5)} onClick={() => playMove(5)}>{stenen[4]}</div>
            <div style={pocketStyle(6)} onClick={() => playMove(6)}>{stenen[5]}</div>
          </div>
        </div>
        
        <div style={mancalaStyle}>
          {stenen[6]}
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <button
          onClick={restartGame}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          New Game
        </button>
      </div>
      
    </div>
  );
}

