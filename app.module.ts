import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ModelComponent } from './model/model.component';
import { UpdateProduitComponent } from './services/update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './services/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './services/recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './services/search-filter.pipe';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    ModelComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
