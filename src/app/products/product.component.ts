import {Component, Input} from '@angular/core';
@Component({
    selector:'app-product',
    template: `
    <h3>
    Name: 
    <a [routerLink]= "['/product', product.id]">{{product.name}}</a>
    </h3>`

})

export class ProductComponent{
    @Input() product;
}