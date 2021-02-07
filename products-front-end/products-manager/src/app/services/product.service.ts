import { IProduct } from './../interfaces/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api';
  // product: Observable<IProduct>;
  // products: Observable<IProduct[]>;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get(`${this.apiUrl}/products`) as Observable<IProduct[]>;
  }

  updateProduct(id: number, product: IProduct) {
    return this.http.put(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }

  createProduct(product: IProduct) {
    console.log(product);
    return this.http.post(`${this.apiUrl}/products`, product);
  }
}
