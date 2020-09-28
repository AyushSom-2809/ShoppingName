import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescriptionComponent } from './components/shopping-cart/product-list/product-item/product-description/product-description.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', component:ShoppingCartComponent},
  {path:'ViewDetails', component:ProductDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductDescriptionComponent]
