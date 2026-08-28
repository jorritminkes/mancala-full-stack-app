package mancala.api;
import mancala.domain.Facade;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game")
public class GameController {

    private Facade facade = new Facade();

    @PostMapping("/move/{positie}")
    public void makeMove(@PathVariable int positie) {
        facade.zet(positie);
        System.out.println("Move executed at position: " + positie);
    }
}
