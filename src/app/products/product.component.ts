import {Component, Input} from '@angular/core';
@Component({
    selector:'app-product',
    template: `
    <h2>
    Name: 
    <a [routerLink]= "['/product', product.id]">{{product.name}}</a>
    </h2>`

})

export class ProductComponent{
    @Input() product;
}