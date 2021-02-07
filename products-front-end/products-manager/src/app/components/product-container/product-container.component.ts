import { IProduct } from './../../interfaces/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  public products: IProduct[] = [];

  AddProduct(product: IProduct) {
    console.log(product);
    this._productsService.createProduct(product).subscribe(() => {
      this.GetAllProducts();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product added',
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  GetAllProducts() {
    console.log('container');
    this._productsService.getAllProducts().subscribe((resp: any) => {
      this.products = resp.data;
    });
  }

  UpdateProduct(product: IProduct) {
    this._productsService.updateProduct(product.id, product).subscribe(() => {
      this.GetAllProducts();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated successfuly',
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  DeleteProduct(id: number) {
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger m-3',
        cancelButton: 'btn btn-secondary m-3',
      },
      buttonsStyling: false,
    })
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._productsService
            .deleteProduct(id)
            .subscribe(() => this.GetAllProducts());
        }
      });
  }

  constructor(private _productsService: ProductService) {}

  ngOnInit(): void {
    this.GetAllProducts();
  }
}
