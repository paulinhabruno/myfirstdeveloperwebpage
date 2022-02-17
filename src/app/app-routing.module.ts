import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacaoComponent } from './certificacao/certificacao.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },

  {
    path:'certificacao',
    component: CertificacaoComponent


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
