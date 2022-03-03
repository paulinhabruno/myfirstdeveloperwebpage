import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CertificacaoComponent } from './certificacao/certificacao.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { JogodavelhaComponent } from './jogodavelha/jogodavelha.component';
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

  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
{
  path: 'jogodavelha',
  component: JogodavelhaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
