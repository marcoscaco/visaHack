import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { CadastroComponent } from './ui/cadastro/cadastro.component';
import { DespesasComponent } from './ui/despesas/despesas.component';
import { InvestimentosComponent } from './ui/investimentos/investimentos.component';
import { FornecedoresComponent } from './ui/fornecedores/fornecedores.component';
import { FooterComponent } from './ui/footer/footer.component';
import { VendasComponent } from './ui/vendas/vendas.component';
import { CartaoComponent } from './ui/despesas/cartao/cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastroComponent,
    DespesasComponent,
    InvestimentosComponent,
    FornecedoresComponent,
    FooterComponent,
    VendasComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
