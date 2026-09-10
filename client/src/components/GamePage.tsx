import { useEffect, useState } from "react";
import { MancalaBoard } from "./MancalaBoard";

export function GamePage(props: any) {

  // let spelerAanDeBeurt = 1;

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      {/* <h1>Speler {spelerAanDeBeurt} is aan de beurt</h1> */}
      
      <div style = {{ marginTop: '50px', marginBottom: '50px' }}>
        <MancalaBoard/>
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