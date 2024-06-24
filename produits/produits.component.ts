import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  produits!: Produit[];

  constructor(private produitService : ProduitService, public authService: AuthService) { }

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if(conf) {
      this.produitService.supprimerProduit(p);
    }
  }
}
