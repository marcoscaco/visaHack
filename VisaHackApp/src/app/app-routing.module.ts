import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// <-- Modulos UI
import { HomeComponent } from "./ui/home/home.component";
import { InvestimentosComponent } from "./ui/investimentos/investimentos.component";
import { FornecedoresComponent } from "./ui/fornecedores/fornecedores.component";
import { DespesasComponent } from "./ui/despesas/despesas.component";
import { CadastroComponent } from "./ui/cadastro/cadastro.component";
import { CartaoComponent } from "./ui/despesas/cartao/cartao.component";
import { VendasComponent } from "./ui/vendas/vendas.component";

// Modulos UI -->
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "investimentos", component: InvestimentosComponent},
  {path: "fornecedores", component: FornecedoresComponent},
  {path: "despesas", component: DespesasComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "cartao", component: CartaoComponent},
  {path:"venda", component:VendasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
