import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit{
  produitService: any;
  produits: any;
  allProduits! : Produit[];
  searchTerm! : string;

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe((prods: Produit[]) => {
    console.log(prods);
    this.allProduits = prods;
    });
    }
    onKeyUp(filterText : string){
    this.produits = this.allProduits.filter(item =>
    item.nomProduit.toLowerCase().includes(filterText));
    }
    
  rechercherProds(){
    this.produitService.rechercherParNom(this.nomProduit).
    subscribe((prods: any) => {
    this.produits = prods;
    console.log(prods)});
    }
  nomProduit(nomProduit: any) {
    throw new Error('Method not implemented.');
  }
}
