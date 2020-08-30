import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products =[
    {
      id:1,
      name: 'Egg',
      category: 'food',
      description: 'Lorem egg',
      price: 1,
      picture: ""
    },
    {
      id:2,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Lorem Drink',
      price: 1.50,
      picture: ""
    },
    {
      id:3,
      name: 'DevelopKush',
      category: 'Weed',
      description: 'Lorem Weed',
      price: 2,
      picture: ""
    },
    {
      id:4,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'Lorem Coockies',
      price: 2, 
      picture: ""
    }
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter(product => product.id == id )
  }
}
