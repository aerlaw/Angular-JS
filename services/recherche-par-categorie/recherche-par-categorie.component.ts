import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { Categorie } from '../../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css'
})

export class RechercheParCategorieComponent implements OnInit {
rechercherProds() {
throw new Error('Method not implemented.');
}
nomProduit: any;
supprimerProduit(_t25: Produit) {
throw new Error('Method not implemented.');
}
  produits!: Produit[];
  IdCategorie!: number;
  categories!: Categorie[];
  produitService: any;

  ngOnInit(): void {
    this.produitService.listeCategories().
      subscribe((cats: { _embedded: { categories: Categorie[]; }; }) => {
        this.categories = cats._embedded.categories;
        console.log(cats);
      });
  }

  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie).
      subscribe((prods: Produit[]) => { this.produits = prods });
  }
}
