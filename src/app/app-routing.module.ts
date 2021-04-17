import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComportamentalComponent } from './presentation/comportamental/comportamental.component';
import { CreacionalComponent } from './presentation/creacional/creacional.component';
import { EstructuralComponent } from './presentation/estructural/estructural.component';

const routes: Routes = [
  {path: 'Comportamental', component: ComportamentalComponent},
  {path: 'Creacional', component: CreacionalComponent },
  {path: 'Estructural', component: EstructuralComponent},
  {path: '**', redirectTo: 'Comportamental'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
