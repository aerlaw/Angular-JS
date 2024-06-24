package test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Produit;
import com.example.demo.service.ProduitService;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;




@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/prodsByName/{nom}")
    public List<Produit> findByNomProduitContains(@PathVariable("nom") String nom) {
        return produitService.findByNomProduitContains(nom);
    }

    @GetMapping
    public List<Produit> getAllProduits() {
    return produitService.listeProduits();
}

    public interface ProduitRepository extends JpaRepository<Produit, Long> {
        List<Produit> findByNomProduitContains(String nom);
    }
}
