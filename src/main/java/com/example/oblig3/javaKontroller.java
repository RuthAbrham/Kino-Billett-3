package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.oblig3.KundeRepository;

import java.util.List;

@RestController
public class javaKontroller {
    //for å registrere
    @Autowired
    private KundeRepository rep;

    //for å lagre
    @PostMapping("/lagre")
    public void lagre(Billett i) {
        rep.lagreBillet(i);
    }

    @GetMapping("/hent")
    public List<Billett> visKjop() {
        return rep.hentAlleReg();
    }

    @GetMapping("/slett")
    public void slett() {
        rep.slettAlleBilletter();
    }
}
