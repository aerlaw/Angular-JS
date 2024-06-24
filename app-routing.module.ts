import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './services/update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './services/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './services/recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './services/login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { ProduitGuard } from './services/produit.guard';

const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "rechercheParCategorie", component: RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
