import { ProductContainerComponent } from './components/product-container/product-container.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'new-product', component: NewProductComponent },
  { path: 'products', component: ProductContainerComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
