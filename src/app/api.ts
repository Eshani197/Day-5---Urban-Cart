import { Injectable } from '@angular/core';
//service file
@Injectable({
  providedIn: 'root'
})
export class Api {
  getProductById(id: any) {
    throw new Error('Method not implemented.');
  }

  async getProducts(){
    const res= await fetch('https://dummyjson.com/products');
    return await res.json();
  }
  
  async getProductsById(id: number){
    const res= await fetch('https://dummyjson.com/products/'+id);
    return await res.json();
  }
}
