import { ProductContainerComponent } from './components/product-container/product-container.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'new-product', component: NewProductComponent },
  { path: 'products', component: ProductContainerComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
