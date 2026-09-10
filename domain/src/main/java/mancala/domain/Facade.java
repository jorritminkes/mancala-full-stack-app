package mancala.domain;

import java.util.Optional;

public class Facade {
    private Vakje eersteVakje;
    
    public Facade() {
        this.eersteVakje = new Pocket(1);
    }
    
    public void zet(int positie) {
        Vakje vakje = eersteVakje.getVakjeOpPositie(positie);
        if (!(vakje instanceof Pocket pocket)) {
            throw new IllegalArgumentException("Kan niet op een Mancala een zet doen.");
        }
        pocket.zet();
    }
    
    public int getAantalStenen(int positie) {
        return eersteVakje.getVakjeOpPositie(positie).getAantalStenen();
    }
    
    public int getSpelerAanDeBeurt() {
        Speler speler1 = eersteVakje.getEigenaar();
        
        if (speler1.isAanZet()) {
            return speler1.getSpelerNummer();
        } else {
            return speler1.getTegenstander().getSpelerNummer();
        }
    }
    
    public boolean isSpelAfgelopen() {
        return ((Pocket) eersteVakje).isSpelAfgelopen();
    }
    
//    public Optional<Speler> getWinnaar() {
//        return ((Pocket) eersteVakje).getWinnaar();
//    }

    public Optional<Speler> getWinnaar() {
        if (!isSpelAfgelopen()) {
            return Optional.empty();
        }
        return ((Pocket) eersteVakje).getWinnaar();
    }
    
    public void startNieuwSpel() {
        this.eersteVakje = new Pocket(1);
    }
}
