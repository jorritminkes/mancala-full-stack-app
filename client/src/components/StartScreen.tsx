
// import { startNewGame } from "../api";
export function StartScreen(props: any) {
  
  // async function startNieuwSpel() {
  //   await startNewGame();
  //   props.gaNaarSpel();
  // }
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mancala</h1>
      <p>Welkom bij het spel! Klik op de knop om naar het spel te gaan.</p>

      <button 
        // onClick={startNieuwSpel}
        onClick={props.gaNaarSpel}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Ga naar het bord
      </button>
    </div>
  );
}