import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GraciasComponent } from './pages/gracias/gracias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gracias', component: GraciasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
