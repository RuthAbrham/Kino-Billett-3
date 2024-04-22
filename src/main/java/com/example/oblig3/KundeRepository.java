package com.example.oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;



import java.util.List;

@Repository
public class KundeRepository {
    // Autowire JdbcTemplate
    @Autowired
    private JdbcTemplate db;

    public void lagreBillet(Billett i) {
        String sql = "INSERT INTO Billett(film,antall,fornavn,etternavn,telefonnr,epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, i.getFilm(), i.getAntall(), i.getFornavn(), i.getEtternavn(),
                i.getTelefonnr(), i.getEpost());
    }

    public List<Billett> hentAlleReg() {
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }


}

