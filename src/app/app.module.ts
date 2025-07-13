import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';

const routes: Routes = [
  { path: '', redirectTo: 'materiales', pathMatch: 'full' },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'departamentos', component: DepartamentosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MaterialesComponent,
    CiudadesComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}