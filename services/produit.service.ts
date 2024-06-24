import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits! : Produit[]; //un tableau de Produit
  categories! : Categorie[];
  apiURL: any;
  constructor() {
    this.categories = [ {idCat : 1, nomCat : "PC"},
    {idCat : 2, nomCat : "Imprimante"}];
    this.produits = [
    { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
    dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
    { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
    dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
    { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
    dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
    ];
    }
  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit( prod: Produit){
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
    this.produits.splice(index, 1);
    }
  }
  consulterProduit(id: number): Produit {
    return this.produits.find(p => p.idProduit == id)!;
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }
  listeCategories():Categorie[] {
    return this.categories;
  }
  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }
  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }
  rechercherParNom(nom: string):Observable< Produit[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item =>
    item.nomProduit.toLowerCase().includes(filterText)) : [];
  }
}