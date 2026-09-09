package mancala.api;

import mancala.domain.Facade;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game")
@CrossOrigin(origins = "http://localhost:5173")
public class GameController {

    private Facade facade = new Facade();

    @PostMapping("/move/{positie}")
    public BoardStateDto makeMove(@PathVariable int positie) {
        try {
            facade.zet(positie);
            System.out.println("Move executed at position: " + positie);
            return getBoardState();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
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
                facade.getWinnaar().isPresent()
        );
    }
}

class BoardStateDto {
    public int[] stenenPerVakje;
    public boolean spelAfgelopen;
    public boolean hasWinnaar;

    public BoardStateDto(int[] stenenPerVakje, boolean spelAfgelopen, boolean hasWinnaar) {
        this.stenenPerVakje = stenenPerVakje;
        this.spelAfgelopen = spelAfgelopen;
        this.hasWinnaar = hasWinnaar;
    }
}