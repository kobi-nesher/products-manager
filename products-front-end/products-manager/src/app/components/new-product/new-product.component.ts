import { IProduct } from './../../interfaces/iproduct';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  @Output() addProduct = new EventEmitter<IProduct>();
  private newProduct: IProduct;
  public NewProductForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.NewProductForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
    });
    this.NewProductForm.valueChanges.subscribe();
  }

  AddProduct() {
    if (this.NewProductForm.valid) {
      this.newProduct = this.NewProductForm.getRawValue();
      this.addProduct.emit(this.newProduct);
      this.NewProductForm.patchValue({ name: '', price: null, stock: null });
    }
  }
}
