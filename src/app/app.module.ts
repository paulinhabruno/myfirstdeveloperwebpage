import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContatoComponent } from './contato/contato.component';
import { CertificacaoComponent } from './certificacao/certificacao.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { JogodavelhaComponent } from './jogodavelha/jogodavelha.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContatoComponent,
    CertificacaoComponent,
    CalculatorComponent,
    JogodavelhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
