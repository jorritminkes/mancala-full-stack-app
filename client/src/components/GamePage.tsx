import { useEffect, useState } from "react";
import { MancalaBoard } from "./MancalaBoard";
// import { fetchStenen, playMove, type BoardState } from "../api";

export function GamePage(props: any) {
  
  // const [board, setBoard] = useState<BoardState | null>(null);
  
  // useEffect(() => {
  //   fetchStenen().then(setBoard).catch(console.error);
  // }, []);
  
  
  // async function klikOpPocket(pocketPositie: number) {
  //   try {
  //     const updatedBoard = await playMove(pocketPositie);
  //     setBoard(updatedBoard);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }

  async function playMove(pocketPositie: number) {
    const response = await fetch('http://localhost:8080/api/game/move/${pocketPositie}', {
      method: "POST"
    });
    const result = await response.json();
    console.log("Move executed:", result);
  }
  
  
  // if (!board) return <p>Het bord wordt geladen</p>;

  let spelerAanDeBeurt = 1;

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Speler {spelerAanDeBeurt} is aan de beurt</h1>
      {/* <h1>Speler {board.spelerAanZet} is aan zet</h1> */}
      
      <div style = {{ marginTop: '50px', marginBottom: '50px' }}>
        <MancalaBoard/>
        {/* <MancalaBoard board={board} klikOpPocket={klikOpPocket} /> */}
      </div>

      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={props.gaNaarStart}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
            Back to Start Screen
        </button>
      </div>
    </div>
  );
}