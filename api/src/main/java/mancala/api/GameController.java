package mancala.api;

import mancala.domain.Facade;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "http://localhost:5173")
public class GameController {

    private Facade facade = new Facade();
    
    @GetMapping
    public BoardStateDto getGame() {
        return getBoardState();
    }
    
    @PostMapping("/move/{positie}")
    public ResponseEntity<?> makeMove(@PathVariable int positie) {
        try {
            facade.zet(positie);
            System.out.println("Move executed at position: " + positie);
            return ResponseEntity.ok(getBoardState());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private BoardStateDto getBoardState() {
        int[] stenenPerVakje = new int[14];
        for (int i = 1; i <= 14; i++) {
            stenenPerVakje[i - 1] = facade.getAantalStenen(i);
        }

        return new BoardStateDto(
                stenenPerVakje,
                facade.isSpelAfgelopen(),
                facade.getWinnaar().isPresent(),
                facade.getSpelerAanDeBeurt()
        );
    }
    
    @PostMapping("/restart")
    public ResponseEntity<?> restartGame() {
        try {
            facade.startNieuwSpel();
            System.out.println("Game restarted!");
            return ResponseEntity.ok(getBoardState());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

class BoardStateDto {
    public int[] stenenPerVakje;
    public boolean spelAfgelopen;
    public boolean hasWinnaar;
    public int spelerAanDeBeurt;

    public BoardStateDto(int[] stenenPerVakje, boolean spelAfgelopen, boolean hasWinnaar, int spelerAanDeBeurt) {
        this.stenenPerVakje = stenenPerVakje;
        this.spelAfgelopen = spelAfgelopen;
        this.hasWinnaar = hasWinnaar;
        this.spelerAanDeBeurt = spelerAanDeBeurt;
    }
}