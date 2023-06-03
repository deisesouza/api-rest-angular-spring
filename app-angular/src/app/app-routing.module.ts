import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/home/main/main.component';
import { ListaVinculoComponent } from './componentes/vinculo/view/lista-vinculo.component';
import { CrudProfissionalComponent } from './componentes/profissional/view/crud-profissional.component';
import { CrudEstabelecimentoComponent } from './componentes/estabelecimento/view/crud-estabelecimento.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'vinculo', component: ListaVinculoComponent },
  { path: 'profissional', component: CrudProfissionalComponent },
  { path: 'estabelecimento', component: CrudEstabelecimentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
